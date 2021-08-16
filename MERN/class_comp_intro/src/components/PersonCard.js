import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.likes
        }
    }
    render(){
        const increaseLikes = () => {
            console.log("clicked like on " + this.props.fName + "'s post")
            this.setState({likes: this.state.likes + 1})
        }
        return(
    <>
        <div className="border p-5 m-5">
            <h1>{this.props.lName}, {this.props.fName}</h1>
            <h5>Age {this.props.age}</h5>
            <h5>Hair Color: {this.props.hair}</h5>
            <p>Likes: {this.state.likes}</p>
            <button onClick={increaseLikes} className="btn btn-sm btn-dark">Like</button>
        </div>
    </>
        )
    }
}

export default PersonCard;