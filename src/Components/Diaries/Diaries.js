// Importing useState to take care of variables
import { useState, useEffect } from 'react';
// Importing CSS for the file
import './Diaries.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import Diary from '../Diary/Diary'

const DiaryMultiple = () => {
    const [Diaries, setDiaries] = useState([]);
    console.log(Diaries);
    useEffect(() =>{
        axios({
            method: 'GET',
            url: `http://localhost:5000/diary/my/all`,
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        })
        .then((data)=>{
            setDiaries(data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[])

    return (
            <div id = "container">
                {
                    Diaries.length > 0 && Diaries.map((diary) => 
                        (<Diary data = {diary} Diaries = {Diaries} setDiaries = {setDiaries}/>)
                    )
                }
            </div>  
    )
}

export default DiaryMultiple

