import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Form from '../components/Form';

const Main = (props) => {
    const [form, setForm] = useState({
        name: "",
        ice_cream: "",
        sauce: "",
        whipped: false,
        cherry: false,
        color: "",
    })

    const [errors, setErrors] = useState({})

    const onChangeHandler = (event) => {
        setForm({
        ...form,
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/sundaes/create", form)
        .then(res => {
            console.log(res);
            if(res.data.error){
                setErrors(res.data.error.errors)
            }
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="App">
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} form={form} errors={errors}/>
        </div>
    );
}


export default Main;