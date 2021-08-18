import {Component} from 'react';

class Car extends Component{
    constructor(props){
        super(props);
        this.statuses = ["Ready for destruction!", "Spewing smoke!", "It's on fire!", "Barely hangin on!", "TOTALLY WRECKED!!!!"]
        this.cars = ["https://www.teamdemo.com/wp-content/uploads/2019/06/mgm-17-democar.jpg", "https://thumbs.dreamstime.com/b/wrecked-car-leaking-radiator-napierville-demolition-derby-july-116301611.jpg", "https://i.ytimg.com/vi/mocmjCZmmNw/hqdefault.jpg", "https://i.ytimg.com/vi/MF1kGgQG-os/maxresdefault.jpg", "http://i45.photobucket.com/albums/f54/MillerTime_3/100_1488.jpg"]
        this.state = {
            status: 0
        }
    }
    render(){
        const style = {
            backgroundColor: this.props.color
        }

        const onClickHandler = () => {
            if(this.state.status < this.statuses.length - 1){            
                this.setState(
                    {status: this.state.status + 1}
                );
            }
        }

        return(
        <div className="card">
                <img className="card-img-top" src={this.cars[this.state.status]} alt=""/>
                    <div className="card-body" style={style}>
                        <h4 className="card-title">"<i>{this.props.carName}</i>"</h4>
                        <h4 className="card-text">
                        Status: {this.statuses[this.state.status]}
                        </h4>
                        <a href="#!" className="btn btn-lg btn-warning smash" onClick={onClickHandler}>Smash it!</a>
                    </div>
            <div>
        </div>
        </div>
        )
    }
}

export default Car