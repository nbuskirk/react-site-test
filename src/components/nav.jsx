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
				    	<li><Link to="/" activeClass="active">Home</Link></li>
				    	<li><Link to="/about" activeClass="active">About</Link></li>
				    	<li><Link to="/code" activeClass="active">Code</Link></li>
				    	<li><Link to="/lab" activeClass="active">Lab</Link></li>
			    	</ul>
		    	</div>
	    	</div>
    	</nav>
    )
  }
}
