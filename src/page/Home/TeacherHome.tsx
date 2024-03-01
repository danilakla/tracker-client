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
import { QrReader } from 'react-qr-reader';
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

 <CreateSubjectDialog></CreateSubjectDialog>

<ListSubject></ListSubject>
<div style={{margin:40}}>
{key&&

<QRCode

size={400}
value={key}>

</QRCode>}
</div>
<ListSubjectForReview></ListSubjectForReview>
    </>
  );
}
)
