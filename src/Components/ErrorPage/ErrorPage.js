import { Link } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = (props) => {
    return (
        <div id="error-page-container">
            <div id="error-page-content">
                <div className="error-page">
                    <h1>Error</h1>
                    <p>{props.error || "Something Went Wrong"}</p>
                </div>
                <Link style={{textDecoration: 'none'}}  to = "/">
                    <button className = "error-page-buttons">Login Again</button>
                </Link>
                <button className = "error-page-buttons" onClick = {()=>location.reload()}>Try Again</button>
            </div>
        </div>
    )
}
export default ErrorPage;