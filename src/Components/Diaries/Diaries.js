// Importing useState to take care of variables
import { useState, useEffect } from 'react';
// Importing CSS for the file
import './Diaries.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import Diary from '../Diary/Diary'

const DiaryMultiple = () => {
    const [Diaries, setDiaries] = useState([]);
    useEffect(() =>{
        axios({
            method: 'GET',
            url: `http://localhost:5000/diary/my/all`,
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        })
        .then((data)=>{
            console.log(data.data)
            console.log(Diaries, "Diaries")
            if(data.data === Diaries){
                setDiaries(data.data);
                // alert("Fetched");
                console.log("Fetched");
            }
            // console.log(data.data);
        })
        .catch((err) => {
            console.log(err);
            // alert(err.response.data);
        });
    },[Diaries])
    return (
            <div id = "container">
                {
                    Diaries.map((diary) => {
                        return (<Diary data = {diary} Diaries = {Diaries} setDiaries = {setDiaries}/>)
                    })
                }
            </div>  
    )
}

export default DiaryMultiple

