// Importing CSS for the file
import './DiaryCard.css';
// Axios for hitting api
import axios from 'axios';

// import { useState, useEffect } from "react"
const DiaryCard = (props) => {
    

    const deleteDiary = (e, id) => {
        e.preventDefault();
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/diary/my/delete/${id}`,
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(() => {
                const Diarydata = props.Diaries.filter(data => data._id !== id);
                props.setDiaries(Diarydata);
                // alert("Deleted");
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data);
            });
    }
    let dat = props.data;
    let date = new Date(dat.created_at);
    return (
            <div className="diary-container">
                <div className="diary-title">
                    {dat.title}
                </div>
                <div className="diary-created_at">
                    {date.toLocaleDateString()}
                    , {date.toLocaleTimeString()}
                </div>
                <div className="diary-body">
                    {dat.body}
                </div>
                <div className="diary-tags">
                    {dat.tags.join(", ")}
                </div>
                <div>
                    <span className="material-symbols-outlined" onClick={(e) => deleteDiary(e, dat._id)}>delete</span>
                </div>
            </div>
            )
}

export default DiaryCard
