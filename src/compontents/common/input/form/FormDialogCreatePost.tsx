import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { createQRCode } from '../../../../api';
import { Checkbox } from '@mui/material';

export default function FormDialogCreatePost({qrid,children}:any) {
  const [open, setOpen] =useState(false);

  const [IsPublic, setIsPublic]: any = useState(false);
  const [desciption, setDesciption]: any = useState();
    const postStore={};
  async function createQR(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', desciption);
    formData.append('isPublic', IsPublic);
    formData.append('qrId', qrid);

    const data =null;
    console.log(data);
    window.location.reload();



}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };
console.log(IsPublic);

  return (
    <div>
    
      <Button variant="outlined" onClick={handleClickOpen}>
      {children}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>        
            {/* {prop s text} */}
        </DialogTitle>
        <DialogContent>

        <label>Descripiton</label>
        <div></div>

        <input style={{marginBottom:20}} type='text' onChange={e => setDesciption(e.target.value)}/>
        <div></div>

        <label>IS PUBLIC POST?</label>
        <div></div>

        <Checkbox onClick={()=>setIsPublic(!IsPublic)}></Checkbox>
        <div></div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createQR}>Create</Button>
                  {/* {specified the handler} maby send data from mobx to server and clouse it  */}

        </DialogActions>
      </Dialog>
    </div>
  );
}
