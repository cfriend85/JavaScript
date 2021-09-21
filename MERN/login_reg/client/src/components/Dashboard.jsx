import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, navigate } from '@reach/router';


const Dashboard = (props) => {

    const [loggedinuser, setloggedinuser] = useState(null)

    useEffect(()=> {
        axios.get("http://localhost:8000/api/user/loggedin", {withCredentials: true})
            .then(res => {
                console.log(res.data.user)
                setloggedinuser(res.data.user)
            })
            .catch(err => console.log(err))
    }, [loggedinuser])

    const logout = (event) => {
        axios.get('http://localhost:8000/api/user/logout', {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            {loggedinuser?
            <div>
            <button onClick={logout}>Logout</button>
            <h1>Welcome {loggedinuser.firstName} </h1>
            </div>
            :
            <h1>Please Login!</h1>
        }
        </div>
    )
}

export default Dashboard;