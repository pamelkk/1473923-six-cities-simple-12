import {render, screen} from '@testing-library/react';
import { Offers } from '../../mocks/offers';
import App from './app';

const Info = {
  offers: Offers
} as const;

test('Renders app-component', () => {
  render(<App offers={Info.offers} />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
