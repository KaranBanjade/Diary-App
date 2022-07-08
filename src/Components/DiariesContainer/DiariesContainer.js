// Importing useState to take care of variables
import { useState, useEffect } from 'react';
// Importing CSS for the file
import './DiariesContainer.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import Diary from '../DiaryCard/DiaryCard'
// import DiaryPage from '../DiaryPage/DiaryPage'

import Loader from '../Loader/Loader'
import LogOutButton from '../LogOutButton/LogOutButton';
import ErrorPage from '../ErrorPage/ErrorPage';

const DiariesContainer = () => {
    const [Diaries, setDiaries] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        // all diaries of karan in sacchu account
        axios({
            method: 'GET',
            url: `http://localhost:5000/diary/my/all`,
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((data) => {
                let dataObject = data.data;
                if (dataObject.code < 400) {
                    setDiaries(dataObject.data);
                    // Toast(Fetched)
                }
                else {
                    alert(dataObject.message);
                    setError(dataObject.message);
                }
            })
            .catch((err) => {
                console.log("err", err);
                setDiaries(err.response);
                console.log(Diaries)
            });
    }, [])

    if (error) {
        return <ErrorPage error={error} />
    }
    return (
        <>
            <div id="container">
                {
                    (Diaries.length <= 0 ? (<Loader />) : (Diaries.map((diary) => (<Diary data={diary} Diaries={Diaries} setDiaries={setDiaries} key={diary._id} />))))
                }
            </div>
            <LogOutButton />
        </>
    )

}

export default DiariesContainer

