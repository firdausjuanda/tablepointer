"use client"
import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const Loading = () => {
  return (
    <div className="mt-[135px] text-center">
        <Spin indicator={<LoadingOutlined
            style={{
            fontSize: 80,
            }}
            spin
        />} />
        <br />
        <h1 className='head_text_large mt-20 mb-40' style={{ textAlign: 'center' }}>Calculating</h1>
        
    </div>
  )
}

export default Loading