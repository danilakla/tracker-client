import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { createUniver,  deleteUniverAdm, getUniverForAdmin, updateUniverByName } from '../../api';

export default function CreateUniverDialog() {
    const [open, setOpen] = React.useState(false);
    const [openUpdate, setOpenUpdate] = React.useState(false);
    const [univerdata,setUniverData] = React.useState<any>(null);
useEffect(()=>{
  init()

},[])

async function  init(){
  let data = await getUniverForAdmin();
setUniverData(data.university)

}
    const [nameUniver, setUniverName] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    const handleClickOpenUpdate = () => {
      setOpenUpdate(true);
    };
  
    const handleCloseUpdate = () => {
      setOpenUpdate(false);
    };
  
  
  
  
  
    function initNam(event:any): void {
        setUniverName(event.target.value)
      }
    
      async function  handleAgree(event:any) {
        try {
          const univer = await createUniver({univerName:nameUniver});

          alert("success")      
        setUniverData(univer);
        } catch (error) {
          alert('bad request')      
        }
      }

      async function  deleteUni(event:any) {
        try {
          await deleteUniverAdm();
          alert("success")      
          setUniverData(null);

        } catch (error) {
          alert('bad request')      
        }
      }
      async function  updateUnivc(event:any) {
        try {
          await updateUniverByName({updatedUniverName:nameUniver});
          alert("success")  
          window.location.reload();    

        } catch (error) {
          alert('bad request')      
        }
      }
  return (
    <div>
{univerdata?<>

  <div> <Button variant="outlined" onClick={deleteUni}>
      Delete university
        </Button>   </div>  
        <div>  <Button variant="outlined" onClick={handleClickOpenUpdate}>
      Update university
        </Button>  </div> 
        <div>
<h1> Univer name: {univerdata?.name}</h1>
</div>  
        </>:
        <div><Button variant="outlined" onClick={handleClickOpen}>
      Create university
        </Button></div>}      

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
            Put the name of university to placeholder

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

      <Dialog
        open={openUpdate}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Put the new name of university to placeholder

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
          <Button onClick={handleCloseUpdate}>Disagree</Button>
          <Button onClick={updateUnivc} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
