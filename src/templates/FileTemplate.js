import React, { Component } from 'react';
import { render } from 'react-dom';


const FileTemplate = (props) => {
return (
	<div>
        <input type="file" onChange={props.onChanges} />
        <div id="show-text">Choose text File</div>
      </div>
	);

}
export default FileTemplate