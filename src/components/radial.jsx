/* 
Filename: radial.jsx 
Route Path: /radial
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: radial dial widget / component.
Component Location: components/radial.jsx
*/

import React from 'react'
import {render} from 'react-dom'

export default class RadialHandle extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			dragging: false
		}
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
	}	
	componentDidUpdate(props, state) {
    	if (this.state.dragging && !state.dragging) {
     		window.addEventListener('mousemove', this.mouseMove)
      		window.addEventListener('mouseup', this.mouseUp)
    	} else if (!this.state.dragging && state.dragging) {
      		window.removeEventListener('mousemove', this.mouseMove)
      		window.removeEventListener('mouseup', this.mouseUp)
    	}
    	document.getElementById('radial-value').innerHTML = Math.round(this.state.rotation,2)
  	}
  	mouseMove(e){
  		if (!this.state.dragging) return
   		var offsetSelector = document.getElementById('radial-container');		
		var xCoordinate = e.pageX;
		var yCoordinate = e.pageY;
		var x = xCoordinate - offsetSelector.offsetLeft - offsetSelector.offsetWidth/2;
		var y = -1*(yCoordinate - offsetSelector.offsetTop - offsetSelector.offsetHeight/2);
		var theta = Math.atan2(y,x)*(180/Math.PI);
		theta = 90 - theta;
		this.setState({
			rotation: theta
		})
  	}
	mouseDown(e) {
		if(e.button!==0) return
	    this.setState({ dragging: true })
	}
	mouseUp(e) {
    	this.setState({ dragging: false })
  	}
	render() {
		var ctrans = 'rotate('+this.state.rotation+'deg)'
		var styles = {
			WebkitTransform: ctrans
		}
		return <div style={styles} className="radial-handle" ref='handle' onMouseDown={this.mouseDown} />
	}
}

export default class Radial extends React.Component {
	constructor(props){
		super(props)
		this.state = { dragging : false }
	}
	render() {
		return (
			<div id="radial-container" className="radial-container">
				<span id='radial-value' className="value">0.00</span>
				<RadialHandle start='0' min='0' max='100' />
				<div id="radial-inner" className="radial-circle" />
			</div>
		)
	}
}