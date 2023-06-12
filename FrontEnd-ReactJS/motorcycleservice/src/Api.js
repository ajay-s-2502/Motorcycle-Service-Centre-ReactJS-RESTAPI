import axios from "axios";

const url = 'http://localhost:8080/bikedoc';

//Admin Login
const signIn = (uname, pass) => axios.post(url+'/admin/login', {uname, pass});

//Fetch All Data In Table As Admin
const getAll = () => axios.get(`${url}/admin/viewAll`);

//Delete A Data With Job Card As Reference
const deleteData = (jobcard) =>  axios.delete(`${url}/admin/delete/${jobcard}`);

//Get A Data With Job Card As Reference
const viewJC = (jobcard) => axios.get(`${url}/view/${jobcard}`);

//Update Data
const updateData = (jcard) => axios.put(`${url}/admin/update`, jcard);

//Check Details As User Using Register Number And Customer Name
const userCheck = (regnum, cname) => axios.post(url+'/user/checkStatus', {regnum, cname});

//Get User Data Using Vehicle Register Number
const getUserData = (regnum) => axios.get(`${url}/user/getDetails/${regnum}`);

//Add Data As Admin
const addData = (jcard) => axios.post(url+'/admin/add', jcard);

//Admin Signup
const addAdmin = (signUp) => axios.post(url+'/admin/newadmin', signUp);

//Get All Spares Details
const getAllSpares = () => axios.get(`${url}/spares`);

//Get A Spare Part Detail With Part ID
const getSpare = (pid) => axios.get(`${url}/spares/${pid}`);

//Update Spare Part Details
const updateSpare = (spare) => axios.put(`${url}/spares/update`, spare);

//Add Spare Part
const addSpare = (spare) => axios.post(url+'/spares/add', spare);

//Delete Spare Part With Part ID
const deleteSpare = (pid) => axios.delete(`${url}/spares/delete/${pid}`);

//Get With Pagination
const getWithPaging = (offset, page) => axios.get(`${url}/admin/get/${offset}/${page}`);

export {signIn, getAll, deleteData, viewJC, updateData, userCheck, getUserData, addData, addAdmin, getAllSpares, getSpare, updateSpare, addSpare, deleteSpare, getWithPaging};