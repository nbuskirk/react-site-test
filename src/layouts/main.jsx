import React from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

export default class Main extends React.Component {
  render() {
    return (
    	<div className="container">
	    	<Nav />
	    	{this.props.children}
	    	<Footer />
    	</div>
    )
  }
}