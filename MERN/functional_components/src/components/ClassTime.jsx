import {Component} from 'react';

class Time extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    render(){
        return(
            <div className="border border-rounded m-5" onClick={() => this.setState({count: this.state.count + 1})}>
                <h1>{this.props.message}</h1>
                <h2>Likes: {this.state.count}</h2>
            </div>
        )
    }
}

export default Time