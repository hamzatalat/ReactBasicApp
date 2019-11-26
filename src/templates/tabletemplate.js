import React from 'react';

const TableTemplate = (props) => { 
 return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
             <label>
		          Input your number :
		          <input type="text" value={props.values} onChange={props.onChanges} />
		        </label>
            <table id='students'>
               <tbody>
                  <tr>{props.renderTableHeaders}</tr>
                  {props.renderTableDatas}
               </tbody>
            </table>
         </div>
      )
}
export default TableTemplate 