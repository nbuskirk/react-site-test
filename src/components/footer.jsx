/* 
Filename: footer.jsx 
Route Path: null
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: Site-wide footer component.
Component Location: layouts/main.jsx
*/

import React from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
		<nav className="navbar navbar-inverse">
			<div className="container-fluid">
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
				    	<li><Link to="/" activeClass="active">SF</Link></li>
					</ul>
				</div>
			</div>
		</nav>
    )
  }
}