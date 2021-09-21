import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Login = (props) => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    
    const [errorMsg, setErrorMsg] = useState(null)

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/login', form, {withCredentials: true})
            .then(res => {
                console.log(res);
                if(res.data.msg === 'Login successful'){
                    navigate('/dashboard')
                } else{
                    setErrorMsg(res.data.msg)
                }
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>Login Below</h1>
            <form onSubmit={login}>
            <span>{errorMsg? errorMsg : ''}</span><br></br>
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="email" onChange={onChangeHandler}/><br></br>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={onChangeHandler}/><br></br>
            <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;