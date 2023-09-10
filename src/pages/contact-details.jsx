import React from 'react'
import Layout from '../Layout'
import ContactDetails from '../components/ContactDetail'
import Stepper from '../components/Stepper'

const ContactDetailsPage = () => {
  return (
    <Layout>
        <Stepper progress={1}/>
        <ContactDetails/>
    </Layout>
  )
}

export default ContactDetailsPage