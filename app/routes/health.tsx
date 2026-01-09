import type {LoaderFunctionArgs} from '@remix-run/node';
import {json} from '@remix-run/node';

export async function loader({request}: LoaderFunctionArgs) {
  return json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    },
    {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    },
  );
}
