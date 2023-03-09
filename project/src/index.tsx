import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Info = {
  CountForRent: 312,
} as const;

root.render(
  <React.StrictMode>
    <App countForRent={Info.CountForRent} />
  </React.StrictMode>,
);
