import React from 'react'
import vtsa from './logos/vtsa.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();
    return (
        <>
            <img src={vtsa} id='vtsa'/>
            <p id='abttxt'>&emsp;&emsp;We are Bike Doctor, the best two wheeler service center in Coimbatore. Our focus is to offer perfect repairing and after sales services of two wheeler for all leading brands. Our mission is to provide customers with the best experience possible when it comes to bike service and maintenance.

Our team is well equipped with the latest technologies and diagnostic equipment to diagnose two wheeler problems in a quick and accurate manner. Our experts understand how important it is to have a reliable and efficient system when it comes to bike service and maintenance. We provide a comprehensive suite of services that includes everything from basic inspections, and tune-ups to complex engine, wheel, and fuel tank repairs.All this makes us the best two wheeler service center in Coimbatore. Our experienced mechanics and technicians are trained to work on all types of bikes from TVS, Hero, Honda, Bajaj, Aprilia, KTM, BMW, Kawasaki to Triumph wise brands. We are committed to provide nothing but the best and that too in a timely manner.

We use state-of-the-art tools and specialized techniques to ensure accuracy and precision while servicing bikes. Additionally, we have a wide selection for branded parts and accessories that can be used to customize your bike’s look and performance. We also offer a variety of special offers and discounts to help you save money on your next bike service or repair. With ProMechanic, you can be assured that your bike will be serviced properly with the latest technology, quality spare parts, and expert technicians.

If you are looking for two wheeler or bike service maintenance assistance or servicing, our team is here to assist you with doorstep bike service – don’t hesitate to contact us.</p>
    <button onClick={() => navigate(-1)} id="addSPbtn" style={{width:'94px', height:'50px', marginLeft:'735px', marginTop:'0px'}}>Back</button>
    </>
    );
}
 
export default About;