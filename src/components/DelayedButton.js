import React from 'react'

class DelayedButton extends React.Component{
  clickEvent = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)},this.props.delay)
  }
  render(){
    return(
    <button onClick= {this.clickEvent}  > </button>
    )
  }
}// Code Keypad Component Here

export default DelayedButton
// Code DelayedButton Component Here
