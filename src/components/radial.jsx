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

export default class Radial extends React.Component {
	render(){
		return (
			<div className="radial-container">
				<div className="radial-handle" />
				<div className="radial-circle" />
			</div>
		)
	}
}