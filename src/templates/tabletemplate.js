import React from 'react';
import Burger from './burger';
import Footer from '../footer';
const TableTemplate = (props) => { 
 return (
         <div class="table">
         <Burger/>
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
            <Footer/>
         </div>
      )
}
export default TableTemplate 