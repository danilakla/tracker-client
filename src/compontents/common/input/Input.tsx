import React from 'react'
import IInput from './IInput'
import { TextField } from '@mui/material'

function Input(prop:any) {
  return (
    <>
    <TextField {...prop} id="outlined-basic" label="Outlined" variant="outlined" >
        {prop.children}
    </TextField>
    </>
  )
}

export default Input