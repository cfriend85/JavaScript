import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaBox from '../components/MediaBox';

const SingleMedia = (props) => {
    
    const [media, setMedia] = useState({});

    const [actor, setActor] = useState("");
    
    const [loaded, setLoaded] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.patch(`http://localhost8000/api/media/addActor/${props._id}`, {actor})
            .then(res => {
                console.log(res);
                setLoaded(false);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/media/${props._id}`)
            .then(res => {
                setMedia(res.data.media)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [loaded])

    return(
        <div>
            <Link to={`/${props._id}/edit`} className="btn btn-warning">Edit</Link>
            <MediaBox item={media}/>
            <form className="form-group mx-auto center col-3" onSubmit={onSubmitHandler}>
                <label htmlFor="actor">Add an Actor/Actress</label>
                <input type="text" name="actor" className="form-control" onChange={(event) => setActor(event.target.value)}/>
                <input type="submit" value="Add!" className="btn btn-info btn-sm" />
            </form>
        </div>
    )
}

export default SingleMedia;