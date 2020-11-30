import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

const Page = ({navList, pageTitle, children, active}) => {
  return (
    <>
      <Header active={active} navList={navList}/> 
      <div className="content">
        <div className="container">
        { pageTitle && <h1 className="page-title">{pageTitle}</h1> }
          {children}
        </div>
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