import * as React from 'react'
import Graphtemp from './templates/graphtemp'
import {
  LineSeries, Tooltip,
  ChartProvider, XAxis, YAxis,
} from 'rough-charts'

class Graph extends React.Component {
	constructor(props) {
      super(props) 
		this.state = { 
	 		data : [
					  { name: 'A', value1: 30, value2: 35 },
					  { name: 'B', value1: 90, value2: 17 },
					  { name: 'C', value1: 50, value2: 23 },
					  { name: 'D', value1: 40, value2: 15 },
					  { name: 'E', value1: 70, value2: 39 },
					  { name: 'G', value1: 30, value2: 25 },
					  { name: 'H', value1: 100, value2: 31 },
					  { name: 'I', value1: 110, value2: 32 },
					]
}
}
render(){
	return(
    <Graphtemp data={this.state.data}/>
    );
}
}
export default Graph