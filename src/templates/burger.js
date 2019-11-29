import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import calculator from '../calculator'
import table from '../table'
import fileDialog from '../fileDialog'
import Graph from '../graph'
import React from 'react';
import Menu from 'react-animenu';

const Burger = () => {  
return(
<Menu
  buttonColorOpen="orange"
  buttonColorClosed="blue"
  menuBackgroundColor="orange"
  iconTextWhenOpen="Close"

  iconTextWhenClose="="
>
<a ><h1><Link to="/">Home</Link></h1></a>
  <a ><h1><Link to="/calculator">P1</Link></h1></a>
  <a ><h2><Link to="/table">P2</Link></h2></a>
  <a ><h3><Link to="/fileDialog">P3</Link></h3></a>
  <a ><h3><Link to="/graph">P4</Link></h3></a>
</Menu>
);
}
export default Burger;