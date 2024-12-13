import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { createUniver, generageTeacherKey } from '../../api';

export default function GenerateStudentKey() {
    const [open, setOpen] = React.useState(false);


    const [key, setKey] = React.useState('');

    const  handleClickOpen =async () => {
      try {
        const data = await generageTeacherKey();
        setKey(data.key)
        setOpen(true);

      } catch (error) {
        alert('bad request')      
      }
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  

    
      async function  handleAgree(event:any) {
        setOpen(false);

      }
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
      Generate Key
        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Share the key between teacher
            <TextField
                margin="normal"
                required
                fullWidth
                value={key}
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
