import type {MetaFunction} from '@remix-run/node';
import {useState, useEffect} from 'react';
import MentraOS from '../imports/MentraOS';
import {Toaster} from '../components/ui/sonner';

export const meta: MetaFunction = () => {
  return [
    {title: 'Apps & OS - Mentra'},
    {name: 'description', content: 'Explore MentraOS, MiniApp Store, and developer resources'},
    {property: 'og:title', content: 'Apps & OS - Mentra'},
    {property: 'og:description', content: 'Explore MentraOS and developer resources'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function AppsOSPage() {
  return (
    <>
      <MentraOS />
      <Toaster position="top-center" richColors />
    </>
  );
}
