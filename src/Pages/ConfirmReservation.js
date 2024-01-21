import '../CSS/ConfirmReservation.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigateNavigate, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/HeaderWithoutLinks';
import Footer from '../Components/FooterwithoutMoving'
import { useState } from 'react';
import axios from "axios";

const Reservation = () => {
    const Location=useLocation()
    const Navigate=useNavigate()

    const LOGGED_EMAIL=Location.state.emailLogged;
    const VEHICLE=Location.state.vehicle_code;
    const PICKUP_DATE=Location.state.pickupDateSelected;
    const PICKUP_TIME=Location.state.pickupTimeSelected;
    const DROPOFF_DATE=Location.state.dropoffDateSelected;
    const LOCATION=Location.state.locationSelected;
    const NO_DAYS=Location.state.noDaysSelected;
    const NEED_A_DRIVER=Location.state.driverSelected;
    //const O_PICKUP_DATE=location.state.originalPickUpDate;
    //const O_PICKUP_TIME=location.state.originalPickUpTime;
    //const O_DROPOFF_DATE=location.state.originalDropOffDate;


    const URL='http://localhost:8080/wheels4u/vehicles/'
    const FINAL_URL=URL+VEHICLE;
    const URL1='http://localhost:8080/wheels4u/customer/'
    const URL_USER_ID=URL1+LOGGED_EMAIL

    const [rentalPrice,setRentalPrice]=useState(null)

    const [userId,setUserId]=useState(null)

    fetch(FINAL_URL)
        .then(response => {
        return response.json()
    })
        .then(data => {
        setRentalPrice(data)
    })

    

    fetch(FINAL_URL)
        .then(response => {
        return response.json()
    })
        .then(data => {
        setRentalPrice(data)
    })

    const totalPrice=rentalPrice*NO_DAYS;

    fetch(URL_USER_ID)
        .then(response => {
        return response.json()
    })
        .then(data => {
        setUserId(data)
    })

    const Cancel=()=>{
        Navigate('/wheels4u/home',{state:{emailLogged:LOGGED_EMAIL}});
    }

        const Confirm=async(e)=>{
            let reservation1={pick_up_date:PICKUP_DATE,pick_up_time:PICKUP_TIME,pick_up_location:LOCATION,drop_off_date:DROPOFF_DATE,
                need_driver:NEED_A_DRIVER,payment:totalPrice,vehicle:VEHICLE,customer:userId}
            e.preventDefault();
            try {
                 await axios.post('http://localhost:8080/wheels4u/reservations', reservation1);
                alert("Your resrvation was Successful")
                Navigate('/wheels4u/home',{state:{emailLogged:LOGGED_EMAIL}});
            } catch (error) {
                console.error('Error searching:', error);    
        }}
      

      

    return ( 
        <div className="reservation">
            <Header/><br/>
            <a id="ConfirmReservationBack" href="http://localhost:3000/wheels4u/home" align="left">&lt; Back to Home</a>
            <h1 id="conf-reserv"><center>Confirm Reservation</center></h1>
            <Box id="reserve-details">
                <div id="info">
                    <label>Vehicle No</label><br/>
                    <label>Pick up Date</label><br/>
                    <label>Pick up Time</label><br/>
                    <label>Pick up Location</label><br/>
                    <label>No of Dates</label><br/>
                    <label>Need a Driver</label><br></br>
                    <label>Total Payment</label><br/>
                    
                </div>
                <div id="detail">
                    <label>{VEHICLE}</label><br/>
                    <label>{PICKUP_DATE}</label><br/>
                    <label>{PICKUP_TIME}</label><br/>
                    <label>{LOCATION}</label><br/>
                    <label>{NO_DAYS}</label><br/>
                    <label>{NEED_A_DRIVER}</label><br/>
                    <label>{rentalPrice}</label><br/>
                    
                </div>
                <Button id='cancel' variant="contained" size="medium" color="inherit" width="150px" onClick={Cancel}><b>Cancel</b></Button>
                <Button id='confirm' variant="contained" size="medium" color="inherit" width="150px" align='right' onClick={Confirm}><b>Confirm</b></Button><br/>
            </Box>
            <Footer height='130px'/>
        </div>
     );
}
 
export default Reservation;