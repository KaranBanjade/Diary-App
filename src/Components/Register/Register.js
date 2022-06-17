// Importing useState to take care of variables
import { useState } from 'react';
// Importing CSS for the file
import './Register.css';
// Importing Axios for hitting APIs
import axios from 'axios';

import { Outlet, Link } from "react-router-dom";
const Register = () => {
    // const [email,setEmail] = useState('');
    // const [username, setUsername] = useState('');
    // const [name, setName] = useState('');
    // const [password,setPassword] = useState('');
    // const [rePassword,setRePassword] = useState('');
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData((prevState)=>{
                return {...prevState, [e.target.name]:e.target.value}
        })
    }
    const SignupApiFunction = (e) => {
        e.preventDefault();
        if(formData.password !== formData.repassword){
            alert("Password Do Not Match");
            return;
        }

        axios({
			method: 'POST',
			url: `http://localhost:5000/user/signup`,
			data:formData,
		})
        .then((data)=>{
            alert("Registered! Please Check Mail");
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
            alert(err.response.data);
        });
    }
    return (
        <span id="register" >
            <div id = "register-left">
                <img src = "Images/TopImg.png" alt="img" width="400rem" id='register-pencil' />
                    <h1>Register!</h1>
                    <Link to = "/" id = "signup-link">
                        Already Registered? Login Now!
                    </Link>
            </div>
            <div id = "register-right">
                <form onSubmit = {(e) => SignupApiFunction(e)}>
                    <input  type="text" 
                            placeholder="Name"
                            name = "name"
                            required
                            value={formData.name}
                            onChange= {handleChange}/>
                    <input  type="text" 
                            placeholder="Username"
                            name = "username" 
                            required
                            value={formData.username} 
                            onChange= {handleChange}/>
                    <input  type="email" 
                            placeholder="Email" 
                            name = "email" 
                            required
                            value = {formData.email} 
                            onChange= {handleChange}/>
                    <input  type="password" 
                            placeholder="Password" 
                            name = "password" 
                            required
                            value={formData.password} 
                            onChange= {handleChange}/>
                    <input  type="text" 
                            placeholder="Re-Enter Password" 
                            name="repassword"
                            required
                            value={formData.rePassword} 
                            onChange= {handleChange}/>
                    <input type = "submit" id = "register-button" value = "Register" />
                </form>
            </div>
        </span>
    )
}

export default Register

