import React from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import styles from '../css/main.less'

export default class Main extends React.Component {
  render() {
    return (
    	<div className="container">
	    	<Nav />
	    		<div className="content">
	    			{this.props.children}
	    		</div>
	    	<Footer />
    	</div>
    )
  }
}