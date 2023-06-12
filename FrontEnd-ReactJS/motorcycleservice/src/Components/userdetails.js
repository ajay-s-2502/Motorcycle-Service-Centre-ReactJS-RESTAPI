import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getUserData } from '../Api';
import Logo from './logos/DataLogo.png';
import {Stack} from '@mui/system';


const UserDetails = () => {

    const { regnum } = useParams();
    // const navigate = useNavigate();
    
    const[userData, setUserData] = useState([]);

    const navigate = useNavigate();

    //Testing
    console.log(userData);

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = () => {
        getUserData(regnum).then((result) => {
            setUserData(result.data);
        });
    };

    return (
        <>
            <div>
                <img src={Logo} id="tablelogo"/>
            </div>
        <Stack direction="row">
            <Stack direction="column">
                <div className='datadiv1'>
                    <div className='label'>Job Card Number:</div>
                    <div className='value'>{userData.jobcard}</div>
                </div>
                <div className='datadiv1'>
                    <div className='label'>Customer Name:</div>
                    <div className='value'>{userData.cname}</div>
                </div>
                <div className='datadiv1'>
                    <div className='label'>Vehicle Name:</div>
                    <div className='value'>{userData.vname}</div>
                </div>
                <div className='datadiv1'>
                    <div className='label'>Vehicle Register Number:</div>
                    <div className='value'>{userData.regnum}</div>
                </div>
                <div className='datadiv1'>
                    <div className='label'>Engine Number:</div>
                    <div className='value'>{userData.engnum}</div>
                </div>
                <div className='datadiv1'>
                    <div className='label'>Chassis Number:</div>
                    <div className='value'>{userData.chsnum}</div>
                </div>
            </Stack>
            <Stack direction="column">
                <div className='datadiv2'>
                    <div className='label'>Type Of Service:</div>
                    <div className='value'>{userData.typeofserv}</div>
                </div>
                <div className='datadiv2'>
                    <div className='label'>Problems:</div>
                    <div className='value'>{userData.prob}</div>
                </div>
                <div className='datadiv2'>
                    <div className='label'>Estimated Time Taken For Service (in Hrs):</div>
                    <div className='value'>{userData.esttime}</div>
                </div>
                <div className='datadiv2'>
                    <div className='label'>Estimated Cost for Service (in ₹):</div>
                    <div className='value'>{userData.estcost}</div>
                </div>
                <div className='datadiv2'>
                    <div className='label'>Date and Time of Service:</div>
                    <div className='value'>{userData.date}</div>
                </div>
                <div className='datadiv2'>
                <button id="homeuserbtn" onClick={() => navigate("/")}>Home</button>
                <button id="homeuserbtn" onClick={() => navigate("/user/spares")} style={{width:'280px',marginLeft:'15px'}}>View Cost of Spares</button>
                </div>
            </Stack>
        </Stack>
        </>
    );
}

export default UserDetails;