import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { createUniver, getCodeForQrSubject } from '../../api';
import TeacherStore from '../../store/TeacherStore';
import { observer } from 'mobx-react-lite';
import { io } from 'socket.io-client';

export const  CreateCodeQrForSUbject= observer((id:any)=> {

    const [open, setOpen] = React.useState(false);
    const [socket, setSocket]:any[] = React.useState();


    const [time, setTime] = React.useState(0);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
  
  
    function initNam(event:any): void {
        setTime(event.target.value)
      }
    
      async function  handleAgree(event:any) {
        try {
          
          const code = await getCodeForQrSubject(id.id, time);
          const socket = await io('https://192.168.31.30:3333',{
            query:{code}
          });
          console.log(socket);
          TeacherStore.setAmountSelectedStudent(id.amountStudent);
          setSocket(socket)
          // Handle events or perform any necessary actions
          socket.on('connect', () => {
            console.log('Socket connected');
            // Additional logic when the connection is established
          });
      
          socket.on('disconnect', () => {
            console.log('Socket disconnected');
            // Additional logic when the connection is disconnected
          });
          socket.on('incement',(data:any)=>{
            console.log(data);
            TeacherStore.incrementStudentCount();
            
            
          })
          TeacherStore.setSubjectCode(code);

            
        } catch (error) {
          alert(error)      
        }
      }
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
      qrcode</Button>
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
)