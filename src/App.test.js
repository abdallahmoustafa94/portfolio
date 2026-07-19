import { render } from '@testing-library/react';
import App from './App';

test('renders navigation', () => {
  render(<App />);
  expect(document.querySelector('nav')).toBeInTheDocument();
});
