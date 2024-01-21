import "../CSS/SignUp.css";
import { useNavigate } from 'react-router-dom';
import logo1 from "../Images/Wheels4u.png"
import groupphoto from "../Images/carrent.png"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import axios from "axios";

const SIGN_UP = () => {
  
  const Navigate = useNavigate()

  const [enteredFName, setEnteredFname] = useState(null)
  const [enteredLName, setEnteredLname] = useState(null)
  const [enteredAddress, setEnteredAddress] = useState(null)
  const [enterednumber, setEnteredNumber] = useState(null)
  const [enteredEmail, setEnteredEmail] = useState(null)
  const [enteredPassword, setEnteredPassword] = useState(null)
  const [enteredRePassword, setEnteredRePassword] = useState(null)

  const [fnameError, setFnameError] = useState(null)
  const [lnameError, setLnameError] = useState(null)
  const [addressError, setAddressError] = useState(null)
  const [numberError, setNumberError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [rePasswordError, setRePasswordError] = useState(null)

  
  const handleSignUp =(e)=>{
    setFnameError(null)
    setLnameError(null)
    setAddressError(null)
    setNumberError(null)
    setEmailError(null)
    setPasswordError(null)
    setRePasswordError(null)

    if(enteredFName===null || enteredFName===''){
      setFnameError("This field is required !")
    }
    if(enteredLName===null || enteredLName===''){
      setLnameError("This field is required !")
    }
    if(enteredAddress==null || enteredAddress===''){
      setAddressError("This field is required !")
    }
    if(enterednumber===null||enterednumber===''){
      setNumberError("This field is required !")
    }
    if(enteredEmail===null||enteredEmail===''){
      setEmailError("This field is required !")
    }
    if(enteredPassword===null||enteredLName===''){
      setPasswordError("This field is required !")
    }
    if(enteredRePassword==null||enteredRePassword===''){
      setRePasswordError("This field is required !")
    }
    if(enteredFName!==null||enteredLName!==null||enteredAddress!==null||enterednumber!==null||enteredEmail!==null||enteredPassword!==null||enteredRePassword!==null){
      if(enteredPassword!==enteredRePassword){
        setRePasswordError("The passwords you entered are not matching !")
      }
      else{
        let newUser={first_name:enteredFName, last_name:enteredLName, address:enteredAddress, contact_no:enterednumber, email:enteredEmail, password:enteredPassword}
        e.preventDefault();
        try {
          const response = axios.post('http://localhost:8080/wheels4u/customers', newUser);
          alert("SignUp was Successful !!!");
          Navigate('/wheels4u/sign-in')
        } catch (error) {
          console.error('Error searching:', error);
      }
      }
    }


  }

  return ( 
        <div className="login">
            <div class="logincol left" >
                <img id="logo" src={logo1} alt="hello"></img>
                <img id="photo1" src={groupphoto} alt="happy"></img>
  </div>
  <div class="signupcol right" >
    <h1 id="sign-up" align ="center"> SIGN UP</h1>
    <Box
      component="form" 
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      align="center"
      fontSize="small">
      <TextField id="standard-basic" label="First Name" variant="standard" onChange={(e) => setEnteredFname(e.target.value)} color="warning"/><br/>
      <label className="warning" align="left">{fnameError}</label><br/>
      <TextField id="standard-basic" label="Last Name" variant="standard" onChange={(e) => setEnteredLname(e.target.value)} color="warning"/><br/>
      <label className="warning" align="left">{lnameError}</label><br/>
      <TextField id="standard-basic" label="Address" variant="standard" onChange={(e) => setEnteredAddress(e.target.value)} color="warning"/><br/>
      <label className="warning" align="left">{addressError}</label><br/>
      <TextField id="standard-basic" label="Contact Number" variant="standard" onChange={(e) => setEnteredNumber(e.target.value)} color="warning"/><br/>
      <label className="warning" align="left">{numberError}</label><br/>
      <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEnteredEmail(e.target.value)} color="warning"/><br/>
      <label className="warning" align="left">{emailError}</label><br/>
      <TextField id="standard-password-input" label="Enter Password" type="password" autoComplete="current-password" variant="standard" onChange={(e) => setEnteredPassword(e.target.value)} color="warning"/><br/>
      <label className="warning" align="left">{passwordError}</label><br/>
      <TextField id="standard-password-input" label="Re-enter Password" type="password" autoComplete="current-password" variant="standard" onChange={(e) => setEnteredRePassword(e.target.value)} color="warning"/><br/>
      <label className="warning" align="left">{rePasswordError}</label><br/><br/><br/><br/>
      <Button variant="contained" size="medium" color="inherit" onClick={handleSignUp}>Sign Up</Button>
      <br /><br/><br/>
    </Box>
    <p align ="center"> Alredy Sign Up? <a id="SignUp"href="http://localhost:3000/wheels4u/sign-in" >Sign In</a>
</p>
  </div>
        </div>
     );
}
 
export default SIGN_UP;