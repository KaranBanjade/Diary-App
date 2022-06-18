// Importing useState to take care of variables
import { useState, useEffect } from 'react';
// Importing CSS for the file
import './Diaries.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import Diary from '../Diary/Diary'

import { Outlet, Link } from "react-router-dom";
const DiaryMultiple = () => {
    const [Diaries, setDiaries] = useState([]);

    useEffect(() =>{
        console.log("Effected")
        axios({
            method: 'GET',
            url: `http://localhost:5000/diary/my/all`,
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        })
        .then((data)=>{
            // alert("Fetched");
            setDiaries(data.data);
            console.log(data.data);
        })
        .catch((err) => {
            console.log(err);
            // alert(err.response.data);
        });
    },[])
    return (
        <span id="register" >
            <div id = "register-right">
                <h1>Diary</h1>
                <Diary data = {Diaries} />
            </div>  
        </span>
    )
}

export default DiaryMultiple

