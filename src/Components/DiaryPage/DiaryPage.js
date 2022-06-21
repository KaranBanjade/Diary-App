import { useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
const DiaryPage = () => {
    const [diaryData,setDiaryData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const {data} = location.state;
    useEffect(()=>{
        setDiaryData(data);
    },[])
    const handleChange = (e) => {
        setDiaryData((prevState) => {
            return {...prevState, [e.target.name]:(e.target.name==="tags"?e.target.value.split(","):e.target.value)}
        })
    };
    const editDiary = (e) => {
        e.preventDefault();
        axios({
            method: 'PATCH',
            url: `http://localhost:5000/diary/my/update/${diaryData._id}`,
            headers: {
                "Authorization" : localStorage.getItem("token")
            },
            data: diaryData
        })
        .then((data)=>{
            alert(data.data);
            navigate('/home');
        })
        .catch((err) => {
            console.log(err);
        })
        // alert("hi");
    }
    return (
        <>
            {diaryData && (<div className="Edit-Diary-Container">
                    <form onSubmit = {(e)=>editDiary(e)}>
                        <input type = "text" name = "title" value = {diaryData?.title} onChange = {handleChange}/>
                        <br />
                        <input type = "text" name = "body" value = {diaryData?.body} onChange = {handleChange}/>
                        <br />
                        <input type = "text" name = "tags" value = {diaryData?.tags} onChange = {handleChange}/>
                        <br />
                        <input type = "submit"/>
                    </form>
                    </div>
            )}
        </>
        )
}

export default DiaryPage;