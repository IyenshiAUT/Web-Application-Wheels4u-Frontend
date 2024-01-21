import '../CSS/AvailableVehicles.css'
import HeaderWithoutLinks from '../Components/HeaderWithoutLinks';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import {useNavigate } from "react-router-dom";

const Vehcles = () => {
    const location=useLocation()
    const Navigate=useNavigate()

    const EMAIL=location.state.emailLogged;
    const SEARCH_URL=location.state.searchURL;
    const VEHICLE_TYPE=location.state.vehicleSelected;
    const WANTED_A_DRIVER=location.state.driverSelected;
    const PICKUP_LOCATION=location.state.locationSelected;
    const NO_DAYS=location.state.noDaysSelected;
    const PICKUP_DATE=location.state.pickupDateSelected;
    const DROPOFF_DATE=location.state.dropoffDateSelected;
    const PICKUP_TIME=location.state.pickupTimeSelected;
    const O_PICKUP_DATE=location.state.originalPickUpDate;
    const O_PICKUP_TIME=location.state.originalPickUpTime;
    const O_DROPOFF_DATE=location.state.originalDropOffDate;

    const [vehicles,setVehicles]=useState([]);

    const fetchData = () => {
      fetch(SEARCH_URL)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setVehicles(data)
        })
    }

    useEffect(() => {
      fetchData()
    }, [])

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        height: '150px'
      });

      function reserveVehicle(defaultValue){
        Navigate('/wheels4u/confirm-reservation',{state:{emailLogged:EMAIL,searchURL:SEARCH_URL,vehicleSelected:VEHICLE_TYPE,
          driverSelected:WANTED_A_DRIVER,locationSelected:PICKUP_LOCATION,noDaysSelected:NO_DAYS,pickupDateSelected:PICKUP_DATE,dropoffDateSelected:DROPOFF_DATE,
          pickupTimeSelected:PICKUP_TIME,vehicle_code:defaultValue,originalPickUpDate:O_PICKUP_DATE,originalPickUpTime:O_PICKUP_TIME,originalDropOffDate:O_DROPOFF_DATE}});
      }

    return ( 

        <div className="vehicles">
            <HeaderWithoutLinks/>
            <div id='scrollable'>
            <br/>
            <a id="VehiclesBack" href="http://localhost:3000/wheels4u/home" align="left">&lt; Return Home</a>
            <h1 id="avail-vehi">Available Vehicles</h1>
            {vehicles.map(vehicle => (
            <Paper id='card'
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 900,
              flexGrow: 1,
              height: 210,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase padding='20 0 0 0'sx={{ width: 250}}>
                  <Img alt="vehicle image" src={vehicle.link} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" paddingRight='50px'>
                  <Grid item xs>
                    <Typography variant="subtitle1" component="div"><b><h2>{vehicle.brand}</h2></b></Typography>
                    <Typography variant="body2" gutterBottom> • {vehicle.gear}</Typography>
                    <Typography variant="body2" gutterBottom> • {vehicle.no_of_seats} seats</Typography>
                  </Grid>
                  
                </Grid>
                <Grid item xs container direction="column" align="right">
                  <Grid item xs>
                      <Typography id='change' variant="subtitle1" component="div"><b><h3><p>Rs. {vehicle.rental_rate} per</p><p>Day</p></h3></b></Typography>
                  </Grid>
                  <br/>
                  <Grid item id='reservegrid'>
                  <Button id='reserve'variant="contained" size="medium" color="inherit" width='500px'defaultValue={vehicle.id}onClick={() => {const vehicleId=vehicle.id;reserveVehicle(vehicleId);}}><b>Reserve</b></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br/>
            
          </Paper>
           
          ))}
          <br/>
          
           
          <Footer/>
          
        </div></div>
     );
}
 
export default Vehcles;