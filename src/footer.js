import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculator from './calculator'
import table from './table'
import fileDialog from './fileDialog'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Footer = (props) => { 
	return (
<div className="d-flex flex-column">
  <ButtonGroup size="lg">
    <Button variant="dark" href="/calculator">P1</Button>
    <Button variant="dark" href="/table">P2</Button>
    <Button variant="dark" href="/fileDialog">P3</Button>
  </ButtonGroup>
  </div>
);
}

  export default Footer