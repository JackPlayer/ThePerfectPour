import React from 'react'
import Page from './reusable/Page'

const Home = ({navList, active}) => {
  const username = "Jack"
  return (
    <Page active={active} pageTitle={`Welcome back ${username}...`} navList={navList}>

    </Page>
  )
}

export default Home