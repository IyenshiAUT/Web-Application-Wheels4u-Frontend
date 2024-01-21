import Header from '../Components/HeaderWithoutLinks'
import Footer from '../Components/FooterwithoutMoving'
import TextField from '@mui/material/TextField';
import '../CSS/MyProfile.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'


const MyProfile = () => {
    const Navigate=useNavigate()
    const Locate=useLocation()
    const [firstName,setFirstName]=useState('x')
    const [lastName,setLasttName]=useState(null)
    const [address,setAddress]=useState(null)
    const [contactNo,setContactNo]=useState(null)
    const [passWord,setPassWord]=useState(null)
    const [id,setId]=useState(null)
    const [error,setError]=useState(null)
    

    const LOGGED_EMAIL=Locate.state.emailLogged;
    const URL_CHANGES=`http://localhost:8080/wheels4u/customers/find/${LOGGED_EMAIL}`;
   useEffect(()=>{
    axios.get(URL_CHANGES)
   .then((response)=>{setId(response.data.id);
                    setFirstName(response.data.first_name);
                    setLasttName(response.data.last_name);
                    setAddress(response.data.address);
                    setContactNo(response.data.contact_no);
                    setPassWord(response.data.password);
                    
    console.log(response.data)})
    .catch((error)=>{console.log(error)});},[]);
   

    
    
    const backToHome=()=>{
        Navigate('/wheels4u/home',{state:{emailLogged:LOGGED_EMAIL}});
    }

    const saveChanges=()=>{
        setError(null);
        if((firstName!==null)&&(firstName!=='')&&(lastName!==null)&&(lastName!=='')&&(address!==null)&&
        (address!=='')&&(contactNo!==null)&&(contactNo!=='')&&(passWord!==null)&&(passWord!=='')) {
            axios.put(`http://localhost:8080/wheels4u/customers`, {
            id:id,
            first_name:firstName,
            last_name:lastName,
            address:address,
            contactNo:contactNo,
            email:LOGGED_EMAIL,
            password:passWord
            })
            .then((response) => {
                console.log(response.data);
                alert('Changes were saved')
            })
            .catch((error) => {
                console.error(error);
                
            });
        }
        else{
            setError('Any field cannot be Null!!!')
        }
   
    }

    return (
        <div id='MyProfile'>
            <Header/>
            <a id="MyProfileBack" href='http://localhost:3000/wheels4u/home' onClick={backToHome} align="left" padding="75 0 0 0">&lt; Return Home</a>
            <h1 id="my-prof"><center>My Profile</center></h1>
            <div id="prof-details">
                <div id="info-Profile">
                    <label>Email</label><br/>
                    <label>First Name</label><br/>
                    <label>Last Name</label><br/>
                    <label>Address</label><br/>
                    <label>Contact Number</label><br/>
                    <label>Password</label><br/>
                </div>
                <div>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': {width: '50ch' },
                }}
                noValidate
                autoComplete="off"
                >
                 <br/>
                 <TextField
                    id="filled-read-only-input"
                    label="Read Only"
                    value={LOGGED_EMAIL}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                    size='small'
                    color='warning'
                    /><br/>
                    <TextField
                    required
                    id="filled-required"
                    value={firstName}
                    variant="filled"
                    size='small'
                    color='warning'
                    onChange={(e) => setFirstName(e.target.value)}
                    /><br/>
                    <TextField
                    required
                    id="filled-required"
                    value={lastName}
                    variant="filled"
                    size='small'
                    color='warning'
                    onChange={(e) => setLasttName(e.target.value)}
                    /><br/>
                    <TextField
                    required
                    id="filled-required"
                    value={address}
                    variant="filled"
                    size='small'
                    color='warning'
                    onChange={(e) => setAddress(e.target.value)}
                    /><br/>
                    <TextField
                    required
                    id="filled-required"
                    value={contactNo}
                    variant="filled"
                    size='small'
                    color='warning'
                    onChange={(e) => setContactNo(e.target.value)}
                    /><br/>
                    <TextField
                    required
                    id="filled-required"
                    value={passWord}
                    variant="filled"
                    size='small'
                    color='warning'
                    onChange={(e) => setPassWord(e.target.value)}
                    /><br/><label className="warning" align="left">{error}</label><br/><Button id='save-changes'variant="contained" size="medium" color="inherit" onClick={saveChanges}>Save Changes</Button><br/>  </Box>
               </div>
               
            </div>
            <Footer/>
        </div>
    );
}
 
export default MyProfile;