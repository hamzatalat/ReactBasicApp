import React from 'react'
import OutputScreen from './Outputscreen'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Menu from 'react-animenu';
import Burger from './burger'

const Buttons = (props) => { 
  return ( 
    <input 
      type="button"
      value={props.label}
      onClick={props.onClick}
      class = "button"
    /> 
  ); 
} 






const CalculatorTemplate = (props) => {
return(
	<div className="frame">
    <div className="mainCalc">
    <Burger/>
    <OutputScreen className="screen" question= {props.questions} answer= {props.answers} onNameChange={props.onNameChanges}/>  
    <div className="button-row">

        <Button variant="outline-primary"
      label={'Clear'}
      value={'Clear'}
      onClick={props.click}
      >Clear</Button> 
      
           <Button variant="outline-primary"
          label={'Delete'}
          value={'Delete'}
          onClick={props.click}
          > Delete</Button>
    </div> 
    <div className="button-row"> 
      <Buttons label={'7'} onClick={props.click}/> 
      <Buttons label={'8'} onClick={props.click}/> 
      <Buttons label={'9'} onClick={props.click}/> 
      <Buttons label={'*'} onClick={props.click}/> 
    </div> 
    <div className="button-row"> 
      <Buttons label={'4'} onClick={props.click}/> 
      <Buttons label={'5'} onClick={props.click}/> 
      <Buttons label={'6'} onClick={props.click}/> 
      <Buttons label={'-'} onClick={props.click}/> 
    </div> 
    <div className="button-row"> 
      <Buttons label={'1'} onClick={props.click}/>
      <Buttons label={'2'} onClick={props.click}/> 
      <Buttons label={'3'} onClick={props.click}/> 
      <Buttons label={'+'} onClick={props.click}/> 
    </div> 
    <div className="button-row"> 
      <Buttons label={'.'} onClick={props.click}/>
      <Buttons label={'0'} onClick={props.click}/> 
      <Buttons label={'='} onClick={props.click}/>
      <Buttons label={'/'} onClick={props.click}/>  
    </div> 
    </div> 
    </div> 
    );


}
export default CalculatorTemplate;