import React from 'react'
import { Tag } from 'antd';

const TagRenderer = (props) => {
 
    const { label, value, closable, onClose } = props;
    
    return (
        <Tag closable={closable} onClose={onClose} style={{ marginRight: 3}}>
            {label}
        </Tag>
    )
  
}

export default TagRenderer