import React, { useEffect, useState } from 'react'
import { getAllSubject, getAllSubjectForReview, getStudentForReview, setUpAcceptStudent } from '../api'
import { CreateCodeQrForSUbject } from './dialog/CreateCodeQrForSUbject';
import { Button } from '@mui/material';

export const  ListSubjectForReview=()=> {
    const [subjs, setSubjects]= useState([]);
    const [students, setStudents]= useState([]);
useEffect(()=>{
    initSubject();
},[])

async function acceptuinStudent(params:any) {
    
    const data = await setUpAcceptStudent({
        subjectId:params.subjectId,
        studentId:params.studentId,
        isAccept:params.isAccept
    });

    console.log(data);
    
}
async function cancelStudent(subjectId:any, studentId:any) {

    
    await acceptuinStudent({subjectId, studentId, isAccept:false})
}
async function agreeStudent(subjectId:any, studentId:any) {
    await acceptuinStudent({subjectId, studentId, isAccept:true})

}
async function initSubject() {
    const data = await getAllSubjectForReview();
    setSubjects(data)

    
}

async function getStudentMiss(id:any) {
    const data = await getStudentForReview(id);
    setStudents(data)
}

return (
    <>
    {subjs.map((e:any)=>{
    
        
        return (
        <div>
      sub name:  {e.subject_name}
       time: {e.createdAt}
        number of student: {e.numberOfStudent}
       course: {e.course}
        term : {e.term}
        
<Button variant="outlined" onClick={()=>{getStudentMiss(e.subject.id)}}>
      show the student how miss the subject
        </Button>
        {/* subjectId: number;
    student: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string;
        lastName: string;
        studentNumber: string;
    }; */}
        {students.map((e:any)=>{
        return (
        <div>
      email:  {e.student.email}
       time: {e.student.createdAt}
       studentNumber: {e.student.studentNumber}
        firstName: {e.student.firstName}
       lastName : {e.student.lastName}
        
<Button variant="outlined" onClick={()=>{cancelStudent( e.subjectId, e.student.id)}}>
        cansel
        </Button>
        <Button variant="outlined" onClick={()=>{agreeStudent(e.subjectId, e.student.id)}}>
        agree
        </Button>
        </div>
        )
    })}
        </div>
        )
    })}
    
    </>
  )
}
