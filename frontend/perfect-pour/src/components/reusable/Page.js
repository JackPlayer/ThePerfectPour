import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

const Page = ({navList, children}) => {
  return (
    <>
      <Header navList={navList}/> 
      <div className="content">
        <div className="container">
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