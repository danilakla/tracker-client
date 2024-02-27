import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { createUniver } from '../../api';

export default function CreateUniverDialog() {
    const [open, setOpen] = React.useState(false);


    const [nameUniver, setUniverName] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
  
  
    function initNam(event:any): void {
        setUniverName(event.target.value)
      }
    
      async function  handleAgree(event:any) {
        try {
          const univer = await createUniver({univerName:nameUniver});
          
        } catch (error) {
          alert(error)      
        }
      }
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
      Create university
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
            Put the name of university to placeholder

            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={initNam}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
