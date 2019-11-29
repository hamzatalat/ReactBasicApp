import React from 'react' 

var OutputScreen = (props) => { 
  return ( 
    <div>
    <div className="calculator-title" > 
      <h1>Calculator</h1>
    </div> 
 

    
    
      <input type="text" value={props.question} className="screen-row" onChange={props.onNameChange}/>
      <br/>
      <input type="text" value={props.answer} className="screen-row" onChange={props.onNameChange} />
     
    </div>
  ); 
}
export default OutputScreen;