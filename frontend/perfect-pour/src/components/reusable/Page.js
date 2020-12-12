import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const Page = ({navList, pageTitle, children, active}) => {
  const history = useHistory()

  const handleLogout = () => {
    history.push('/login')
  }
  return (
    <>
      <Header active={active} navList={navList}/> 
      <div className="content">
        <div className="container">
        { pageTitle && <h1 className="page-title">{pageTitle}</h1> }
          {children}
        </div>
      </div>
      <div id="logout">
        <button className='btn-secondary' onClick={() => handleLogout()}>Logout</button>
      </div>
      <Footer />
    </>
    
  )
}

export default Page

Page.propTypes = {
  children: PropTypes.node,
  navList: PropTypes.arrayOf(PropTypes.string)
}