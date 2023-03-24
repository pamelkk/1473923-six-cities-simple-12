import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Info = {
  offers: Offers
} as const;

root.render(
  <React.StrictMode>
    <App offers={Info.offers} />
  </React.StrictMode>,
);
