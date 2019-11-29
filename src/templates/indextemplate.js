
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import calculator from '../calculator'
import table from '../table'
import fileDialog from '../fileDialog'
import React from 'react';
import Menu from 'react-animenu';
import Burger from './burger';
import Footer from '../footer'
const IndexTemplate = () => {  
return(
<div>
<Burger/>
	<h1>
				<ul>
					<Link to="/calculator">P1</Link>
					<br/>
					<Link to="/table">P2</Link>
					<br/>
					<Link to="/fileDialog">P3</Link>
					<br/>
					<Link to="/graph">P4</Link>
				</ul>
		
		   </h1>
		   <Footer/>
		   </div>
		   );
		}

export default IndexTemplate;