import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUserRole } from '../../../api';
import { log } from 'console';

export default function MenuAppBar(prop:any) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [state, setState] = React.useState(false);
  const [role, setRole] = React.useState();
  React.useEffect(()=>{
    setUserRole();
  },[])
  const navigate= useNavigate();

  async function setUserRole() {
    try {
      
  
    const role1= await getUserRole();
    setRole(role1.role);

  } catch (error) {
      navigate('/login')
  }
  }
  const toggleDrawer =
    ( open: boolean) =>

    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
        
      setState(open );
    };
    const list = () => (
      <Box
        sx={{ width:  250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer( false)}
      >
        <List>
 
        <ListItem key='Home' disablePadding>
      <ListItemButton onClick={()=>navigate("/home")}>
        <ListItemIcon>
        <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItemButton>
    </ListItem>
{role=='TEACHER'&&
<>
      <ListItem key='Generate Quize form' disablePadding>
      <ListItemButton onClick={()=>navigate("/quize-forum")}>
        <ListItemIcon>
        <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary='Generate Quize form' />
      </ListItemButton>
    </ListItem>

    
      <ListItem key='show-review-student' disablePadding>
      <ListItemButton onClick={()=>navigate("/show-review-student")}>
        <ListItemIcon>
        <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary='Show review students' />
      </ListItemButton>
    </ListItem>
    

    </>}


    {role=='STUDENT'&&
      <ListItem key='Pass the Quize form' disablePadding>
      <ListItemButton onClick={()=>navigate("/test-form")}>
        <ListItemIcon>
        <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary='Pass a Quize form' />
      </ListItemButton>
    </ListItem>}
{/* 
    {role=='ADMIN'&&
      <ListItem key='Home' disablePadding>
      <ListItemButton onClick={()=>navigate("/home")}>
        <ListItemIcon>
        <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItemButton>
    </ListItem>} */}

        </List>
        <Divider />
   
      </Box>
    );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {

    navigate("/")
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
  
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon/>
          </IconButton >
          <Drawer
            open={state}
            onClose={toggleDrawer( false)}
          >
            {list()}
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {prop.name}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>To Registration</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}