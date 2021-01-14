/**
 * Header.js
 * React component for the header used in the application
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ navList, active }) => {
  /**
   * Markup for the navigation list
   *
   * @param l List of navigation items to render
   */

  const renderNavigation = (l) => {
    const listItems = l.map((elem) => (
      <li key={elem}><Link to={`/${elem}`} className={elem === active ? 'active' : ''}>{elem}</Link></li>
    ));

    return (
      <ul data-testid="main-nav" id="main-navigation">{listItems}</ul>
    );
  };
  return (
    <header data-testid="header" id="header">
      <h1 data-testid="title">The perfect pour</h1>
      {navList && renderNavigation(navList)}
    </header>
  );
};

export default Header;

Header.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
};
