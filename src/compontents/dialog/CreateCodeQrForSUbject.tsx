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
          console.log();

          if(!Number.isInteger(+time)) throw new Error("time is not a number");
          const code = await getCodeForQrSubject(id.id, time);
          const socket = await io( process.env.REACT_APP_SERVER||'https://localhost:3333', {
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
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Put the livetime of qrcode in second

            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={initNam}
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