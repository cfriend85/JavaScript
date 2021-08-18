import react from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props

    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <h3>Age: {age}</h3>
            <h4>Hair Color: {hairColor}</h4>
        </div>
    )
}

export default PersonCard;