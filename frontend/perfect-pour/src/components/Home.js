import React from 'react'
import Page from './reusable/Page'

const Home = ({navList, active}) => {
  const username = "Jack"
  return (
    <Page active={active} pageTitle={`Welcome back ${username}...`} navList={navList}>
      <div id="home-page">
        <div id="progress-section">
          <h2 className="sub-title">In progress</h2>
            <div className="content-box">
              
            </div>
        </div>
        
        <div id="create-section">
          <div id="create-brew">
            <h2 className="sub-title">New Brew</h2>
            <div className="content-box">
              
            </div>
          </div>
          <div id="create-recipe">
            <h2 className="sub-title">New Recipe</h2>
            <div className="content-box">

            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home