import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0
        }
    }
    render(){
        return(
    <>
        <div className="border p-5 m-5">
            <h1>{this.props.lName}, {this.props.fName}</h1>
            <h5>Age {this.props.age}</h5>
            <h5>Hair Color: {this.props.hair}</h5>
            <p>Likes: {this.state.likes}</p>
            <button onClick={() => this.setState({likes: this.state.likes + 1})} className="btn btn-sm btn-dark">Like</button>
        </div>
    </>
        )
    }
}

export default PersonCard;