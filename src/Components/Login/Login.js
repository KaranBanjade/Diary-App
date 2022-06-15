// Importing useState to take care of variables
import { useState } from 'react';
// Importing CSS for the file
import './Login.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import { Outlet, Link } from "react-router-dom";

const Login = () => {
    const [input,setInput] = useState('');
    const [password,setPassword] = useState('');
    const loginApiFunction = (e) => {
        e.preventDefault();
        let data = {
                "password" : password
            }
        if(input.includes(".com"))
            data["email"] = input;
        else
            data["username"] = input
        axios({
			method: 'POST',
			url: `http://localhost:5000/user/login`,
			data,
		})
        .then((data)=>{
            console.log(data);
            alert(data);
        })
        .catch((err) => {
            console.log(err);
            alert(err);
        });
    }
    return (
        <div id="login" >
            <center id = "login-center">
                <div>
                    <img src = "Images/TopImg.png" alt="img" width="350rem" id='login-logo'/>
                    <form id = "input-div" autocomplete = "off" >
                        <input type="text" placeholder="Username/Mail" className="login-input" value={input} onChange={(e)=>{setInput(e.target.value)}}/>    
                        <input type="password" placeholder="Password" className="login-input" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button onClick={(e) => loginApiFunction(e)} id = "login-button">Login</button>
                        <container id="register-container"> 
                            <span class="material-symbols-outlined">how_to_reg</span>
                            <Link to="/test" id = "signup-link">
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