import React, { useEffect, useState } from 'react'
import { getAllSubject } from '../api'
import { CreateCodeQrForSUbject } from './dialog/CreateCodeQrForSUbject';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CalculatePrecentOFAvgAttendForm } from './common/CalculatePrecentOFAvgAttendForm';

export default function ListSubject() {
    const navigate = useNavigate()
    const [subjs, setSubjects]= useState([]);
useEffect(()=>{
    initSubject();
},[])

async function initSubject() {
    const data = await getAllSubject();
    setSubjects(data)

    
}
return (
    <>
    {subjs.map((e:any)=>{
        function generateCodeForSubject(): void {
        }

        return (
 
        <Card sx={{ maxWidth: 340, border:1, borderColor:"gray", margin:2}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        number of student: {e.numberOfStudent}
        </Typography>
        <Typography variant="h5" component="div">
       <span style={{fontSize:14}}> Name of subject:</span> {e.subject_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        course: {e.course}
        </Typography>
        <Typography variant="body2">
        term : {e.term}
            <br/>
          time: {e.createdAt}

        </Typography>
      </CardContent>
      <CardActions>
        <div style={{display:'flex', justifyContent:'center'}}>
      <CreateCodeQrForSUbject amountStudent={e.numberOfStudent}  id={e.id}/>
      <CalculatePrecentOFAvgAttendForm id={e.id} amountStudent={e.numberOfStudent} />
<Button variant="outlined" onClick={()=>(navigate(`/StudentAttendence?id=${e.id}`))}>
        show
        </Button>
        </div>
      </CardActions>
    </Card>
     



        )
    })}
    </>
  )
}
