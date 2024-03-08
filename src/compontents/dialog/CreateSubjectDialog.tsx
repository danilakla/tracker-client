import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { createSubject, createUniver } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function CreateSubjectDialog() {
    const [open, setOpen] = React.useState(false);
    const navigate =useNavigate()


    const [subjectName, setsubjectName] = React.useState('');
    const [course, setcourse] = React.useState('');
    const [term, setterm] = React.useState('');
    const [numberOfStudent, setnumberOfStudent] = React.useState(0);
    const [numberPassLecture, setnumberPassLecture] = React.useState(0);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
  
  
    function initSubjName(event:any): void {
      setsubjectName(event.target.value)
      }
    
      
    function initCourse(event:any): void {
      setcourse(event.target.value)
    }
    
    function initTerm(event:any): void {
      setterm(event.target.value)
    }
    
    function initnumberOfStudent(event:any): void {
      setnumberOfStudent(+event.target.value)
    }
    
    function initNumberPassLecture(event:any): void {
      setnumberPassLecture(event.target.value)
    }


      
      async function  handleAgree(event:any) {
        try {
          const data = await createSubject({subjectName, course, term, numberOfStudent, numberPassLecture})
          console.log(data);
          
          window. location. reload(); 
        
        
        } catch (error) {
          alert(error)      
        }
      }
  return (
    <div>

<Button variant="outlined" onClick={handleClickOpen}>
      Create Subject
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
            Put the parameters for subject

            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={initSubjName}
                label="Subj name"
                name="email"
                autoComplete="email"
                autoFocus
              />

              
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={initCourse}
                label="Course "
                name="email"
                autoComplete="email"
                autoFocus
              />

              
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={initTerm}
                label="Term"
                name="email"
                autoComplete="email"
                autoFocus
              />

              
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={initnumberOfStudent}
                label="Number of student"
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
