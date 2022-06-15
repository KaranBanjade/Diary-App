// Importing useState to take care of variables
import { useState } from 'react';
// Importing CSS for the file
import './Register.css';
// Importing Axios for hitting APIs
import axios from 'axios';

const Register = () => {

    const [email,setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password,setPassword] = useState('');
    const SignupApiFunction = (e) => {
        // e.preventDefault();
        let data = {
                email,
                username,
                name,
                password
            }
            console.log(data);
        axios({
			method: 'POST',
			url: `http://localhost:5000/user/signup`,
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
        <span id="register" >
            <div id = "register-left">
                <img src = "Images/TopImg.png" alt="img" width="400rem" id='register-pencil' />
                {/* <img src = "Images/sideImg.png" alt="img" width="200rem" id='register-pencil' /> */}
            </div>
            <div id = "register-right">
                <form>
                    <input type="text" placeholder = "Name" required value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="text" placeholder = "Username" required value={username} onChange={(e)=>{setUsername (e.target.value)}}/>
                    <input type="email" placeholder = "Email" required value = {email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" placeholder = "Password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    {/* Re-Enter Password <input type="text" onChange={()=>{e.target.value}}/> */}
                    <input type = "submit" id = "register-button" onClick = {(e) => SignupApiFunction(e)} value = "Register" />
                </form>
            </div>
        </span>
    )
}

export default Register

