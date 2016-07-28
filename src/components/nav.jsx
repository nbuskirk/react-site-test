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
			    	<li><Link to="/projects" activeClass="active">Breakdowns</Link></li>
			    	<li><Link to="/projects" activeClass="active">My Tools</Link></li>
			    	<li><Link to="/projects" activeClass="active">Submissions</Link></li>
			    	<li><Link to="/projects" activeClass="active">Auditions</Link></li>
			    	<li><Link to="/projects" activeClass="active">Services</Link></li>
		    	</ul>
		    	</div>
	    	</div>
    	</nav>
    )
  }
}
