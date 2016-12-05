import React from 'react';

class DelayedButton extends React.Component {
  constructor(){
    super();

    this.oC = this.oC.bind(this)

  }

  oC(e) {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay
    )
  }

  render(){
    return (
          <button onClick = {this.oC}/>
    )
  }
}

module.exports = DelayedButton;
