import React from 'react';
import {Icon} from 'antd';


export default ({ containerStyle, iconSize = '42px', iconColor = '#8c8c8c' }) => {

  return (
    <div style={{
      position: 'relative',
      height: '200px',
      background: '#e8e8e8',
      borderRadius: '3px',
      ...containerStyle,
    }}>
      <div style={{
        position: 'absolute',
        margin: 'auto',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: iconSize,
        height: iconSize,
        lineHeight: iconSize,
        fontSize: iconSize,
        color: iconColor,  }}>
        <Icon type="picture" theme="filled" />
      </div>
    </div>
  );

}
