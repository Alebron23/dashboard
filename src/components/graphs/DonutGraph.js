import React, {Component} from 'react';
import { VictoryLabel, VictoryPie, VictorChart } from 'victory';

class DonutChart extends Component {

    render() {
        return (
            <VictoryPie 
          style={{ labels: { fill: "white"} } }
          
          innerRadius={100}
          labelRadius={120}
          labels={(d) => d.y}
          
          data={[
            {x: 1, y: 5, fill: '#5CDDA8'},
            {x: 2, y: 4, fill: '#5EADE2'}, 
            {x: 3, y: 2, fill: '#D70F55'},
            {x: 4, y: 3, fill: '#DC4B8F'},
            {x: 5, y: 1, fill: '#EFC133'}
          ]}
        />
        )
    }
}

export default DonutChart;