// Importing CSS for the file
import './Diary.css';
const Diary = (props) => {
    let data = props.data;
    return (
        data.map(dat => {
            let date = new Date(dat.created_at);
            dat.tags = dat.tags.join(', ');
            console.log(dat)
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
                        {dat.tags}
                </div>
            </div>
            )
        }
    )
    )
}

export default Diary

