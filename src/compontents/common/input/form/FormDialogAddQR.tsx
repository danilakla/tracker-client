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

export default function FormDialogAddQR() {
  const [open, setOpen] =useState(false);
  const [mediaFiles, setMediaFiles]: any = useState([]);

  const [addmediaFiles, setaddMediaFiles]: any = useState([]);
  const [img2, setImg]: any = useState();
  const [qriD, setQrid]: any = useState();
  const [name, setName]: any = useState();
  const [desciption, setDesciption]: any = useState();
  async function createQR(e: any) {
    e.preventDefault();

    const arr: any[] = [];
    arr.push(mediaFiles);
    arr.push(mediaFiles);
    const formData = new FormData();
    formData.append('description', desciption);
    formData.append('name', name);
    mediaFiles.forEach((e: any) => {
        formData.append('contents', e);

    })
    let data
    try {
     
 data = await createQRCode(formData)
 
    } catch (error) {
    }

    setImg("data:image/jpeg;base64," + data)
    window.location.reload();


}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setImg("data:image/jpeg;base64," + "")
    setMediaFiles([]);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create QR-CODE 
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

        <label>Name</label>
        <div></div>

        <input type='text' onChange={e => setName(e.target.value)}/>
        <div></div>
        <label>Choice file for qrcode</label>
        <div></div>

        <input
                        type="file"
                        multiple
                        accept="image/*,video/*,audio/*"  // Accepts images, videos, and audios
                        onChange={(e: any) => setMediaFiles([...mediaFiles, e.target.files[0]])
                        }
                    />
                                <img src={img2} width={100} height={100} alt="Image" />

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
