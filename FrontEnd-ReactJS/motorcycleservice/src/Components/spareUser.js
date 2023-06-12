import React, { useEffect, useState } from "react";
import '../index.css';
import Logo from './logos/DataLogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { getAllSpares } from "../Api";
import {Stack} from '@mui/system';

const SpareUser = () => {

    const navigate = useNavigate();

    const [spare, setSpare] = useState([]);

  //Testing
    console.log(spare);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        getAllSpares().then((result) => {
            setSpare(result.data);
        });
    };

    return ( 
        <>
        <div>
        <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={2}>
                <img src={Logo} id="tablelogo"/>
            </Stack>
            <Stack direction="column" spacing={2}>
                <button onClick={() => navigate(-1)} id="addSPbtn" style={{width:'94px', height:'50px', marginLeft:'385px', marginTop:'15px'}}>Back</button>
            </Stack>
        </Stack>
        </div>
        <div class="six">
          <h1 id="sparehead">Spare Parts @Bike Doctor</h1>
        </div>
        <div className="app-contain">
          <table>
            <thead>
              <tr style={{textAlign:'center'}}>
                <th>Part Code</th>
                <th>Part Name</th>
                <th>Seller Name</th>
                <th>Price (in ₹)</th>
                {/* <th>Quantity in Stock</th> */}
              </tr>
            </thead>
            <tbody>
              {spare.map((obj) => (
                  <tr key={obj.pid}>
                <td>{obj.pid}</td>
                <td>{obj.pname}</td>
                <td>{obj.sname}</td>
                <td>{obj.price}</td>
                {/* <td>{obj.qty}</td> */}
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <button onClick={() => navigate("/")} id="admHomebtn">Home</button> */}
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
 
export default SpareUser;