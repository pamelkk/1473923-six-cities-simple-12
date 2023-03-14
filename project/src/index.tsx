import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Info = {
  CountForRent: 312,
  offers: Offers
} as const;

root.render(
  <React.StrictMode>
    <App countForRent={Info.CountForRent} offers={Info.offers} />
  </React.StrictMode>,
);
