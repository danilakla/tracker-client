import React, { useEffect, useState } from 'react'
import api from '../../api/instance'
import axios from 'axios';
import { createUniver } from '../../api';
import MenuAppBar from '../../compontents/header/auth/MenuAppBar';

import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import CreateUniverDialog from '../../compontents/dialog/CreateUniverDialog';
import GenerateStudentKey from '../../compontents/dialog/GenerateStudentKey';

function AdminHome() {



  return (
    <>
    <MenuAppBar name={'Managment university'}/>
    <div style={{display:'flex', justifyContent:"center", marginTop:30}}>
<CreateUniverDialog/>
<GenerateStudentKey/>

</div>
<Typography style={{textAlign:"center", margin:60}}>
In today's fast-paced world, technology plays a vital role in transforming various sectors, including education. As schools and educational institutions strive to provide the best learning experience for students, the integration of innovative systems becomes crucial. One such groundbreaking system is TRKER (Tracking and Evaluation System for Students), which revolutionizes student tracking and monitoring. This comprehensive application combines advanced data analytics, real-time tracking, and personalized feedback to enhance student performance, streamline administrative tasks, and foster a collaborative learning environment. In this text, we will explore the key features and benefits of TRKER and its potential to transform education.

Real-time Performance Tracking:
TRKER provides educators and administrators with real-time insights into student performance. By integrating with various learning management systems and educational platforms, TRKER collects data on student attendance, assignment completion, test scores, and engagement levels. This data is then analyzed to generate comprehensive reports, allowing educators to identify areas of improvement, provide targeted intervention, and personalize instruction based on individual student needs. Real-time tracking enables immediate feedback, ensuring timely intervention and support for struggling students.

Personalized Feedback and Recommendations:
TRKER leverages its data analytics capabilities to offer personalized feedback and recommendations to students. Through an intuitive dashboard, students can access their performance metrics, identify strengths and weaknesses, and receive tailored suggestions to enhance their learning experience. This personalized feedback empowers students to take ownership of their education, set goals, and track their progress over time. Additionally, TRKER provides educators with a holistic view of each student's learning journey, enabling them to offer tailored guidance and support.

Streamlined Administrative Tasks:
TRKER streamlines administrative tasks by automating various processes. It eliminates the need for manual data entry, reducing administrative burdens on teachers and staff. Attendance tracking, grade calculation, and report generation are automated, allowing educators to focus more on teaching and supporting students. TRKER's centralized database ensures data integrity and facilitates seamless communication between teachers, administrators, and parents, fostering a collaborative educational ecosystem.

Enhanced Communication and Collaboration:
TRKER serves as a communication hub, facilitating effective collaboration among students, teachers, parents, and administrators. It offers messaging features, allowing stakeholders to communicate and share updates in real-time. Parents can track their child's progress, receive notifications about assignments, grades, and important announcements. This improved communication and collaboration foster a supportive environment, where all stakeholders are actively involved in the educational journey.

Data-driven Decision-making:
</Typography>



    </>
  );
}
export default AdminHome


