import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaBox from '../components/MediaBox';

const SingleMedia = (props) => {
    
    const [media, setMedia] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/media/${props._id}`)
            .then(res => setMedia(res.data.media))
            .catch(err => console.log(err))
    }, [props._id])
    return(
        <div>
            <MediaBox item={media}/>
        </div>
    )
}

export default SingleMedia;