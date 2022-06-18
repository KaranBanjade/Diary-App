// Importing CSS for the file
import './Diary.css';
// Importing Axios for hitting APIs
import axios from 'axios';

const Diary = (props) => {
    // console.log(props.data,"prop");
    let data = props.data;
            {
                return (
                    data.map(dat => (
                        <div>
                        <h2>{dat._id}</h2>
                        <h2>{dat.tags}</h2>
                        <h2>{dat.created_at}</h2>
                        <h2>{dat.updated_at}</h2>
                        <h2>{dat.body}</h2>
                        </div>
                    ))
                )
            }
}

export default Diary

