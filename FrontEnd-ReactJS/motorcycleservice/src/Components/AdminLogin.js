import React, { useState } from 'react';
import '../index.css';
import { signIn } from '../Api';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

const AdminLogin = () => {

    const [isSignedIn, setIsSignedIn] = useState(Cookies.get('isSignedIn') === 'true');
    
    const username = ''
  
    const navigate = useNavigate();  

    const [signin, setSignin] = useState({
        uname: '',
        pass: ''
    });
    //Test
    // console.log(result.data);
    console.log(signin);
//Test Ends

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value});
    };

    //console.log(signIn)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn(signin.uname, signin.pass);
        
        if(result.data === "Login Successful! Welcome :)")
        {
            Cookies.set('username', signin.uname);
            Cookies.set('isSignedIn', 'true');
            toast.success('Login Successful! Welcome :)', {
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
                navigate('/admin/data');
            }, 1500);
        }
        else if(result.data === "Wrong Password :(")
        {
            toast.error('Wrong Password :(', {
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
            toast.error('Invalid Username :(', {
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
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input autoComplete='off' type="text" id='uname' value={signin.uname} onChange={handleChange} required/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input autoComplete='off' id='pass' type="password" value={signin.pass} onChange={handleChange} required/>
                    <label>Password</label>
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

export default AdminLogin;