import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type {LinksFunction} from '@remix-run/node';
import Header from './components/Header';
import styles from './styles/index.css?url';
import responsiveFixed from './styles/responsive-fixed.css?url';
import mobileResponsive from './styles/mobile-responsive.css?url';
import mentraLive from './styles/mentra-live.css?url';
import mobileMentraLive from './styles/mobile-mentra-live.css?url';
import animations from './styles/animations.css?url';
import globalImprovements from './styles/global-improvements.css?url';
import responsivePadding from './styles/responsive-padding.css?url';

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: styles},
  {rel: 'stylesheet', href: responsiveFixed},
  {rel: 'stylesheet', href: mobileResponsive},
  {rel: 'stylesheet', href: mentraLive},
  {rel: 'stylesheet', href: mobileMentraLive},
  {rel: 'stylesheet', href: animations},
  {rel: 'stylesheet', href: globalImprovements},
  {rel: 'stylesheet', href: responsivePadding},
];

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
