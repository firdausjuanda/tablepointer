import React from 'react'
import Layout from '../Layout'
import Result from '../components/Result'
import Stepper from '../components/Stepper'
import Loading from '../components/Loading'

import { useState, useEffect } from 'react';

const ResultPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  
    return () => {
      clearTimeout(timer);
    }
  }, [])
  

  return (
    <Layout>
        <Stepper progress={2} />
        {isLoading ? <Loading/> : <Result/> }
        
    </Layout>
  )
}

export default ResultPage