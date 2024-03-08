import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React from 'react'
import { getAmountStudentAttend, getCodeForQrSubject } from '../../api';
import TeacherStore from '../../store/TeacherStore';

export const   CalculatePrecentOFAvgAttendForm = (param:any)=>{

    const [open, setOpen] = React.useState(false);

    const [procentStudent, setprocentStudent] = React.useState(0);

    const [passLecture, setpassLecture] = React.useState(0);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
  
  
    function initNam(event:any): void {
        setpassLecture(event.target.value)
      }
    
      async function  handleAgree(event:any) {
        try {
            const mustBeStudent = passLecture*param.amountStudent;

            const countAttende= (await getAmountStudentAttend(param.id)).count.attendanceCount
          console.log(countAttende);
          
            const procentOfStudent=(countAttende*100)/mustBeStudent;
            setprocentStudent(procentOfStudent)
        } catch (error) {
          alert(error)      
        }
      }
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
      Calculate
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
            Put the count of pass lactures

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
          Porcent: {procentStudent} %

        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Calculate
          </Button>

        </DialogActions>

      </Dialog>
    </div>
  )
}
