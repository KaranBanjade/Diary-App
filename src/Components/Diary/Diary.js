// Importing CSS for the file
import './Diary.css';
// Axios for hitting api
import axios from 'axios';

// import { useState, useEffect } from "react"
const Diary = (props) => {
    

    const deleteDiary = (e, id) => {
        e.preventDefault();
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/diary/my/delete/${id}`,
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((data) => {
                const Diarydata = (props.Diaries.filter(data => data._id !== id));
                props.setDiaries(Diarydata);
                // setDiaryData(remainData);
                alert("Deleted");
                // setDiaries(data.data);
                // console.log(data.data);
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data);
            });
    }
    let dat = props.data;
    let date = new Date(dat.created_at);
    dat.tags = dat.tags.join(', ');
    // console.log(dat);
    return (
            // return (
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
                        {dat.tags}
                    </div>
                    <div>
                        <button onClick={(e) => deleteDiary(e, dat._id)}><span className="material-symbols-outlined">delete</span></button>
                        <button onClick={(e) => deleteDiary(e, dat._id)}><span className="material-symbols-outlined">edit</span></button>
                    </div>
                </div>
            )
        // }
       // )
    // )
}

export default Diary

