import React from 'react'
import OutputScreen from './Outputscreen'
import '../index.css';

const Button = (props) => { 
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
    <OutputScreen className="screen" question= {props.questions} answer= {props.answers} onNameChange={props.onNameChanges}/>  
    <div className="button-row">

        <input 
      type="button"
      label={'Clear'}
      value={'Clear'}
      onClick={props.click}
      class = "button2"/> 
      
          <input 
          type="button"
          label={'Delete'}
          value={'Delete'}
          onClick={props.click}
          class = "button2"/> 
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
      <Button label={'.'} onClick={props.click}/>
      <Button label={'0'} onClick={props.click}/> 
      <Button label={'='} onClick={props.click}/>
      <Button label={'/'} onClick={props.click}/>  
    </div> 
    </div> 
    </div> 
    );


}
export default CalculatorTemplate;