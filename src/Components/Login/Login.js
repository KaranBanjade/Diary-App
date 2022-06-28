// Importing useState to take care of variables
import { useState } from 'react';
// Importing CSS for the file
import './Login.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [input,setInput] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const loginApiFunction = (e) => {

        // To Prevent HotReload
        e.preventDefault();

        // Building an Object for body request
        let data = {
            "password" : password
        }
        if(input.includes(".com"))
            data["email"] = input;
        else
            data["username"] = input
        
        // Check If any of the fields are empty
        if(input===''){
            alert("Enter Username or Email");
            return;
        }
        if(password===''){
            alert("Enter Password");
            return;
        }
        // POST Request For Login
        axios({
			method: 'POST',
			url: `http://localhost:5000/user/login`,
			data,
		})
        .then((data)=>{
            // Setting Token in localStorage for further hits
            localStorage.setItem("token", data.data.token);
            alert("Logged In");
            navigate('/home');
        })
        .catch((err) => {
            // To be turned to toastify
            alert(err.response.data +  "\nError Code "+ err.response.status);
            console.log(err);
        });
    }
    return (
        <div id="login" >
            <center id = "login-center">
                <div>
                    <img src = "Images/TopImg.png" alt="img" width="350rem" id='login-logo'/>
                    <form id = "input-div" autoComplete = "off" >
                        <input  type="text" 
                                placeholder="Username/Mail" 
                                className="login-input" 
                                value={input} 
                                onChange={(e)=>{setInput(e.target.value)}}/>    
                        <input  type="password" 
                                placeholder="Password" 
                                className="login-input" 
                                value={password} 
                                onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button onClick={(e) => loginApiFunction(e)}
                                id = "login-button">
                                Login
                        </button>
                        <container id="register-container"> 
                            <span className="material-symbols-outlined">how_to_reg</span>
                            <Link to="/register" id = "signup-link">
                                No Account? Register Now!
                            </Link>
                        </container>
                    </form>
                </div>
                <span>
                    <img src = "Images/sideImg.png" alt="img" width="300rem" id='login-pencil' />
                </span>
            </center>
        </div>
    )
}

export default Login;