import '../CSS/Home.css';
import '../CSS/SignIn.css';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import Header from '../Components/Header';
import Footer from '../Components/FooterwithoutMoving';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SignIn from '../Pages/SignIn';
import {useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  const Locate= useLocation()
  const id =Locate.state.emailLogged;

  const [vehicle, setVehicle] = useState(null);
  const [driver, setDriver] = useState(null);
  const [location, setLocation]=useState(null);
  const [noDays, setNoDays] = useState(null);

  const [sendId,setSendId]=useState(null);

  
 // const current = new Date();
  //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [pickupDate, setPickupDate] = React.useState(null);

  const [pickupTime, setPickupTime] = useState(null);

  const [vehicleError, setVehicleError]=useState(null);
  const [driverError, setDriverError]=useState(null);
  const [locationError, setLocationError]=useState(null);
  const [noDaysError, setNoDaysError]=useState(null);
  const [pickupDateError,setPickupDateError]=useState(null);
  const [pickupTimeError, setPickupTimeError]=useState(null);

  //const [daypk,setDaypk]=useState(null);
  //const [daydo, setDaydo]=useState(null);

  //const [STARTDATE,setSTARTDATE]=useState(null);
 // const [ENDDATE, setENDDATE]=useState(null);

  const handleSearch =(emailLogged,searchURL,vehicleSelected,driverSelected,locationSelected,noDaysSelected,pickupDateSelected,dropoffDateSelected
    ,pickupTimeSelected)=>{
    setVehicleError(null);
    setDriverError(null);
    setLocationError(null);
    setNoDaysError(null);
    setPickupDateError(null);
    setPickupTimeError(null);

    let errors=0;
    
    if(vehicle===null){
      setVehicleError("This field is required !!!");
      errors+=1;
    }
    if(driver===null){
      setDriverError("This field is required !!!");
      errors+=1;
    }
    if(location===null || location===''){
      setLocationError("This field is required !!!");
      errors+=1;
    }
    else if(location>=0 ||location<0){
      setLocationError("Invalid Location !!!");
      errors+=1;
    }
    if(noDays===null || noDays===''){
      setNoDaysError("This field is required !!!");
      errors+=1;
    } 
    else if(noDays<=0 || noDays>20){
      setNoDaysError("Invalid days. No of Days should be a number between 1-20 !!!");
      errors+=1;
    }
    if(pickupDate===null){
      setPickupDateError("This field is required !!!");
      errors+=1;
    }
    else if(pickupDate< new Date()){
      setPickupDateError("Date you selected is Invalid !!!");
      errors+=1;
    }
    if(pickupTime===null){
      setPickupTimeError("This field is required !!!");
      errors+=1;
    }
    if(errors===0){
              
      const URL='http://localhost:8080/wheels4u/reservations/'
      var Daypk,Daydo;
      var hrs,mins,time;
        
      const day1=new Date(pickupDate)
      if(((day1.getMonth()+1).length<2) && (day1.getDate().length<2)){
         Daypk=`${day1.getFullYear()}-0${day1.getMonth()+1}-0${day1.getDate()}`;
      }
      else if((day1.getMonth()+1)<10){
        Daypk=`${day1.getFullYear()}-0${day1.getMonth()+1}-${day1.getDate()}`;
      }
      else if(day1.getDate()<10){
         Daypk=`${day1.getFullYear()}-${day1.getMonth()+1}-0${day1.getDate()}`;
      }
      else{
        Daypk=`${day1.getFullYear()}-${day1.getMonth()+1}-${day1.getDate()}`;
      }
      
      
      const day2 = new Date(pickupDate);
      const futureDay = day2.getDate() + parseInt(noDays);
      day2.setDate(futureDay);
      if(((day2.getMonth()+1).length<2) && (day2.getDate().length<2)){
         Daydo=`${day2.getFullYear()}-0${day2.getMonth()+1}-0${day2.getDate()}`;
      }
      else if((day2.getMonth()+1)<10){
        Daydo=`${day2.getFullYear()}-0${day2.getMonth()+1}-${day2.getDate()}`;
      }
      else if(day2.getDate()<10){
        Daydo=`${day2.getFullYear()}-${day2.getMonth()+1}-0${day2.getDate()}`;
      }
      else{
        Daydo=`${day2.getFullYear()}-${day2.getMonth()+1}-${day2.getDate()}`;
      }

      

      var day3=new Date(pickupTime);
      hrs=day3.getHours();
      mins=day3.getMinutes();
      if((hrs<10) && (mins<10)){
        time=`0${hrs}:0${mins}`;
     }
     else if((hrs<10)){
      time=`0${hrs}:${mins}`;
    }else if((mins<10)){
      time=`${hrs}:0${mins}`;
    }else{
      time=`${hrs}:${mins}`;
    }

      const STARTDATE=Daypk+'/';
      const ENDDATE =Daydo;
      try{


        const FINAL_SEARCHED_URL=URL+STARTDATE+ENDDATE+'/'+vehicle;

        
        
       Navigate('/wheels4u/available-vehicles',{state:{emailLogged:id,searchURL:FINAL_SEARCHED_URL,vehicleSelected:vehicle,
        driverSelected:driver,locationSelected:location,noDaysSelected:noDays,pickupDateSelected:Daypk,dropoffDateSelected:Daydo,
        pickupTimeSelected:time}});
       
        
      }
      catch (error) {
        console.error('Error searching:', error);}
      
    }
  }


  return (
      
      <div class="home" padding="300px" align="center" >

        
        <Header id={id}/>
        <div id="caption" align="center">
          <p align="center">Take your vehicle from us...<br/>
              We save yourself and yourtime<br/>
              So join with us & feel a sense of a better journey...
          </p>

        </div>
        <div id ="content">

      <FormControl sx={{ m: 1, width: '23ch' }}>
      <InputLabel id="label-1">Select a vehicle type</InputLabel>
        <Select
          labelId="label-1"
          id="helper-1"
          value={vehicle}
          label="Select a vehicle type"
          onChange={(e) => setVehicle(e.target.value)}
          align="left">
          <MenuItem value={'Car'}>Car</MenuItem>
          <MenuItem value={'Van'}>Van</MenuItem>
          <MenuItem value={'Bus'}>Bus</MenuItem>
          <MenuItem value={'Lorry'}>Lorry</MenuItem>
        </Select>
        <label className="warning" align="left">{vehicleError}</label>
      </FormControl>
      
      <FormControl sx={{ m: 1, width:'23ch' }}>
      <InputLabel id="label-2">Need  a Driver</InputLabel>
        <Select
          labelId="label-2"
          id="helper-2"
          value={driver}
          label="Need a Driver"
          onChange={(e) => setDriver(e.target.value)}
          align="left">
          <MenuItem value={'Yes'} >Yes</MenuItem>
          <MenuItem value={'No'} >No</MenuItem>
        </Select>
        <label className="warning" align="left">{driverError}</label>
      </FormControl>
    
      <FormControl
      sx={{ m: 1, width: '23ch' }}
      noValidate
      autoComplete="off"
      padding='0'
    >
      <TextField id="Location" label="Pick Up Location" variant="outlined" onChange={(e) => setLocation(e.target.value)}/>
      <label className="warning" align="left">{locationError}</label>
      
    </FormControl>
    <FormControl
      sx={{ m: 1, width: '23ch' }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="Dates" label="No of Days" variant="outlined" onChange={(e) => setNoDays(e.target.value)}/>

      <label className="warning" align="left">{noDaysError}</label>
    </FormControl>
    <div id="time-speci">
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker', 'TimePicker']} align='center' padding="0">
      <FormControl
      sx={{ m: 1, width: '23ch' }}
      noValidate
      autoComplete="off"
    >
          <DatePicker
          width="22ch"
          align="center"
          id="pick-up-date"
          label="Pick Up Date"
          margin="0 0 0 0"
          onChange={(e) => setPickupDate(e)}
          />
          <label className="warning" align="left">{pickupDateError}</label>
          </FormControl>
      <FormControl
      sx={{ m: 1, width: '23ch' }}
      noValidate
      autoComplete="off"
    >
         <TimePicker
         width="20ch"
          label="Pick Up Time"
          margin="0 0 0 0"
          padding="0"
          value={pickupDate}
          onChange={(e) => setPickupTime(e)}
          />
          <label className="warning" align="left">{pickupTimeError}</label>
        </FormControl>
      </DemoContainer>
    </LocalizationProvider></div><br/><br/>
    <Button variant="contained" size="medium" color="inherit" align="right" onClick={handleSearch}>Search</Button>
    


      
      
      </div>
      <Footer/>
      </div>  
                
      
     
  
  );
}
 
export default Home;