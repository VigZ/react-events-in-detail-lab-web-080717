import React from 'react'

class CoordinatesButton extends React.Component{
  clickEvent = (event) => {
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
  }
  render(){
    return(
    <button onClick= {this.clickEvent}  > </button>
    )
  }
}// Code Keypad Component Here

export default CoordinatesButton// Code CoordinatesButton Component Here
