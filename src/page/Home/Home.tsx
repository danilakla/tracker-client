import React, { useEffect, useState } from 'react'
import api from '../../api/instance'
import axios from 'axios';
import { createQRCode } from '../../api';
import FormQR from '../../compontents/uploadqrcontent/FormQR';
import PostQR from '../../compontents/uploadqrcontent/PostQR';
import MenuAppBar from '../../compontents/header/auth/MenuAppBar';
import FormDialog from '../../compontents/common/input/form/FormDialogAddQR';
import FormDialogAddQR from '../../compontents/common/input/form/FormDialogAddQR';
import AlertDialog from '../../compontents/common/AlertDialog';
import { Backdrop, CircularProgress } from '@mui/material';

function Home() {

  // const [open, setOpen]=useState(false)
  useEffect(()=>{
    loadQRData();
  },[]);
const loadQRData = async ()=>{

  
}
  function handleClose() {
  }

  return (
    <>
    {/* <AlertDialog/> */}
    <MenuAppBar name={'Home'}/>
    {/* <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={true}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop> */}
    <FormDialogAddQR></FormDialogAddQR>

    </>
  );
}
export default Home


