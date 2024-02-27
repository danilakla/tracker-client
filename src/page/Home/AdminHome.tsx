import React, { useEffect, useState } from 'react'
import api from '../../api/instance'
import axios from 'axios';
import { createUniver } from '../../api';
import MenuAppBar from '../../compontents/header/auth/MenuAppBar';

import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import CreateUniverDialog from '../../compontents/dialog/CreateUniverDialog';
import GenerateStudentKey from '../../compontents/dialog/GenerateStudentKey';

function AdminHome() {



  return (
    <>
    <MenuAppBar name={'AdminPage'}/>
<CreateUniverDialog/>
<GenerateStudentKey/>
 




    </>
  );
}
export default AdminHome


