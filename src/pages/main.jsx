import React from 'react'
import Layout from '../Layout'
import OutletInfo from '../components/OutletInfo'
import Stepper from '../components/Stepper'

const Main = () => {
  return (
    <Layout>
        <Stepper progress={0}/>
        <OutletInfo/>
    </Layout>
  )
}

export default Main