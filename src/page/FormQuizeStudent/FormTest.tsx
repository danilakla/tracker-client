import React, { useState } from 'react'
import MenuAppBar from '../../compontents/header/auth/MenuAppBar'
import { Button, TextField } from '@mui/material'
import { startQuize } from '../../api'
import Quiz from "react-quiz-component"

export const   FormTest = () =>{
  const [testName,setTestName]= useState("")
  const [dataJson,setdataJson]= useState()
  async  function initQuize() {
    const data = await  startQuize(testName);
    setdataJson(
    JSON.parse(data.form)
    )
    console.log(    JSON.parse(data.form)
    );
    
     
    }

    return (
    <div>
               <MenuAppBar name="Quize Page"></MenuAppBar> 
     <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
               <TextField
              onChange={(event)=>{setTestName(event.target.value)}}
              />
<div></div>
              <Button onClick={initQuize}>Start quize</Button>
              <div style={{display:'flex', justifyContent:'center'}}>

              {dataJson&&
              <Quiz quiz={dataJson} />
            }
</div>
              </div>

        </div>
  )
}
