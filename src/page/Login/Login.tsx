import React, { BaseSyntheticEvent, useState } from 'react'
import Header from '../../compontents/header/Header'
import Title from '../../compontents/title/Title'
import Form from '../../compontents/form/Form'
import Input from '../../compontents/common/input/Input'
import { Box, Button, CssBaseline, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import AlertDialog from '../../compontents/common/AlertDialog'
import { observer } from 'mobx-react-lite'
import { authAccount } from '../../api'
const defaultTheme = createTheme();

function Login() {
    const navigate = useNavigate();

  const [role, setRole]= useState("Admin");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");


function initEmail(event:BaseSyntheticEvent) {
  setEmail(event.target.value)
}

function initRole(event:any) {

  setRole(event.target.value)
}


function initPassword(event:BaseSyntheticEvent) {
  setPassword(event.target.value)
}



async function  authUser(e:any) {
  e.preventDefault()
  console.log(email, password, role);
  
  const res =await authAccount({email, password, role},role) 
  console.log(res);
  
  // localStorage.setItem('access_token', res.data.acc);


navigate("/home");
 
}
  return (
<ThemeProvider theme={defaultTheme}>
  {/* <AlertDialog /> */}
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={authUser} sx={{ mt: 1 }}>
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
              onChange={initPassword}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
           
           <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Role</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    onChange={initRole}
  >
    <MenuItem value={"Admin"}>Admin</MenuItem>
    <MenuItem value={"Teacher"}>Teacher</MenuItem>
    <MenuItem value={"Student"}>Student</MenuItem>
  </Select>
</FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link to={'/'} >
                    {"Don't have an account? Sign Up"}
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

export default observer (Login)