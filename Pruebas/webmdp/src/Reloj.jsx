import React from 'react';
import './Contenedores.css';

export default class Reloj extends React.Component {
    constructor(props){
        super(props);
        this.state = {fecha: new Date()};
    }

    componentDidMount(){this.timerID = setInterval(()=>this.tick(), 1000);}

    componentWillUnmount(){clearInterval(this.timerID);}

    tick(){this.setState({fecha: new Date()});}

    render(){
        return (
            <div className='contPadreH anchoFit'>
                <p>{this.state.fecha.toLocaleDateString()} {this.state.fecha.toLocaleTimeString()}</p>
            </div>
        );
    }
}