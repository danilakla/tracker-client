import React, { useEffect, useState } from 'react'
import api from '../../api/instance'
import axios from 'axios';
import { createUniver, setUpAttendence } from '../../api';
import MenuAppBar from '../../compontents/header/auth/MenuAppBar';

import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import CreateUniverDialog from '../../compontents/dialog/CreateUniverDialog';
import GenerateStudentKey from '../../compontents/dialog/GenerateStudentKey';
import { QrReader } from 'react-qr-reader';
import { Html5QrcodeScanner } from 'html5-qrcode';

function StudentHome() {

  const[scanResult, setScanResult]= useState(null)
useEffect(()=>{

  const scanner= new Html5QrcodeScanner('reader', {
    qrbox:{
      width:100,
      height:100
    },
    fps:60
  }, true)

  scanner.render(setAttendence, (er)=>console.log(er));
  
  
  async function setAttendence(result:any){
    scanner.clear()
    setScanResult(result);
  console.log(result);
  
  // if (!!result) {
  //   await setUpAttendence({code:result, time:new Date()})
  // }

}   
},[])
 

  return (
    <>
    <MenuAppBar name={'StudentPage'}/>

321312
{scanResult
?<div>success: {scanResult}</div>
:<div id='reader'></div>
}

    </>
  );
  
}
export default StudentHome


