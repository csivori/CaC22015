import React from 'react';
import './Contenedores.css';

class ContadorMasMenosCls extends React.Component {
  render () {
    if (this.props.flow === 'V') {
      return (
          <>
            <div className='contPadreV anchoFit'>
              <div className='contHijoC'><p><strong>{this.props.nombre}</strong></p></div>
              <div className='contPadreH'>
                <div className='contHijoC ancho100'>
                  <p>
                    <button onClick={() => {this.props.setA(this.props.a-1);}}>-</button> {this.props.a} <button onClick={() => {this.props.setA(this.props.a+1);}}>+</button>
                  </p>
                </div>
              </div>
            </div>
          </>
        )
    } else {
      return (
        <>
          <div className='contPadreH anchoFit'>
            <div className='contHijoC ancho100'><p><strong>{this.props.nombre} </strong>
                  <button onClick={() => {this.props.setA(this.props.a-1);}}>-</button> {this.props.a} <button onClick={() => {this.props.setA(this.props.a+1);}}>+</button>
                </p>
            </div>
          </div>
        </>
      )
    }
  }
} 

export default ContadorMasMenosCls;