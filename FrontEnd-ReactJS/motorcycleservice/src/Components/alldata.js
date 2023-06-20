import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';
import Logo from './logos/DataLogo.png'
import { deleteData, getAll, getWithPaging } from "../Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import {Stack} from '@mui/system';
import axios from "axios";


const Data = () => {

  const page = 3;

  const navigate = useNavigate();
  
  const [data, setData] = useState([]);

  const [offset, setOffset] = useState(0);

  //Testing
  console.log(data);
  
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    pagination();
  },[offset, page])

  const loadData = () => {
    getAll().then((result) => {
        setData(result.data);
    });
  };

  const pagination = () => {
    try{

      if(page!==''&&offset!=='')
      {
        getWithPaging(offset, page).then((result) => {
          setData(result.data);
        }).catch()
        {

        }
      }
      else
      {
        loadData();
      }
    }
    catch(error)
    {
      console.log(error);
    }
  };

  const handleDelete = (jobcard, regnum) => {
    deleteData(jobcard).then(() => {
        pagination();
        toast.success(`Job Card of Vehicle: ${regnum} Deleted!`, { //${}
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
        toast.error("Failed to delete the Job Card.", {
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
  };

  const handleAdd = () => {
    navigate("/admin/add");
  }

  const handleAdminAdd = () => {
    navigate("/admin/signup");
  }

  const handleSpareClick = () => {
    navigate("/admin/spares");
  }

  const handleLogout = () => {
    Cookies.set('isSignedIn', 'false');
    navigate("/");
  }

  const handleIncrement = () => {
    if(data.length !== 0)
    {
      setOffset(offset + 1);
    }
  }

  const handleDecrement = () => {
    if(offset === 0)
    {
      //Do Nothing
    }
    else
    {
      setOffset(offset - 1);
    }
  }

  //Testing
  console.log("Page Number: "+offset);

  return(
    <>
        <div>
            <img src={Logo} id="tablelogo"/>
        </div>
        <div style={{marginTop:'-30px'}}>
        <button onClick={handleAdd} id="addJCbtn">Add Job Card</button>
        <button id="sparebtn" onClick={handleSpareClick}>Spares Cost</button>
        <button onClick={handleAdminAdd} id="addAdmbtn">New Admin Access</button>
        </div>
        <div className="logoutbtn">
          <button id="logoutbtn" onClick={handleLogout}>Logout</button>
        </div>
        <div className="app-contain" style={{marginTop:'10px'}}>
          <table>
            <thead>
              <tr style={{textAlign:'center'}}>
                <th>Job Card Number</th>
                <th>Customer Name</th>
                <th>Vehicle Name</th>
                <th>Vehicle Register Number</th>
                <th>Engine Number</th>
                <th>Chassis Number</th>
                <th>Service Type</th>
                <th>Problems</th>
                <th>Estimated Time for Delivery (in Hrs)</th>
                <th>Estimated Cost for Service (in ₹)</th>
                <th>Date and Time of Service</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj) => (
              <tr key={obj.jobcard}>
                <td>{obj.jobcard}</td>
                <td>{obj.cname}</td>
                <td>{obj.vname}</td>
                <td>{obj.regnum}</td>
                <td>{obj.engnum}</td>
                <td>{obj.chsnum}</td>
                <td>{obj.typeofserv}</td>
                <td>{obj.prob}</td>
                <td>{obj.esttime}</td>
                <td>{obj.estcost}</td>
                <td>{obj.date}</td>
                <td>
                  <Link to = {`/admin/edit/${obj.jobcard}`}>
                      <button className="btn btn-outline-warning" id="editbutton">
                          <span>Edit</span>
                      </button>
                  </Link>
                    <button onClick={() => handleDelete(obj.jobcard, obj.regnum)} className="btn btn-outline-danger" id="delbutton">
                        <span>Delete</span>
                    </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id="butdiv">
        <button onClick={handleDecrement} className="btn btn-info" id="prev">
            <span style={{fontSize:'20px'}}>Prev</span>
        </button>
        <h5 style={{marginLeft:'670px', color:'darkgrey', marginTop:'-34px'}}>PAGE: {offset + 1}</h5>
            <button onClick={handleIncrement} className="btn btn-info" id="next">
                <span style={{fontSize:'20px'}}>Next</span>
            </button>
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
};
export default Data;
