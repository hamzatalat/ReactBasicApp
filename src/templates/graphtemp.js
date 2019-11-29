import * as React from 'react';
import Burger from './burger';
import Footer from '../footer';
import {
  LineSeries, Tooltip,
  ChartProvider, XAxis, YAxis,
} from 'rough-charts'

const Graphtemp = props => (
	<div>
	<Burger/>
  <ChartProvider
    height={600}
    data={props.data}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <LineSeries
      dataKey="value1"
      options={{
        stroke: 'black',
        strokeWidth: 2,
      }}
    />
    <LineSeries
      dataKey="value2"
      options={{
        stroke: 'black',
        strokeWidth: 2,
      }}
    />
    <Tooltip />
  </ChartProvider>
  <Footer/>
  </div>
)

export default Graphtemp