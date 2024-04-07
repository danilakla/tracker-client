import React, { useEffect, useState } from 'react'
import { createUniver, getUserRole } from '../../api';

import AdminHome from './AdminHome';
import StudentHome from './StudentHome';
import { TeacherHome } from './TeacherHome';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [role, setRole] = React.useState();
  React.useEffect(()=>{
    setUserRole();
  },[])
const navigate = useNavigate()
  async function setUserRole() {
    try {
        const role1= await getUserRole();
        
    setRole(role1.role);
    } catch (error) {
      
      navigate('/login')
    }
  
  }


  if(role=="ADMIN"){
    return (
      <>
  <AdminHome/>
      </>
    );
  }
  else if (role=="TEACHER"){
    return (
      <>
      <TeacherHome></TeacherHome>
      </>
    )
  }
  else if (role=="STUDENT"){
    return (
      <>
      <StudentHome></StudentHome>
      </>
    )
  }
  return <></>


}
export default Home


