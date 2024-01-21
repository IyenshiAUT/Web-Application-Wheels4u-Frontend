import '../CSS/Welcome.css'
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import img from '../Images/line.png';
import { useNavigate } from 'react-router-dom';
import logo1 from "../Images/Wheels4u.png"

const Welcome = () => {

    const Navigate=useNavigate()
    const Continue=()=>{
        Navigate('/wheels4u/sign-in')

    }
    return (
        <div id='welcome' style={{backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat', backgroundSize:'cover', height:'1400px'}}>
            <div id='welbox'><h1 align='left'>Welcome to</h1></div>
                <img id ='hello'src={logo1} width='600px' height='400px'/>

            
                
                <Button id='sign'variant="contained" size="large" color="inherit" ><Box id='btnBox' onClick={Continue}>Sign In &gt;&gt;&gt;</Box></Button>

                
                
      
            
           
        </div>
    );
}
 
export default Welcome;