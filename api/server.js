/**
 * Vercel Serverless Function for Remix/Hydrogen App
 * This adapts the Hydrogen/Remix build for Vercel's serverless environment
 */

import * as build from '../build/server/index.js';
import { createRequestHandler } from '@remix-run/server-runtime';

// Create Remix request handler from build
const handleRequest = createRequestHandler(build, 'production');

export default async function handler(req, res) {
  try {
    // Construct the full URL for the request
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `${protocol}://${host}`);
    
    // Create a Web API Request object compatible with Remix
    const headers = new Headers();
    Object.entries(req.headers).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => headers.append(key, v));
        } else {
          headers.set(key, String(value));
        }
      }
    });

    const request = new Request(url.toString(), {
      method: req.method || 'GET',
      headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' && req.body 
        ? (typeof req.body === 'string' ? req.body : JSON.stringify(req.body))
        : undefined,
    });

    // Call the Remix request handler
    const response = await handleRequest(request);

    // Convert Web API Response to Vercel response
    const body = await response.text();
    
    // Set all response headers
    response.headers.forEach((value, key) => {
      // Skip content-encoding as Vercel handles compression
      if (key.toLowerCase() !== 'content-encoding') {
        res.setHeader(key, value);
      }
    });
    
    // Set status code
    res.status(response.status);
    
    // Send response body
    res.send(body);
    
  } catch (error) {
    console.error('Error in Vercel serverless function:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      url: req.url,
      method: req.method,
    });
    
    // Return error response
    res.status(500).json({ 
      error: 'Internal Server Error', 
      message: process.env.NODE_ENV === 'production' 
        ? 'An error occurred processing your request'
        : error.message,
    });
  }
}
