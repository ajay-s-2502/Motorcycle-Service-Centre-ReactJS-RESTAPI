import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Data from './Components/alldata';
import AdminLogin from './Components/AdminLogin';
import Edit from './Components/edit';
import UserLogin from './Components/UserLogin';
import UserDetails from './Components/userdetails';
import Add from './Components/addJCard';
import AdminSignUp from './Components/adminSignup';
import Home from './Components/home';
import SpareAdmin from './Components/spareAdmin';
import EditSpare from './Components/EditSpare';
import AddSpare from './Components/addSpare';
import SpareUser from './Components/spareUser';
import About from './Components/aboutus';
import Services from './Components/services';
import Contact from './Components/contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/admin/login" element = {<AdminLogin/>}/>
        <Route path = "/user" element = {<UserLogin/>}/>
        <Route path = "/user/data/:regnum" element = {<UserDetails/>}/>
        <Route path = "/admin/data" element = {<Data/>}/> 
        <Route path = "/admin/edit/:jobcard" element = {<Edit/>}/> 
        <Route path = "/admin/add" element = {<Add/>}/> 
        <Route path = "/admin/signup" element = {<AdminSignUp/>}/>
        <Route path = "/admin/spares" element = {<SpareAdmin/>}/>
        <Route path = "/admin/spares/edit/:pid" element = {<EditSpare/>}/>
        <Route path = "/admin/spares/add" element = {<AddSpare/>}/>
        <Route path = "/user/spares" element = {<SpareUser/>}/>
        <Route path = "/aboutus" element = {<About/>}/>
        <Route path = "/services" element = {<Services/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
