import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { updateData, viewJC } from '../Api';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {Stack} from '@mui/system';

const Edit = () => {

    const { jobcard } = useParams();

    const navigate = useNavigate();

    const [jcard, setJcard] = useState({
        jobcard: jobcard,
        cname: "",
        vname: "",
        regnum: "",
        engnum: "",
        chsnum: "",
        typeofserv: "",
        prob: "",
        esttime: "",
        estcost: "",
        date: ""
    });

    console.log(jcard);

    const loadJcard = async () => {
        try
        {
            const result = await viewJC(jobcard);
            setJcard(result.data);
        }
        catch(err)
        {
            console.err("Failed To Load Job Card Details", err);
        }
    };
   
    useEffect(() => {
        loadJcard();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJcard((data) => ({
            ...data, [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try
        {
            await updateData(jcard);

            toast.info(`Job Card ${jobcard} Updated!`, {
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
            console.error("Failed To Update Job Card:", err);
        }
    };

    return (
        <>
            <div className="login-box" id='card'>
                <h2>Edit Job Card : {jcard.jobcard}</h2>
                <br></br>
                <form onSubmit={handleSubmit}>
                <Stack direction="row" spacing={10}>
                    <Stack direction="column" spacing={2}>
                    <div className="user-box">
                        <input type="text" name='cname' value={jcard.cname} onChange={handleChange} required/>
                        <label>Customer Name</label>
                    </div>
                    <div className="user-box">
                        <input name='vname' type="text" value={jcard.vname} onChange={handleChange} required/>
                        <label>Vehicle Name</label>
                    </div>
                    <div className="user-box">
                        <input name='regnum' type="text" value={jcard.regnum} onChange={handleChange} size={'30'} required/>
                        <label>Vehicle Register Number</label>
                    </div>
                    <div className="user-box">
                        <input name='engnum' type="text" value={jcard.engnum} onChange={handleChange} required/>
                        <label>Engine Number</label>
                    </div>
                    <div className="user-box">
                        <input name='chsnum' type="text" value={jcard.chsnum} onChange={handleChange} required/>
                        <label>Chassis Number</label>
                    </div>
                </Stack>
                    <Stack direction="column" spacing={2}>
                    <div className="user-box">
                        <input name='typeofserv' type="text" value={jcard.typeofserv} onChange={handleChange} required/>
                        <label>Service Type</label>
                    </div>
                    <div className="user-box">
                        <input name='prob' type="text" value={jcard.prob} onChange={handleChange} required/>
                        <label>Problems</label>
                    </div>
                    <div className="user-box">
                        <input name='esttime' type="text" value={jcard.esttime} onChange={handleChange} size={'30'} required/>
                        <label>Estimated Time for Delivery (in Hrs)</label>
                    </div>
                    <div className="user-box">
                        <input name='estcost' type="text" value={jcard.estcost} onChange={handleChange} required/>
                        <label>Estimated Cost for Service (in ₹)</label>
                    </div>
                    <div className="user-box">
                        <input name='date' type="text" value={jcard.date} onChange={handleChange} required/>
                        <label>Date and Time of Service</label>
                    </div>
                    </Stack>
                    </Stack>
                    <input id='submitEdit' type='submit'/>
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

export default Edit;