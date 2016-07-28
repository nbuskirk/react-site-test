import React from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
    	<div className="footer">
			<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="collapse navbar-collapse text-center">
					<ul className="nav navbar-nav">
				    	<li><Link to="/" activeClass="active">Blog</Link></li>
				    	<li><Link to="/" activeClass="active">About Us</Link></li>
				    	<li><Link to="/" activeClass="active">FAQ</Link></li>
				    	<li><Link to="/" activeClass="active">Terms of Service</Link></li>
					</ul>
				</div>
			</div>
			</nav>
    	</div>
    )
  }
}