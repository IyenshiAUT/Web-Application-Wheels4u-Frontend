import logo from "../Images/Wheels4u.png";
import AccountCircleIcon1 from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import  "../CSS/Header.css"
import '../Pages/Home.js'
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useNavigate,} from "react-router-dom";

const Header=(props)=>{

    const Navigate=useNavigate()
    const { useState } = React;
    const emailId=props.id;
    
    const moveToHome=()=>{
        Navigate('/wheels4u/home',{state:{emailLogged:emailId}});
    }

    const moveToAbout=()=>{
        Navigate('/wheels4u/about-us',{state:{emailLogged:emailId}})
    }

    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const openMyReservations=()=>{
    Navigate('/wheels4u/my-reservations',{state:{emailLogged:emailId}});
  }

  const openMyProfile=()=>{
    Navigate('/wheels4u/my-profile',{state:{emailLogged:emailId}});
  }

  const handleLogout=()=>{
    Navigate('/wheels4u/sign-in');
    
  }

    
    return ( 
        <div className="header" >
            <div className="column" align="left">
                <img src={logo} height='70' alt='Hello'></img>
            </div>
            <div className="column1" align="right" >
            <ul align="right">
                <b>
            <li><a href='http://localhost:3000/wheels4u/home'align='right' onClick={moveToHome}>Home</a></li>
            <li><a  href='http://localhost:3000/wheels4u/about-us'align='right'onClick={moveToAbout}>About Us</a></li>
            
            </b>
            </ul>   
            </div>
            <div className="column11" align="right">
            <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
            
            <AccountCircleIcon1 color='warning'fontSize="large" /></Button>
            <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    width='100px'
                  >
                    <MenuItem onClick={openMyProfile}>My Profile</MenuItem><br/>
                    <MenuItem onClick={openMyReservations}>My Reservations</MenuItem><br/>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
            </div>
            
        </div>
        
     );
}
 
export default Header;