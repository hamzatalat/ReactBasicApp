import React from 'react';

const TableTemplate = (props) => { 
 return (
         <div class="table">
            <h1 id='title'>React Dynamic Table</h1>
             <label>
		          Input your number :
		          <input type="text" value={props.values} onChange={props.onChanges} className="screen-row"/>
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