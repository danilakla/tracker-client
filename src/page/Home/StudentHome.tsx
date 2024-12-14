import React, { useEffect, useState } from 'react'
import api from '../../api/instance'
import axios from 'axios';
import { createUniver, setUpAttendence, setUpFlagForReview } from '../../api';
import MenuAppBar from '../../compontents/header/auth/MenuAppBar';

import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import CreateUniverDialog from '../../compontents/dialog/CreateUniverDialog';
import GenerateStudentKey from '../../compontents/dialog/GenerateStudentKey';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { io } from 'socket.io-client';

function StudentHome() {
const [flag, setFlag]= useState(false);
const [flagSuc, setFlagSuc]= useState(false);
const [socket, setSocket]:any= useState();
const [subjectId, setSubjectId]= useState(0);
  const[scanResult, setScanResult]= useState(null)
useEffect(()=>{

  const scanner= new Html5QrcodeScanner('reader', {
    qrbox:{
      width:300,
      height:300
    },
    fps:60
  }, true)

  scanner.render(setAttendence, (er)=>console.log(er));
  
  
  async function setAttendence(result:any){
    scanner.clear()
    setScanResult(result);
  
  if (!!result) {
   try {

    const data=  await setUpAttendence({code:result, time:new Date()})


    const socket = await io(process.env.REACT_APP_SERVER||'https://localhost:3333');
    
    setSocket(socket)
    // Handle events or perform any necessary actions
    socket.on('connect', () => {
      // Additional logic when the connection is established
    });

    socket.on('disconnect', () => {
      // Additional logic when the connection is disconnected
    });
    if(data.code=="success"){
      socket.emit('counter',result )
      setFlagSuc(true);
    }
   else if(data.status==400){
    alert(data.code+" "+data.status);

      setSubjectId(data.subjectId);
      setFlag(true);
    }else{
      alert(data.code) 
      window.location.reload();

    }
    
   } catch (error) {
    
   }
  }
  

}   
},[])
 async function sendFlag(){
  try {
    const data = await setUpFlagForReview(+subjectId);
    alert(data.reviewStatus);
    setFlag(false)
    window.location.reload();
  } catch (error) {
    
  }
 }

  return (
    <>
    <MenuAppBar name={'StudentPage'}/>

    <div>
      {flagSuc&&<h1>Success</h1>}
  {flag&&<button onClick={sendFlag}>send flag to true for review</button>}
</div>
{scanResult
?<></>
:<div id='reader'></div>
}


    </>
  );
  
}
export default StudentHome


