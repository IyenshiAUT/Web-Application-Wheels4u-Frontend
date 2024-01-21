import logo from "../Images/Wheels4u.png";
import * as React from 'react';
import  "../CSS/HeaderwithoutLinks.css"

const HeaderwithoutLinks = () => {
   
    

    
    return ( 
        <div className="headerwithoutlinks" >
            <div id="onecol" align="left">
                <img src={logo} height='70' alt='Hello'></img>
            
            
        </div></div>
        
     );
}
 
export default HeaderwithoutLinks;