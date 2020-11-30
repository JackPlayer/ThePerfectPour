import React from 'react'
import Page from './reusable/Page'

const History = ({navList}) => {
  return (
    <Page pageTitle="History" navList={navList}>
      <div id="history-page">
        <div id="brewing">
          <h2 className="sub-title">
            Brewing
          </h2>
          <div className="content-box" id="brewing-content">

          </div>
        </div>
        <div id="recipes">
          <h2 className="sub-title">
            Recipes
          </h2>
          <div className="content-box" id="recipe-content">
             
          </div>
        </div>
      </div>
    </Page>
  )
}

export default History