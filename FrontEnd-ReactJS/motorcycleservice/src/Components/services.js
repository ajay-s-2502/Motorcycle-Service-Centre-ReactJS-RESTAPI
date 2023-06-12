import React from 'react'
import {Stack} from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Services = () => {

    const navigate = useNavigate();

    return (
        <>
        <div>
            <h1 id='servicehead'>Let's Talk About Our Facilities</h1>
        </div>
        <div style={{marginTop:'-25px'}}>
            <Stack direction="row">
                <Stack direction="column" id="lhs">
                    <h4>Same Day Delivery&emsp;&emsp;&emsp;&emsp;&emsp;→ </h4>
                    <h4>Wait & Take Services&emsp;&emsp;&emsp;&emsp;&nbsp;→</h4>
                    <h4>Quick Fix Return&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→</h4>
                    <h4>Ample Parking&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;→</h4>
                    <h4 style={{marginTop:'45px'}}>Safety Enabled Workshop&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;→</h4>
                </Stack>
                <Stack direction="column" id="rhs">
                    <h4>Looking for a quick service and an easy way to get your vehicle? Our Bike Doctor workshop got you covered! Just book your service and we offer same day hassle free delivery.</h4>
                    <h4>We provide customers with the opportunity to wait and avail the services. This service is curated for the people who cannot spare the time to wait especially during emergencies.</h4>
                    <h4 style={{marginTop:'16px'}}>Quick fix return facility is especially for the customers who need a quick and easy way to get a vehicle after the completion of inspections and repairs.</h4>
                    <h4 style={{marginTop:'33px'}}>Huge parking facility is available for customers who need to park their vehicles in a safe and secure location.</h4>
                    <h4 style={{marginTop:'30px'}}>Our safety-enabled workshop allows customers to avail the complimentary safety checks of their two wheelers during the workshop.</h4>
                </Stack>
            </Stack>
        </div>
        <button onClick={() => navigate(-1)} id="addSPbtn" style={{width:'94px', height:'50px', marginLeft:'735px', marginTop:'32px'}}>Back</button>
        </>
    );
}
 
export default Services;