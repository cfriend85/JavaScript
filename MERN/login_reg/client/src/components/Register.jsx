import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Register = (props) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const [errors, setErrors] = useState({})

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const register = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/register', form, {withCredentials: true})
            .then(res => {
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors)
                } else{
                    navigate('/dashboard')
                }
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>Register Below</h1>
            <form onSubmit={register}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" onChange={onChangeHandler}/><br></br>
            <span>{errors.firstName? errors.firstName.message : ''}</span><br></br>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" onChange={onChangeHandler}/><br></br>
            <span>{errors.lastName? errors.lastName.message : ''}</span><br></br>
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="email" onChange={onChangeHandler}/><br></br>
            <span>{errors.email? errors.email.message : ''}</span><br></br>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={onChangeHandler}/><br></br>
            <span>{errors.password? errors.password.message : ''}</span><br></br>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" onChange={onChangeHandler}/><br></br>
            <span>{errors.confirmPassword? errors.confirmPassword.message : ''}</span><br></br>
            <input type="submit" value="Sign up!" />
            </form>
        </div>
    )
}

export default Register;