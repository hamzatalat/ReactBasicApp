
import React from 'react';
import TableTemplate from './templates/tabletemplate'

const numbers = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];

//const mul = 2;
var doubled=[]
//const mul2 = 1;
//const doubled = numbers.map((number) => number * mul);
//const adds = 0;
const Button = (props) => { 
  return ( 
    <input 
      type="button"
      value={props.label}
      onClick={props.click}
    /> 
  ); 
} 

var OutputScreenRow = (props) => { 
  return ( 
    <div className="screen-row"> 
      <input type="text" value={props.value} /> 

    </div> 
  ); 
} 

class table extends React.Component {

   constructor(props) {
      super(props) 
      this.state = { 
      	value:'',
         students: [
            { multiplicand: 2, operation: 'X', multiplier: 1, result: 2 },
            { multiplicand: 2, operation: 'X', multiplier: 2, result: 4 },
            { multiplicand: 2, operation: 'X', multiplier: 3, result: 6 },
            { multiplicand: 2, operation: 'X', multiplier: 4, result: 8 },
            { multiplicand: 2, operation: 'X', multiplier: 5, result: 10 },
            { multiplicand: 2, operation: 'X', multiplier: 6, result: 12 },
            { multiplicand: 2, operation: 'X', multiplier: 7, result: 14 },
            { multiplicand: 2, operation: 'X', multiplier: 8, result: 16 },
            { multiplicand: 2, operation: 'X', multiplier: 9, result: 18 },
            { multiplicand: 2, operation: 'X', multiplier: 10, result: 20 }
         ]
      }
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick(event) {
   console.log(event.target.value); 
   	this.setState({ value: event.target.value });
   	
     
    
   }


      renderTableData() {
      return this.state.students.map((student, index) => {
      	
         doubled= numbers.map((number) => number * this.state.value);
         const { multiplicand, operation, multiplier, result } = student 
         return (
         	
            <tr key={index}>
               <td>{this.state.value}</td>
               <td>{operation}  </td>
               <td>{multiplier}  </td>
               <td> {doubled[index]}  </td>
            </tr>

         )
      })
   }


   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }


   render() {
      return (
         <TableTemplate values = {this.state.value} onChanges={this.handleClick}  renderTableHeaders={this.renderTableHeader()}     renderTableDatas ={this.renderTableData()}/>
      )
   }
}

export default table 