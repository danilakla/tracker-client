import React from 'react'
import ITitle from './ITitle'
function Title(title:ITitle) {
  return (
    <div>
        <h1>{title.Title}</h1>
       
        <>{title.text}</>
        <img width={600} height={900}  src={require('D:\\app\\courceProject\\client\\qr-social-client\\src\\static\\Saly-14.png')}/>

    </div>
  )
}

export default Title