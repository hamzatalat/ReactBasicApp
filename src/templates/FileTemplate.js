import React, { Component } from 'react';
import { render } from 'react-dom';
import Burger from './burger';
import Footer from '../footer';

const FileTemplate = (props) => {
return (
	<div>
	<Burger/>
	 <br/>
        <input type="file" onChange={props.onChanges} />
        <div id="show-text">Choose text File</div>
        <Footer/>
      </div>
	);

}
export default FileTemplate