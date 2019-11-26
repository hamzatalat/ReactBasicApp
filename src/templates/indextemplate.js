import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import calculator from '../calculator'
import table from '../table'
import fileDialog from '../fileDialog'

const IndexTemplate = () => {  
return(<h1>
				<ul>
					<Link to="/calculator">P1</Link>
					<br/>
					<Link to="/table">P2</Link>
					<br/>
					<Link to="/fileDialog">P3</Link>
					<br/>
					<li>P4</li>
				</ul>
		   </h1>);
		}

export default IndexTemplate;