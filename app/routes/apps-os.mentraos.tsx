import type {MetaFunction} from '@remix-run/node';
import {useState, useEffect} from 'react';
import MentraOS from '../imports/MentraOS';
import {Toaster} from '../components/ui/sonner';

export const meta: MetaFunction = () => {
  return [
    {title: 'MentraOS - Mentra'},
    {name: 'description', content: 'MentraOS - Open-source operating system for smart glasses'},
    {property: 'og:title', content: 'MentraOS - Mentra'},
    {property: 'og:description', content: 'Open-source operating system for smart glasses'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function MentraOSDetailPage() {
  return (
    <>
      <MentraOS />
      <Toaster position="top-center" richColors />
    </>
  );
}
