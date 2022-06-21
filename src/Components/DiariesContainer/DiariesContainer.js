// Importing useState to take care of variables
import { useState, useEffect } from 'react';
// Importing CSS for the file
import './DiariesContainer.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import Diary from '../DiaryCard/DiaryCard'

import Loader from '../Loader/Loader'

const DiariesContainer = () => {
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
            setDiaries(data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[])

    return (
            <div id = "container">
                {
                    Diaries.length <= 0?(<Loader />):(Diaries.map((diary) => 
                        (<Diary data = {diary} Diaries = {Diaries} setDiaries = {setDiaries} key = {diary._id}/>)
                    ))
                }
            </div>  
    )
}

export default DiariesContainer
