import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

const Create = (props) => {

    const [form, setForm] = useState({
        title: "",
        image_url: "",
        year: 0,
        director: "",
        isMovie: false,
        genre: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/media/create", form)
        .then(res => {
            console.log(res);
            navigate("/");
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>Add new Movie or Show!<Link to="/" className="btn btn-warning btn-lg m-3">Home</Link></h1>
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}

export default Create;