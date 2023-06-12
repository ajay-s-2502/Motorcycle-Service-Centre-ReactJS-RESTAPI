import React, { useState } from 'react';
import '../index.css';
import { signIn, userCheck } from '../Api';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

const UserLogin = () => {

    const [isCheckedIn, setIsCheckedIn] = useState(Cookies.get('isCheckedIn') === 'true');
    
    const registerNumber = ''
  
    const navigate = useNavigate();  

    const [values, setValues] = useState({
        regnum: '',
        cname: ''
    });
    //Test
    // console.log(result.data);
    console.log(values);
//Test Ends

    const handleChange = (e) => {
        setValues({ ...values, [e.target.id]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await userCheck(values.regnum, values.cname);
        
        if(result.data === "Login Successful! Welcome :)")
        {
            Cookies.set('registerNumber', values.regnum);
            Cookies.set('isCheckedIn', 'true');
            toast.success('Welcome :)', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(() => {
                navigate(`/user/data/${values.regnum}`);
            }, 1500);
        }
        else if(result.data === "Check your inputs!")
        {
            toast.error('Check your inputs!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else
        {
            toast.error('Vehicle Not Found!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return ( 
    <>
        <div className="login-box">
            <h2>Check Your Service History</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input autoComplete='off' type="text" id='regnum' value={values.regnum} onChange={handleChange} style={{textTransform:'uppercase'}} required/>
                    <label>Vehicle Register Number</label>
                </div>
                <div className="user-box">
                    <input autoComplete='off' id='cname' type="text" value={values.cname} onChange={handleChange} style={{textTransform:'capitalize'}} required/>
                    <label>Customer Name</label>
                </div>
                <input id='submit' type='submit'/>
            </form>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </> 
    );
    
}

export default UserLogin;