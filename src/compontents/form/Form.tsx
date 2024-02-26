import React from 'react'
import IForm from './IForm'
import './form.css'
function Form({title,children}:IForm) {
  return (
    <div className='form'>
        <h1>{title}</h1>
        {children}
    </div>
  )
}

export default Form