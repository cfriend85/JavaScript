import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MediaBox from '../components/MediaBox';
import { Link } from '@reach/router';

const Main = (props) => {
    const [media, setMedia] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/media")
            .then(res => setMedia(res.data.medias))
            .catch(err => console.log(err))
    }, [media])

    return(
    <>
        <div className="d-flex justify-content-around flex-wrap p-3">
            {
                media.map((item, i) => {
                    return <MediaBox item={item} key={i} />
                })
            }
        </div>
        <Link to='/new' className="btn btn-primary btn-lg">Create a new Movie/Show</Link>
    </>
    )
}

export default Main;