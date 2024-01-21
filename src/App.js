import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import AvailableVehicles from './Pages/AvailableVehicles';
import ConfirmReservation from './Pages/ConfirmReservation';
import MyProfile from './Pages/MyProfile'
import MyReservations from './Pages/MyReservations';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter >
      <Routes>
      <Route exact path="/" element={<Welcome/>}></Route>
      <Route path="/wheels4u/sign-in" element={<SignIn />}></Route>
      <Route path="/wheels4u/sign-up" element={<SignUp/>}></Route>
      <Route path="/wheels4u/home" element={<Home/>}></Route>
      <Route path="/wheels4u/about-us" element={<AboutUs/>}></Route>
      <Route path="/wheels4u/available-vehicles" element={<AvailableVehicles/>}></Route>
      <Route path="/wheels4u/confirm-reservation" element={<ConfirmReservation/>}></Route>
      <Route path="/wheels4u/my-reservations" element={<MyReservations/>}></Route>
      <Route path="/wheels4u/my-profile" element={<MyProfile/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
