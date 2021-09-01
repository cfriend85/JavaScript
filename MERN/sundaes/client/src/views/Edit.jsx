import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Form from '../components/Form';

const Edit = (props) => {
    const [form, setForm] = useState({
        name: "",
        ice_cream: "",
        sauce: "",
        whipped: false,
        cherry: false,
        color: "",
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/sundaes/${props._id}`)
            .then(res => setForm(res.data.sundae))
            .catch(err => console.log(err))
    }, [props._id])

    const onChangeHandler = (event) => {
        setForm({
        ...form,
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/sundaes/update/${props._id}`, form)
        .then(res => {
            console.log(res)
            if(res.data.error.errors){
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

export default Edit;