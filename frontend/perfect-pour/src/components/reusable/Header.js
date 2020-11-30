import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({navList}) => {

  const renderNavigation = (l) => {
    const listItems = l.map((elem) => (
      <li key={elem}><Link to={`/${elem}`}>{elem}</Link></li>
    ))

    return (
      <ul id="main-navigation">{listItems}</ul>
    )
  }
  return (
    <header id="header">
      <h1>The perfect pour</h1>
      {navList && renderNavigation(navList)}
    </header>
  )
}

export default Header

Header.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.string)
}