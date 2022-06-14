import { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
    const [input,setInput] = useState('');
    const [password,setPassword] = useState('');
    const loginApiFunction = () => {
        let data = {
                "password" : password
            }
        if(input.includes(".com"))
            data["email"] = input;
        else
            data["username"] = input
        axios({
			method: 'post',
			url: `http://localhost:5000/user/login`,
			data,
		})
        .then(response => JSON.stringify(response))
        .then((data)=>{
            alert(data);
        })
        .catch((err) => {
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
                        <button onClick={() => loginApiFunction()} id = "login-button">Login</button>
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