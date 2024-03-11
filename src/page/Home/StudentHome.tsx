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


    const socket = await io('https://192.168.31.30:3333');
    console.log(socket);
    
    setSocket(socket)
    // Handle events or perform any necessary actions
    socket.on('connect', () => {
      console.log('Socket connected');
      // Additional logic when the connection is established
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
      // Additional logic when the connection is disconnected
    });
    socket.emit('counter',result )
   alert(data.code) 
   if(data.status==400){
      alert(data.code+data.status);

      setSubjectId(data.subjectId);
      setFlag(true);
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
  } catch (error) {
    
  }
 }

  return (
    <>
    <MenuAppBar name={'StudentPage'}/>

    <div>
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


