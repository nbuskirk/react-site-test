/* 
Filename: nav.jsx 
Route Path: null
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: Site-wide navigation component.
Component Location: layouts/main.jsx
*/

import React from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router'

export default class Navigation extends React.Component {
  render() {
    return (
    	<nav className="navbar navbar-inverse">
	    	<div className="container-fluid">
	    		<div className="collapse navbar-collapse">
			    	<ul className="nav navbar-nav">
				    	<li><Link to="/" activeClassName="active">Home</Link></li>
				    	<li><Link to="/projects" activeClassName="active">Projects</Link></li>
			    	</ul>
		    	</div>
	    	</div>
    	</nav>
    )
  }
}
