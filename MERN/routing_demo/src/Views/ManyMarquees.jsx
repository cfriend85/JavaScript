import React from 'react';

const ManyMarquees = (props) => {

    return(
        <div>
            <h1>{isNaN(props.word) ? `word: ${props.word}` : `number: ${props.word}`}</h1>
        </div>
    )
}


export default ManyMarquees;