/**
 * Page.js
 * React component for an individual page
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Page = ({
  navList, pageTitle, children, active, login, setUser,
}) => {
  const history = useHistory();

  /**
   * Logout handler. Sends the user back to /login
   */
  const handleLogout = () => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('perfectpour-token');
    setUser(null);
    history.push('/login');
  };
  return (
    <>
      <Header active={active} navList={navList}/>
      <div className="content">
        <div className="container">
        { pageTitle && <h1 data-testid="page-title" className="page-title">{pageTitle}</h1> }
          {children}
        </div>
      </div>
      { !login && (<div id="logout">
        <button data-testid="logout-btn" className='btn-secondary' onClick={() => handleLogout()}>Logout</button>
      </div>) }
      <Footer />
    </>

  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node,
  navList: PropTypes.arrayOf(PropTypes.string),
  pageTitle: PropTypes.string,
  active: PropTypes.string,
  login: PropTypes.bool,
  setUser: PropTypes.func,
};
