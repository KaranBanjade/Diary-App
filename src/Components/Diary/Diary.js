// Importing useState to take care of variables
import { useState } from 'react';
// Importing CSS for the file
import './Diary.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import { Outlet, Link } from "react-router-dom";
const Diary = () => {
    const [Diaries, setDiaries] = useState([]);
    const getDiaries = () => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/diary/my/all`,
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        })
        .then((data)=>{
            alert("Fetched");
            setDiaries(data);
            console.log(data.data);
        })
        .catch((err) => {
            console.log(err);
            alert(err.response.data);
        });
    }
    return (
        <span id="register" >
            <div id = "register-left">
                <img src = "Images/TopImg.png" alt="img" width="400rem" id='register-pencil' />
                    <h1>Register!</h1>
                    <Link to = "/" id = "signup-link">
                        Already Registered? Login Now!
                    </Link>
            </div>
            <div id = "register-right">
                <h1 value = {Diaries}></h1>
            </div>
            <button onClick = {()=>getDiaries()}>GetDiaries</button>
        </span>
    )
}

export default Diary

