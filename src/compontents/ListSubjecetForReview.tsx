import React, { useEffect, useState } from 'react'
import { getAllSubject, getAllSubjectForReview, getStudentForReview, getUserRole, setUpAcceptStudent } from '../api'
import { CreateCodeQrForSUbject } from './dialog/CreateCodeQrForSUbject';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const  ListSubjectForReview=()=> {
    const [subjs, setSubjects]= useState([]);
    const [students, setStudents]= useState([]);
    const [subjIdCurent, setsubjIdCurent]= useState();
    const [role, setRole] = React.useState();

useEffect(()=>{
    initSubject();
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
async function acceptuinStudent(params:any) {
    
    const data = await setUpAcceptStudent({
        subjectId:params.subjectId,
        studentId:params.studentId,
        isAccept:params.isAccept
    });

    
}
async function cancelStudent(subjectId:any, studentId:any) {

    
    await acceptuinStudent({subjectId, studentId, isAccept:false})
    window. location. reload(); 

}
async function agreeStudent(subjectId:any, studentId:any) {
    await acceptuinStudent({subjectId, studentId, isAccept:true})
    window. location. reload(); 


}
async function initSubject() {
    try {
          const data = await getAllSubjectForReview();
    
    setSubjects(data)  
    } catch (error) {
        alert("not valid token")
    }


    
}

async function getStudentMiss(id:any) {
    const data = await getStudentForReview(id);
    setStudents(data)
    setsubjIdCurent(id);
}
if(!subjs){
}
else if(subjs.length==0){
  return(<><h1 style={{textAlign:"center"}}>Thre're no student for review </h1></>)

}
return (
    <>
    {subjs.map((subjdata:any)=>{
    
        
        return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>

        
        <Card sx={{ maxWidth: 275, border:1, borderColor:"gray", margin:2}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        number of student: {subjdata.numberOfStudent}
        </Typography>
        <Typography variant="h5" component="div">
       <span style={{fontSize:14}}> Name of subject:</span> {subjdata.subject_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        course: {subjdata.course}
        </Typography>
        <Typography variant="body2">
        term : {subjdata.term}
            <br/>
          time: {subjdata.createdAt}

        </Typography>
      </CardContent>
   
    </Card>

        <div style={{display:"flex", flexDirection:'row', flexWrap:'wrap'}}>
    {subjIdCurent==subjdata.id?
     students.map((e:any)=>{
        if(subjIdCurent != e.subjectId){
            return (<>
            </>)
        }
    return (
    <div>

   <Card sx={{ maxWidth: 275, border:1, borderColor:"gray", margin:2}}>
      <CardContent>
    
   
        <Typography variant="body2">
        First name : {e.student.firstName}
        <br/>
        Last name: {e.student.lastName}
  
        </Typography>
      </CardContent>
   
    </Card>
<Button variant="outlined" style={{margin:10}} onClick={()=>{cancelStudent( e.subjectId, e.student.id)}}>
    cansel
    </Button>
    <Button variant="outlined" onClick={()=>{agreeStudent(e.subjectId, e.student.id)}}>
    agree
    </Button>
    </div>
    )
})
    :<></>}
    </div>
       
    <Button variant="outlined" onClick={()=>{getStudentMiss(subjdata.id)}}>
      show the student how miss the subject
        </Button>

        </div>
        )
    })}
    
    </>
  )
}
