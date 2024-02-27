import React, { useEffect, useState } from 'react'
import { createUniver, getUserRole } from '../../api';

import AdminHome from './AdminHome';
import StudentHome from './StudentHome';
import TeacherHome from './TeacherHome';

function Home() {
  const [role, setRole] = React.useState();
  React.useEffect(()=>{
    setUserRole();
  },[])

  async function setUserRole() {
    const role1= await getUserRole();
        
    setRole(role1.role);
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


