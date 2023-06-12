import React, { Component } from 'react';
import bikedoc from './logos/bikedoc.jpg';
import {Stack} from '@mui/system';
import bikehome from './logos/bikehome1.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleAdminLogin = () => {
      navigate("/admin/login");
  };

  const handleHomeClick = () => {
      navigate("/");
  };

  const handleAboutClick = () => {
      navigate("/aboutus");
  };

  const handleServiceClick = () => {
      navigate("/services");
  };

  const handleContactClick = () => {
      navigate("/contact");
  };

  const handleUserClick = () => {
      navigate("/user");
  };

  return ( 
    <>
      <nav className='navbar'>
          <img src={bikedoc} id='companylogo'/>
          <a onClick={handleHomeClick}>Home</a>
          <a onClick={handleAboutClick}>About Us</a>
          <a onClick={handleServiceClick}>Our Services</a>
          <a onClick={handleContactClick}>Contact Us</a>
          <button id='adlogbutton' onClick={handleAdminLogin}>Admin Login</button>
      </nav>
      <h5 className='fst-italic' id='subhead'>A Company Under VTSA Groups</h5>
      <div>
        <Stack direction='row' spacing={15}>
          <Stack direction='column' spacing={20}>
            <h1 id='hometext'>Freedom Is What Matters – Rely on Us for Your Repairs</h1>
            <h3 id='subtext'>Commuting, exploring, adventuring- everything's possible with superior bike service.</h3>
          </Stack>
          <Stack direction='column' spacing={3}>
            <img src={bikehome} id='homeimg'/>
          </Stack>
        </Stack>
        <button class="cssbuttons-io-button" onClick={handleUserClick}> Check Service Record
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
              </div>
        </button>
      </div>
    </>
   );
}

export default Home;