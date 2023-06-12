import React from 'react'
import bikedoc from './logos/bikedoc.jpg';
import {Stack} from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();
    
    return (
        <>
        <Stack direction='row'>
            <Stack direction='column'>
                <img src={bikedoc} id='companylogo' style={{marginTop:'53px'}}/>
                <h5 className='fst-italic' id='subhead' style={{marginTop:'11px'}}>A Company Under VTSA Groups</h5>
            </Stack>
            <Stack direction='column' id='contactrhs'>
                <h1>Are you running low on time?</h1>
                <h1 style={{marginTop:'8px'}}>Forget to take care of your vehicle?</h1>
            </Stack>
        </Stack>
        <div id='contactContent'>
            <h2>Don't panic! Call Bike Doctor</h2>
            <h2>Doorstep bike service in Coimbatore</h2>
        </div>
        <div id='contactLastLine'>
            <h3>You can easily arrange an appointment by calling us directly – we will visit your location and pick up your two wheeler at your doorstep for complete servicing.</h3>
        </div>
        <Stack direction='row' id='contact'>
            <Stack direction='column'>
                <h4>E-Mail</h4>
                <h5 style={{marginTop:'5px', fontFamily:'Gill Sans'}}>support@bikedoctor.com</h5>
            </Stack>
            <Stack direction='column'>
                <h4 style={{marginLeft:'250px'}}>Phone</h4>
                <h5 style={{marginTop:'5px', marginLeft:'245px', fontFamily:'Gill Sans'}}>0422-3456789</h5>
            </Stack>
            <Stack direction='column'>
                <h4 style={{marginLeft:'180px'}}>Address</h4>
                <h5 style={{marginTop:'5px', fontFamily:'Gill Sans', marginLeft:'180px'}}>No: 107, 100 Feet Road, Gandhipuram,</h5>
                <h5 style={{marginTop:'5px', fontFamily:'Gill Sans', marginLeft:'190px'}}>Coimbatore - 641 012</h5>
            </Stack>
        </Stack>
        <button onClick={() => navigate(-1)} id="addSPbtn" style={{width:'94px', height:'50px', marginLeft:'735px', marginTop:'0px'}}>Back</button>
        </>
    );
}
 
export default Contact;