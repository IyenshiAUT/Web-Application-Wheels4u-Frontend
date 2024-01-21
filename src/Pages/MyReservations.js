import { SixtyFpsTwoTone } from '@mui/icons-material';
import HeaderwithoutLinks from '../Components/HeaderWithoutLinks';
import Button from '@mui/material/Button';
import Footer from '../Components/FooterwithoutMoving';
import { createFactory } from 'react';
import '../CSS/MyReservations.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios'
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { useState,useEffect } from 'react';
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const MyReservations = () => {
    const Navigate=useNavigate()
    const Locate=useLocation()
    const LOGGED_EMAIL=Locate.state.emailLogged;

    const [open, setOpen] = React.useState(false);

    const [clickedOK,setClickedOK]=useState(false);
    
    const date=new Date();var today;
    if(((date.getMonth()+1).length<2) && (date.getDate().length<2)){
        today=`${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDate()}`;
    }
    else if((date.getMonth()+1)<10){
        today=`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`;
    }
    else if(date.getDate()<10){
        today=`${date.getFullYear()}-${date.getMonth()+1}-0${date.getDate()}`;
    }
    else{
        today=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    }

    const [pastReservations,setPastReservations]=useState([]);
    const [upcomingReservations,setUpcomingReservations]=useState([]);
    const [userId, setUserId]=React.useState(null);


    const URL1='http://localhost:8080/wheels4u/customer/'
    const URL_USER_ID=URL1+LOGGED_EMAIL

    fetch(URL_USER_ID)
        .then(response => {
        return response.json()
    })
        .then(data => {
        setUserId(data)
    })

    const URL_PAST_RESERVATIONS=`http://localhost:8080/wheels4u/reservations/completed/${userId}/${today}`;
    
   const URL_UPCOMING_RESERVATIONS=`http://localhost:8080/wheels4u/reservations/upcoming/${userId}/${today}`;
  
    axios.get(URL_PAST_RESERVATIONS)
   .then((response)=>{setPastReservations (response.data);
    console.log(response.data);})
    .then((data) => {
        if (data.length === 0) {
          throw new Error('Data is empty');
        }
        // Process the data here
      })
    .catch((error)=>{console.log(error)});
   
    
    
    axios.get(URL_UPCOMING_RESERVATIONS)
   .then((response)=>{setUpcomingReservations(response.data);
    console.log(response.data)})
    .then((data) => {
        if (data.length === 0) {
          throw new Error('Data is empty');
        }
        // Process the data here
      })
    .catch((error)=>{console.log(error)})

    const backToHOme=()=>{
        Navigate('/wheels4u/home',{state:{emailLogged:LOGGED_EMAIL}});
    }

    
    let x;
    function DeleteReservation(defaultValue){
            setOpen(true);
            
               
                
                
                
                
           
    }

    function deleteRes(defaultValue){
        axios.delete(`http://localhost:8080/wheels4u/reservations/${defaultValue}`);
        setUpcomingReservations(upcomingReservations.filter((reservation)=>{return reservation.id!=defaultValue;}));
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
      };

    return ( 
        <div id="MyReservations">
            <HeaderwithoutLinks/>
            <div class='scroll'>
                <a id="MyReservationsBack" href='http://localhost:3000/wheels4u/home' onClick={backToHOme} align="left" padding="75 0 0 0">&lt; Return Home</a>
                <h1 id="my-reservations"><center>My Reservations</center></h1>
                <div class='col1-reserv'>
                <h2 class="sub">Upcoming...</h2>
                {upcomingReservations===null ? (
        <li>No data available.</li>
      ) : (
                        upcomingReservations.map(uReservation=>(
                        <div class='res'>
                        <div class='col-reserv'><br/><br/>
                            <label>Reservation No   :</label><br/>
                            <label>Vehicle No       :</label><br/>
                            <label>Pick Up Date     :</label><br/>
                            <label>Pick Up Time     :</label><br/>
                            <label>Pick Up Location :</label><br/>
                            <label>No of Dates      :</label><br/>
                            <label>Need a Driver    :</label><br></br>
                            <label>Total Payment    :</label><br/>
                            
                        </div>
                        <div class='col-reserv'>
                        <Button onClick={() => {const reserveId=uReservation.id;DeleteReservation(reserveId);}} defaultValue={uReservation.id}><Tooltip title="Cancel Reservation" id='dom' ><DeleteForeverSharpIcon id='icon' fontSize='large' color='warning'/></Tooltip></Button><br/>
                            <label>{uReservation.id}</label><br/>
                            <label>{uReservation.vehicle}</label><br/>
                            <label>{uReservation.pick_up_date}</label><br/>
                            <label>{uReservation.pick_up_time} hrs</label><br/>
                            <label>{uReservation.pick_up_location}</label><br/>
                            <label>{uReservation.drop_off_date}</label><br/>
                            <label>{uReservation.need_driver}</label><br/>
                            <label>Rs.{uReservation.payment}</label><br/>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                >
                                <DialogTitle id="alert-dialog-title">
                                {"Cancel the Selected Reservation"}
                                </DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    You are going to cancel the selected reservation so that the relevant reservation does not exists longer.<br/>
                                    Do you want to proceed?
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={() => {const reserveId=uReservation.id;deleteRes(reserveId);}} autoFocus>
                                    Yes
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </div><br/></div>
                        )))}
                </div>
                <div class='col1-reserv'>
                <h2 class="sub">Compeleted...</h2>
                {pastReservations===null ? (
        <li>No data available.</li>
      ) : (
               pastReservations.map(pReservation=>(
                    <div class='res'>
                <div class='col-reserv'><br/><br/>
                    <label>Reservation No   :</label><br/>
                    <label>Vehicle No       :</label><br/>
                    <label>Pick Up Date     :</label><br/>
                    <label>Pick Up Time     :</label><br/>
                    <label>Pick Up Location :</label><br/>
                    <label>Drop Off Date    :</label><br/>
                    <label>Need a Driver    :</label><br/>
                    <label>Total Payment    :</label><br/>
                    
                </div>
                <div class='col-reserv'><br/><br/>
                    <label>{pReservation.id}</label><br/>
                    <label>{pReservation.vehicle}</label><br/>
                    <label>{pReservation.pick_up_date}</label><br/>
                    <label>{pReservation.pick_up_time} hrs</label><br/>
                    <label>{pReservation.pick_up_location}</label><br/>
                    <label>{pReservation.drop_off_date}</label><br/>
                    <label>{pReservation.need_driver}</label><br/>
                    <label>Rs. {pReservation.payment}</label><br/>
                    
                </div><br/></div>
               )))}
                </div><br/>
                
                <Footer height='130px'/>
            </div>
            
        </div>
        
     );
}
 
export default MyReservations;