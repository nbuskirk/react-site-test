/* 
Filename: home.jsx 
Route Path: '/'
Author: Nathan Buskirk
Email: nbuskirk@gmail.com
Description: Homepage layout/template for the '/' route
*/

import React from 'react'
import {render} from 'react-dom'
import Radial from '../components/radial.jsx'

export default class Home extends React.Component {
  render() {
    return (
    	<Radial />
    )
  }
}