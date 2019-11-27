import React from 'react' 

var OutputScreen = (props) => { 
  return ( 
    <div>
    <div className="calculator-title" > 
      <h1>Calculator</h1>
    </div> 
 


    
      <input type="text" value={props.question} className="screen-row"/>
      <br/>
      <input type="text" value={props.answer} className="screen-row" />
     
    </div>
  ); 
}
export default OutputScreen;