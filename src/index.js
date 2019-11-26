import React from 'react';
import ReactDOM from 'react-dom';
import calculator from './calculator'
import table from './table'
import fileDialog from './fileDialog'
import IndexTemplate from './templates/indextemplate'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Fea extends React.Component {
	render(){
	return(<IndexTemplate />);
}
}
export default Fea;

const routing = (
  <Router>
  <div>

      <Route exact path="/" component={Fea} />
      <Route path="/calculator" component={calculator} />
      <Route path="/table" component={table} />
      <Route path="/fileDialog" component={fileDialog} />
      <Route path="/combo" component={table} />
    </div>
  </Router>
)


ReactDOM.render(
	routing,document.getElementById("root"))