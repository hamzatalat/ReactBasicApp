import React from 'react'
import OutputScreen from './Outputscreen'

const Button = (props) => { 
  return ( 
    <input 
      type="button"
      value={props.label}
      onClick={props.onClick}
    /> 
  ); 
} 






const CalculatorTemplate = (props) => {
return(
	<div className="frame">
    <div className="mainCalc">
    <OutputScreen className="screen" question= {props.questions} answer= {props.answers} onNameChange={props.onNameChanges}/>  
    <div className="button-row"> 	
      <Button label={'Clear'} onClick={props.click}/> 
      <Button label={'Delete'} onClick={props.click}/> 
      <Button label={'.'} onClick={props.click}/> 
      <Button label={'/'} onClick={props.click}/> 
    </div> 
    <div className="button-row"> 
      <Button label={'7'} onClick={props.click}/> 
      <Button label={'8'} onClick={props.click}/> 
      <Button label={'9'} onClick={props.click}/> 
      <Button label={'*'} onClick={props.click}/> 
    </div> 
    <div className="button-row"> 
      <Button label={'4'} onClick={props.click}/> 
      <Button label={'5'} onClick={props.click}/> 
      <Button label={'6'} onClick={props.click}/> 
      <Button label={'-'} onClick={props.click}/> 
    </div> 
    <div className="button-row"> 
      <Button label={'1'} onClick={props.click}/>
      <Button label={'2'} onClick={props.click}/> 
      <Button label={'3'} onClick={props.click}/> 
      <Button label={'+'} onClick={props.click}/> 
    </div> 
    <div className="button-row"> 
      <Button label={'0'} onClick={props.click}/> 
      <Button label={'='} onClick={props.click}/> 
    </div> 
    </div> 
    </div> 
    );


}
export default CalculatorTemplate;