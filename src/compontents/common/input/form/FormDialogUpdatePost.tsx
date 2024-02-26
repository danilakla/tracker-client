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

export default function FormDialogUpdatePost({postId,children}:any) {
    
  const [open, setOpen] =useState(false);

  const [desciption, setDesciption]: any = useState();

  async function updateQR(e: any) {
    e.preventDefault();


    const formData = new FormData();
    formData.append('description', desciption);
    
    window.location.reload();



}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };

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

        <input type='text' onChange={e => setDesciption(e.target.value)}/>
        <div></div>




        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateQR}>Create</Button>
                  {/* {specified the handler} maby send data from mobx to server and clouse it  */}

        </DialogActions>
      </Dialog>
    </div>
  );
}
