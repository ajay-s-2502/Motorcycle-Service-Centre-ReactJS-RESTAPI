import { useEffect, useState } from "react";
import { Toget, Todelete } from './all';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() 
{
    const [mus, setMus] = useState([]);

    useEffect(() => {
        loadGames();
    }, 
    []);

    //Test
    console.log(mus)

    const loadGames = () => {
        Toget().then((res) => {
            setMus(res.data);
        });
    };

    const handleDeleteGame = (mid ) => {
        Todelete(mid).then(() => {
            loadGames();
            toast.success(`Deleted !`, {
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
            toast.error("Failed to delete the game.", {
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
  
    
    return (
        <div className='game-x-main'>
            
            <div className='game-actions'>
                <h1 className="game-page-title">Games Dashboard</h1>

                <div className='game-x-data'>
                    <div>
                        <div className="tbl-header">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>My id</th>
                                        <th>Museum name</th>
                                        <th>Location</th>
                                        <th>Theme</th>
                                        <th>Object</th>
                                        <th>Staff</th>
                                        <th>Chechin</th>
                                        <th>Checkout</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="tbl-content">
                            <table cellPadding={0} cellSpacing={10} border={4}>
                                <tbody>
                                    {mus.map((mu) => (
                                        <tr key={mu.mid}>
                                
                                            <td>{mu.mname}</td>
                                            <td>{mu.mlocation}</td>
                                            <td>{mu.theme}</td>
                                            <td>{mu.obj}</td>
                                            <td>{mu.staff}</td>
                                            <td>{mu.checkin}</td>
                                            <td>{mu.checkout}</td>
                                            <td>
                                               
                                                <button
                                                    className="game-x-delete-btn"
                                                    onClick={() => handleDeleteGame(mu.mid)}
                                                >
                                                    <span className="material-symbols-outlined">
                                                        delete
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
        </div>
    );
}