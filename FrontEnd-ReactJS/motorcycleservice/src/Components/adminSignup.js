import React, { useState } from 'react';
import '../index.css';
import { addAdmin, signIn } from '../Api';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

const AdminSignUp = () => {

    const navigate = useNavigate();  

    const [signUp, setSignUp] = useState({
        uname: '',
        pass: ''
    });
    //Test
    // console.log(result.data);
    console.log(signUp);
//Test Ends

    const handleChange = (e) => {
        setSignUp({ ...signUp, [e.target.id]: e.target.value});
    };

    //console.log(signIn)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try
        {
            await addAdmin(signUp);

            toast.info(`Admin Added!`, {
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
                navigate("/admin/data");
            }, 1800);
        }
        catch (err) {
            console.error("Failed To Create Admin", err);
        }
    }

    return ( 
    <>
        <div className="login-box">
            <h2>Create New Admin</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input autoComplete='off' type="text" id='uname' value={signUp.uname} onChange={handleChange} required/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input autoComplete='off' id='pass' type="password" value={signUp.pass} onChange={handleChange} required/>
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

export default AdminSignUp;