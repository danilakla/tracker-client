import React, { useState } from 'react'
import MenuAppBar from '../../compontents/header/auth/MenuAppBar'
import { Button, TextField } from '@mui/material'
import { getUserRole, startQuize } from '../../api'
import Quiz from "react-quiz-component"
import { useNavigate } from 'react-router-dom'

export const   FormTest = () =>{
  const [testName,setTestName]= useState("")
  const [dataJson,setdataJson]= useState()

  const [role, setRole] = React.useState();
  React.useEffect(()=>{
    setUserRole();
  },[])
const navigate = useNavigate()
  async function setUserRole() {
    try {
        const role1= await getUserRole();
        if(role1.role!="STUDENT") navigate("login")
    } catch (error) {
      
      navigate('/login')
    }
  
  }
  async  function initQuize() {

    try {
      const data = await  startQuize(testName);
      setdataJson(
      JSON.parse(data.form)
      )
    
      
    } catch (error) {
      alert("specify correct name")
    }
 
     
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
