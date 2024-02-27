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

function TeacherHome() {



  return (
    <>
    <MenuAppBar name={'TeacherPage'}/>

 <CreateSubjectDialog></CreateSubjectDialog>

<ListSubject></ListSubject>


    </>
  );
}
export default TeacherHome


