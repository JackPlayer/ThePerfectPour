/**
 * Footer.test.js
 * Testing for the Footer component
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Footer from '../../components/reusable/Footer';

describe('<Footer />', () => {
  it('has the site title', () => {
    const component = render(<Footer />);
    const footer = component.getByTestId('footer');
    expect(footer).toHaveTextContent('The Perfect Pour');
  });

  it('has the current year', () => {
    const date = new Date();
    const year = date.getFullYear();
    const component = render(<Footer />);
    const footer = component.getByTestId('footer');
    expect(footer).toHaveTextContent(year);
  });
});
