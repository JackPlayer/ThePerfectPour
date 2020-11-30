import React from 'react'
import Page from './reusable/Page'

const Home = ({navList, active}) => {
  return (
    <Page active={active} pageTitle="Welcome back..." navList={navList}>

    </Page>
  )
}

export default Home