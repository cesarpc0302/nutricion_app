import React from 'react'
import { render } from 'react-dom'
import { NutricionApp } from './components/nutricion'
import { Whoops404 } from './components/whoops404'
import { Router, Route, hashHistory } from 'react-router'
import './stylesheets/styles.scss'

window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={NutricionApp}/>
		<Route path="*" component={Whoops404}/>
	</Router>,
	document.getElementById("react-container")
)