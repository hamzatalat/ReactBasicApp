import React from 'react' 

var OutputScreen = (props) => { 
  return ( 
    <div>
    <div className="calculator-title"> 
      Calculator
    </div> 
 


    <div className="screen-row"> 
      <input type="text" value={props.question} />
    </div>  
    <div className="screen-row"> 
      <input type="text" value={props.answer} />
    </div> 
    </div>
  ); 
}
export default OutputScreen;