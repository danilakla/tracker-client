import React, { useEffect, useState } from 'react'
import MenuAppBar from '../../compontents/header/auth/MenuAppBar'
import { useLocation, useNavigate } from 'react-router-dom';
import { getStudentBySubjectIdAttendence, getUserRole } from '../../api';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import { CreateCodeQrForSUbject } from '../../compontents/dialog/CreateCodeQrForSUbject';

export default function StudentAttendence() {
  const location = useLocation();
const [students, setStudents] = useState([]);
  useEffect((
  )=>{
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get('id');
    loadStudentBySubject(paramValue)
    setUserRole();

  },[])

  const navigate = useNavigate()
  async function setUserRole() {
    try {
        const role1= await getUserRole();
        if(role1.role!="TEACHER") navigate("login")
    } catch (error) {
      
      navigate('/login')
    }
  
  }
  async function loadStudentBySubject(id:any){
    const students =  await getStudentBySubjectIdAttendence(id);
      setStudents(students)
  }
  return (
    <>
                   <MenuAppBar name="List student of subject"></MenuAppBar> 

                  {students.length==0?<h1 style={{textAlign:"center"}}>Students don't attended so far </h1>: <div style={{display:"flex", justifyContent:"center",flexWrap:'wrap'}}>
                  {students.map(((e:any)=>{
                        return (
                          <>
                                  <Card sx={{ maxWidth: 275, border:1, borderColor:"gray", margin:2}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        email : {e.student.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        name: {e.student.firstName}
        </Typography>
        <Typography variant="body2">
        last name : {e.student.lastName}
            <br/>
            student Number: {e.student.studentNumber}
            <br/>
            attendance Count: {e.attendanceCount}
        </Typography>
      </CardContent>

    </Card>
                          </>
                        )

                  }))}
                   </div>}
</>
  )
}
