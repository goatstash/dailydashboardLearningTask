import Dashboard from './dashboard';
import { render } from '@testing-library/react';

test('it renders a list item that displays key NFT details', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/This is the Dashboard page/i)).toBeInTheDocument();
});
