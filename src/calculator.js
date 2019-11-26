import React from 'react'
import {  BrowserRouter as Router } from 'react-router-dom'
import CalculatorTemplate from './templates/calculatortemplate'
import OutputScreen from './templates/Outputscreen'

class calculator extends React.Component {
	constructor() { 
    super(); 
    this.state = { 
      question: '', 
      answer: ''
    } 
    this.handleClick = this.handleClick.bind(this); 
  }
handleClick(event) { 
 
 
  const value = event.target.value; 
  switch (value) { 
    case '=': { 
 
      if (this.state.question!=='') 
      { 
          var ans=''; 
            try
              { 
                  ans = eval(this.state.question); 

              } 
              catch(err) 
              { 
                  this.setState({answer: "Math Error"}); 
              } 
              if (ans===undefined) 
                  this.setState({answer: "Math Error"}); 
 
              // update answer in our state. 
              else
              {
                  this.setState({ answer: this.state.answer = ans , question: ''});
                  console.log(this.state.answer); 
              }
              break; 
          } 
    } 
    case 'Clear': { 
 

      this.setState({ question: this.state.question = '', answer: this.state.answer ='' }); 
      console.log(this.state.question); 
      break; 
    } 
 
    case 'Delete': { 
      var str = this.state.question; 
        str = str.substr(0,str.length-1); 
        this.setState({question: this.state.question =str}); 
        console.log(this.state.question);
        break; 
    } 
 
  default: { 
      this.setState({ question: this.state.question += value})
      console.log(this.state.question);
      break; 

    } 
  } 
} 

	render(){
	return(
		<CalculatorTemplate click={this.handleClick} questions={this.state.question} answers={this.state.answer} onNameChanges={this.onChange}/>
    );
}
}
export default calculator;
