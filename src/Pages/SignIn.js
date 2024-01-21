import "../CSS/SignIn.css";
import Home from "./Home";
import logo1 from "../Images/Wheels4u.png"
import groupphoto from "../Images/carrent.png"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate()

  const [emailerror, setEmailerror] = useState(null)
  const [passworderror, setPasssworderror] = useState(null)
  const [totalerror, setTotalerror] = useState(null)
  const [results, setResults] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const handleSignIn=async(emailLogged)=>{
    setEmailerror(null);
    setPasssworderror(null);
    setTotalerror(null);
    
    if (email===null || email ===''){
      setEmailerror("Enter the email !!!")
    }
    if(password===null || password===''){
      setPasssworderror("Enter the password !!!")
    }
   if(email!==null && email !='' && password!==null && password!='')
    {
      try {
        const URL1='http://localhost:8080/wheels4u/customers/'
        const URL=URL1+email
        const response = await axios.get(URL);
        setResults(response.data);
        if(response.data===password){
          Navigate('/wheels4u/home',{state:{emailLogged:email}})
        }
        else {setTotalerror("Invalid Login !!! Retry again !!!")}
      } catch (error) {
        console.error('Error searching:', error);
    }
    }  
      
    

  }

  
    return ( 
        <div className="login">
            <div class="logincol left" >
                <img id="logo" src={logo1} alt="company-logo"></img>
                <img id="photo1" src={groupphoto} alt="happy-customer"></img>
  </div>
  <div class="logincol right1" >
    
    <h1 id="sign-up" align ="center"> SIGN IN</h1>
    <Box
      component="form" 
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      align="center"
    >
      
      <TextField id="login_-email" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} color="warning"/><br/>
      <label className="warning" align="left">{emailerror}</label><br/>
      <TextField id="login-passwordt" label="Enter Password" type="password" autoComplete="current-password" variant="standard" onChange={(e) => setPassword(e.target.value)} color="warning" /><br/>
      <label className="warning" align="left">{passworderror}</label><br/><br/><br/>
      <Button variant="contained" size="medium" color="inherit" onClick={handleSignIn}>Sign In</Button><br/>
      <label className="warning" align="left">{totalerror}</label><br></br><br></br>
      <br />
      

    </Box>
    <p align ="center">Alredy Sign In? <a id="SignUp"href="http://localhost:3000/wheels4u/sign-up" >Sign Up</a>
</p>
  </div>
        </div>
     );
}
 
export default Login;