import React, { Component } from 'react';
import { render } from 'react-dom';
import FileTemplate from './templates/FileTemplate'

class fileDialog extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
         var preview = document.getElementById('show-text');
         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader()

         var textFile = /text.*/;

         if (file.type.match(textFile)) {
            reader.onload = function (event) {
               preview.innerHTML = event.target.result;
            }
         } else {
            preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
         }
         reader.readAsText(file);

   } 
  }

  render() {
    return (
      <FileTemplate onChanges={this.showFile}/>
    );
  }
}
export default fileDialog 

