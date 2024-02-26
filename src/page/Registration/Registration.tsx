import React, { BaseSyntheticEvent, useState } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Box, Button, CssBaseline, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import AlertDialog from '../../compontents/common/AlertDialog';
import { registrationAccount } from '../../api';
const defaultTheme = createTheme();

function Registration() {
  const navigate = useNavigate();
  const [role, setRole]= useState("Admin");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [teacherSecretKey, setTeacherKey]= useState("");
  const [studentNumber, setstudentNum]= useState("");
  const [firstName, setName]= useState("");
  const [lastName, setLastName]= useState("");

function initEmail(event:BaseSyntheticEvent) {
  setEmail(event.target.value)
}

function initName(event:BaseSyntheticEvent) {
  setName(event.target.value)
}


function initLastName(event:BaseSyntheticEvent) {
  setLastName(event.target.value)
}

function initPassword(event:BaseSyntheticEvent) {
  setPassword(event.target.value)
}

function initTeacherKey(event:BaseSyntheticEvent) {
  setTeacherKey(event.target.value)
}

function initStudentnUm(event:BaseSyntheticEvent) {
  setstudentNum(event.target.value)
}


async function  registerUser(e:any) {
  e.preventDefault();
    await registrationAccount({
role,
email,
password,
firstName,
lastName,
studentNumber,
teacherSecretKey
    }, role);
    navigate('/login')

}

  function handleChange(event: any, child:any): void {
      setRole(event.target.value);
      
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <AlertDialog/> */}
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=996&t=st=1698945834~exp=1698946434~hmac=e2b7058223cea472e7b99d5404f987df7a3c98a2e1210848f2d24eef3f957568)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={initEmail}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
              onChange={initPassword
              }
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

<TextField
              onChange={initName
              }
                margin="normal"
                required
                fullWidth
                name="name"
                label="Name"
                type="name"
                id="name"
                autoComplete="current-name"
              />

<TextField
              onChange={initLastName
              }
                margin="normal"
                required
                fullWidth
                name="Lastname"
                label="Last Name"
                type="Lastname"
                id="Lastname"
                autoComplete="Lastcurrent-name"
              />
              <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Role</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={"Admin"}>Admin</MenuItem>
    <MenuItem value={"Teacher"}>Teacher</MenuItem>
    <MenuItem value={"Student"}>Student</MenuItem>
  </Select>
</FormControl>
{role === "Teacher" ? (
         <TextField
         margin="normal"
         
         required
         fullWidth
         id="teacherkey"
         onChange={initTeacherKey}
         label="Teacher sec key"
         name="teacherseckey"
         autoComplete="email"
         autoFocus
       />
       
) : role === "Student" ? (
<TextField
         margin="normal"
         required
         fullWidth
         id="studuen numb"
         onChange={initStudentnUm}
         label="Student num"
         name="email"
         autoComplete="email"
         autoFocus
       />) : (
  <></>
)}
           
              <Button
              onClick={registerUser}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link to={'/login'} >
                    {"Have alread acount? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Registration