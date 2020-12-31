/**
 * Page.test.js
 * Testing for the Page component
 * Requires Browser Router considering page uses react-router
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page from '../../components/reusable/Page';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<Page />', () => {
  describe('normal pages', () => {
    const navList = [
      'kenny',
      'cartman',
      'kyle',
    ];
    const active = navList[1];
    const pageTitle = 'South Park';
    const childrenMessage = 'This is a test';

    let component;

    beforeEach(() => {
      component = render(
      <BrowserRouter>
        <Page navList={navList} pageTitle={pageTitle} active={active} login={false}>
          <p>{childrenMessage}</p>
        </Page>
      </BrowserRouter>,
      );
    });

    it('has a header and a footer', () => {
      const header = component.container.querySelector('header');
      const footer = component.container.querySelector('footer');

      expect(header).not.toBeNull();
      expect(footer).not.toBeNull();
    });

    it('renders the proper children', () => {
      expect(component.container).toHaveTextContent(childrenMessage);
    });

    it('has a page title', () => {
      const title = component.getByTestId('page-title');

      expect(title).toHaveTextContent(pageTitle);
    });

    it('has a logout button if it is not a login page', () => {
      const logoutBtn = component.getByTestId('logout-btn');

      expect(logoutBtn).toHaveTextContent('Logout');
    });

    it('logout button redirects to proper url when clicked', () => {
      const logoutBtn = component.getByTestId('logout-btn');

      fireEvent.click(logoutBtn);
      expect(mockHistoryPush).toHaveBeenCalledTimes(1);
      expect(mockHistoryPush).toHaveBeenCalledWith('/login');
    });
  });

  describe('login / register pages', () => {
    it('has no logout button if it is login page', () => {
      const loginComponent = render(
        <BrowserRouter>
          <Page login={true}>
          </Page>
        </BrowserRouter>,
      );
      expect(loginComponent.queryByTestId('logout-btn')).not.toBeInTheDocument();
    });
  });
});
