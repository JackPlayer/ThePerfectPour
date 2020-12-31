/**
 * Header.test.js
 * Testing for the Header component
 * Requires Browser Router considering header uses react-router
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/reusable/Header';

describe('<Header />', () => {
  const navList = [
    'kenny',
    'cartman',
    'kyle',
  ];
  const active = navList[1];
  const activeInvalid = 'not there';

  it('renders the header without a navlist', () => {
    const component = render(<Header />);
    const header = component.getByTestId('header');
    const navigation = component.container.querySelector('ul');

    expect(header).toHaveTextContent('The perfect pour');
    expect(navigation).toBeNull();
  });

  it('renders the title & navigation list with a navlist', () => {
    const component = render(<BrowserRouter><Header navList={navList}/></BrowserRouter>);

    const navigation = component.getByTestId('main-nav');

    expect(navigation).toHaveTextContent(navList[0]);
    expect(navigation).toHaveTextContent(navList[1]);
    expect(navigation).toHaveTextContent(navList[2]);
  });

  it('properly highlights an active selection', () => {
    const component = render(
      <BrowserRouter>
        <Header navList={navList} active={active}/>
      </BrowserRouter>,
    );

    const navigation = component.getByTestId('main-nav');
    const activeElem = navigation.querySelectorAll('.active');

    expect(activeElem.length).toBe(1);
    expect(activeElem[0]).toHaveTextContent(navList[1]);
  });

  it('if active is not in navlist then the navlist renders without any active', () => {
    const component = render(
      <BrowserRouter>
        <Header navList={navList} active={activeInvalid}/>
      </BrowserRouter>,
    );

    const navigation = component.getByTestId('main-nav');
    const activeElem = navigation.querySelectorAll('.active');

    expect(activeElem.length).toBe(0);
  });
});
