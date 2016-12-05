import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.onC = this.onC.bind(this)
  }

  onC(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

render(){
  return (
    <button onClick = {this.onC}/>
  )
}

}

module.exports = CoordinatesButton;
