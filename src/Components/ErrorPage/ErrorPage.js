const ErrorPage = (props) => {
    return (
        <div className="error-page">
            <h1>Error</h1>
            <p>{props.error || "Something Went Wrong"}</p>
        </div>
    )
}
export default ErrorPage;