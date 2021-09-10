import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MediaBox from '../components/MediaBox';

const Main = (props) => {
    const [media, setMedia] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/media")
            .then(res => setMedia(res.data.medias))
            .catch(err => console.log(err))
    }, [media])

    return(
        <div>
                {
                media.map((item, i) => {
                    return <MediaBox item={item} key={i}/>
                })
            }
        </div>
    )
}

export default Main;