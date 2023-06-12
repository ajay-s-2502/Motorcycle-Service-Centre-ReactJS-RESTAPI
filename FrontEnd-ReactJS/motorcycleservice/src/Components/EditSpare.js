import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSpare, updateData, updateSpare, viewJC } from '../Api';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const EditSpare = () => {

    const { pid } = useParams();

    const navigate = useNavigate();

    const [spare, setSpare] = useState({
        pid: pid,
        pname: "",
        sname: "",
        price: ""
    });

    console.log(spare);

    const loadSpares = async () => {
        try
        {
            const result = await getSpare(pid);
            setSpare(result.data);
        }
        catch(err)
        {
            console.err("Failed To Load Spare Part Details", err);
        }
    };
   
    useEffect(() => {
        loadSpares();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSpare((data) => ({
            ...data, [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try
        {
            await updateSpare(spare);

            toast.info(`Spare Part ${spare.pid} / ${spare.pname} Updated!`, {
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
                navigate("/admin/spares");
            }, 1800);
        }
        catch (err) {
            console.error("Failed To Update Spare Part:", err);
        }
    };

    return (
        <>
            <div className="login-box" id='card' style={{width:'400px', height:'620px'}}>
                <h2 style={{marginTop:'12px'}}>Edit Spare Part : {pid}</h2>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input type="text" name='pname' value={spare.pname} onChange={handleChange} required/>
                        <label>Part Name</label>
                    </div>
                    <div className="user-box">
                        <input name='sname' type="text" value={spare.sname} onChange={handleChange} required/>
                        <label>Seller Name</label>
                    </div>
                    <div className="user-box">
                        <input name='price' type="text" value={spare.price} onChange={handleChange} required/>
                        <label>Price (in ₹)</label>
                    </div>
                    <div className="user-box">
                        <input name='qty' type="text" value={spare.qty} onChange={handleChange} required/>
                        <label>Quantity in Stock</label>
                    </div>
                    <input id='submitEdit' type='submit' style={{marginLeft:'90px'}}/>
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

export default EditSpare;