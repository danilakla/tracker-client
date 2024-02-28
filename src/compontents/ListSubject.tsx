import React, { useEffect, useState } from 'react'
import { getAllSubject } from '../api'
import { CreateCodeQrForSUbject } from './dialog/CreateCodeQrForSUbject';

export default function ListSubject() {
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
        <div>
      sub name:  {e.subject_name}
       time: {e.createdAt}
        number of student: {e.numberOfStudent}
       course: {e.course}
        term : {e.term}
        <CreateCodeQrForSUbject id={e.id}/>
        </div>
        )
    })}
    </>
  )
}
