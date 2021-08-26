import React from 'react';

const Context = (props) => {

    return(
        <div>
            <h1>{isNaN(props.word) ? `The word is: ${props.word}` : `The number is: ${props.word}`}</h1>
        </div>
    )
}


export default Context;