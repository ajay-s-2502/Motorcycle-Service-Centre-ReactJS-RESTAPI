import React, { useEffect, useState } from "react";
import '../index.css';
import Logo from './logos/DataLogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { deleteSpare, getAllSpares } from "../Api";
import {Stack} from '@mui/system';

const SpareAdmin = () => {

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

    const handleAdd = () => {
        navigate("/admin/spares/add");
    }

    const handleDelete = (pid, pname) => {
      deleteSpare(pid).then(() => {
        loadData();
        toast.success(`Spare Part: ${pid} / ${pname} Deleted!`, { //${}
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }).catch((error) => {
        toast.error("Failed to delete the Spare Part.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    });
    }

    return ( 
        <>
        <div>
        <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={2}>
                <button onClick={() => navigate("/admin/data")} id="admHomebtn">Admin Home</button>
            </Stack>
            <Stack direction="column" spacing={2}>
                <img src={Logo} id="tablelogoSpare"/>
            </Stack>
            <Stack direction="column" spacing={2}>
                <button onClick={handleAdd} id="addSPbtn">Add Spare Part</button>
            </Stack>
        </Stack>
        </div>
        <div className="app-contain">
          <table>
            <thead>
              <tr style={{textAlign:'center'}}>
                <th>Part Code</th>
                <th>Part Name</th>
                <th>Seller Name</th>
                <th>Price (in ₹)</th>
                <th>Quantity in Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {spare.map((obj) => (
              <tr key={obj.pid}>
                <td>{obj.pid}</td>
                <td>{obj.pname}</td>
                <td>{obj.sname}</td>
                <td>{obj.price}</td>
                <td>{obj.qty}</td>
                <td>
                  <Link to = {`/admin/spares/edit/${obj.pid}`}>
                      <button className="btn btn-outline-warning" id="editbutton">
                          <span>Edit</span>
                      </button>
                  </Link>
                    <button onClick={() => handleDelete(obj.pid, obj.pname)} className="btn btn-outline-danger" id="delSPbutton">
                        <span>Delete</span>
                    </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div id='logout'>
          <button type="submit" className="btn btn-primary" id='out'>
              LOGOUT
          </button>
        </div> */}
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
 
export default SpareAdmin;