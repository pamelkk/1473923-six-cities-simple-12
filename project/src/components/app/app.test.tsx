import {render, screen} from '@testing-library/react';
import { Offers } from '../../mocks/offers';
import App from './app';

const Info = {
  CountForRent: 312,
  offers: Offers
} as const;

test('Renders app-component', () => {
  render(<App countForRent={Info.CountForRent} offers={Info.offers} />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
