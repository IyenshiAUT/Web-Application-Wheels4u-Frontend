import car_man_key from "../Images/car-key-man.jpg"
import "../CSS/AboutUs.css";
import Header from "../Components/Header";
import Footer from "../Components/FooterwithoutMoving";
import {useLocation} from 'react-router-dom'

const AboutUS = () => {
  const Locate = useLocation()
  const id =Locate.state.emailLogged;

    return ( 
      <div className="aboutUS">
        <Header/>
        <div className="col">
          <img  class="car" src={car_man_key} alt="car man key" width="500px"></img>
        </div>
        <div className="col1">
        <p  class="detail" align="justify">We, Wheels4u is the number one highly reputable vehicle rental company in Sri Lanka which rents vehicles for customers for an affordable price.<br/>
We provide our service for 24 hours and you can select cars, vans, lorries and busses according to your preference.<br/>

By considering your convenience now we are on the Internet to make your way easy.<br/>

Since 5 years we are with you with good feedback of our customers and we are keeping updating us to make you more comfortable with our service.<br/> </p>
        </div>
        <Footer/>
      </div>
     );
}
 
export default AboutUS;