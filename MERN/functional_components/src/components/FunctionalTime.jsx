import react, { useState } from 'react';

const FunctionalTime = (props) => {
    const {message, subMessage} = props; {/* Destructure props */}
    // const [state, setState] = useState(0);
    const [mainClickCount, setMainClickCount] = useState(0);
    const [subClickCount, setSubClickCount] = useState(0);

    return(
        <div className="border border-rounded m-5">
            <h1>Functional Component!</h1>
            <h2 onClick={() => setMainClickCount(mainClickCount + 1)}>{message} Likes: {mainClickCount}</h2>
            {/* <h2>{props.message}</h2> NO DESTRUCTURING*/}
            <h5 onClick={() => setSubClickCount(subClickCount + 1)}>{subMessage} Likes: {subClickCount}</h5>
            {/* <h5>{props.subMessage}</h5> NO DESTRUCTURING */}
        </div>
    )
}

export default FunctionalTime;