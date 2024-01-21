import gmail_logo from "../Images/Gmail-Logo.png"
import call_logo from "../Images/call-logo.png"
import location from "../Images/location-logo.png"
import "../CSS/Footer.css"
const Footer = () => {
    return ( 

        
        <div id="footer" height="130px" margin="0 20 0 0" padding="0 0 20 0">
            <div className="col-1"margin="0 0 20 0">
                <br/><br/><br/>
            <div align="center">
                        <b>Contact Us :</b>
                    </div>
                    <br/><br/>
                <div align ="center">
                    
                    <img src={gmail_logo} height="20" margin= "20px" align="center" alt="gmail logo"></img>
                </div>
                <br/>
                <div align ="center">
                    <img src={call_logo} height="20" alt="call logo"></img>
                </div>

            </div>
            <div className="col-11">
                
                <div>
                    <br/><br/><br/><br/><br/>
                    <p><a href="www.wheels4u@gmail.com">www.wheels4u@gmail.com</a></p>
                </div>
                
                <div>
                    <p>+94 11 56 34 689</p>
                </div>
                
            </div>
            <div className="col-1">
                <div >
                    <br/><br/><br/>
                    <div align="center">
                        <b>Reach Us:</b>
                    </div>
                    <br/><br/>
                    <div align = "center">
                        <img src={location} height="20" alt="locstion logo"></img>
                    </div>
                </div>
            </div>
            <div className="col-11">
                <br/><br/><br/><br/>
                <div>
                    <p>Wheels4u, </p>
                    <p>No.25,</p>
                    <p>Highlevel Road, Colombo 04.</p>
                </div>
                
            </div>
            <div className="col-11">
                <br/><br/><br/><br/><br/><br/><br/>
            <div align="center"><b>&copy;<span id="2023"> </span><span > Wheels4u. All rights reserved.</span></b></div>
            </div>
        </div>
     );
}
 
export default Footer;