import React, { useEffect, useState } from 'react'
import api from '../../api/instance'
import axios from 'axios';
import { createUniver } from '../../api';
import MenuAppBar from '../../compontents/header/auth/MenuAppBar';

import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import CreateUniverDialog from '../../compontents/dialog/CreateUniverDialog';
import GenerateStudentKey from '../../compontents/dialog/GenerateStudentKey';
import CreateSubjectDialog from '../../compontents/dialog/CreateSubjectDialog';
import ListSubject from '../../compontents/ListSubject';
import QRCode from 'react-qr-code';
import { observer } from 'mobx-react-lite';
import TeacherStore from '../../store/TeacherStore';
import { ListSubjectForReview } from '../../compontents/ListSubjecetForReview';

export const  TeacherHome = observer(()=> {
    const key:any= TeacherStore.getsubjectCode;
  const handleScan = (data:any) => {
    if (data) {
    }
  }

  const handleError = (err :any)=> {
    console.error(err);
  }


  return (
    <>
    <MenuAppBar name={'TeacherPage'}/>

<div style={{display:'flex',justifyContent:"center", margin:20}}> 

<CreateSubjectDialog></CreateSubjectDialog>
</div>

<div style={{display:'flex',justifyContent:"center", flexWrap:'wrap'}}> 

<ListSubject></ListSubject>
</div>
<div style={{display:"flex", justifyContent:'center'}}>
  <h1>
 student count: {TeacherStore.getCurrentAmount} / {TeacherStore.getamountStudent}

  </h1>
</div>
<div style={{margin:40, display:'flex',justifyContent:"center"}}>
{key&&

<QRCode

size={600}
value={key}>

</QRCode>}
</div>
    </>
  );
}
)
