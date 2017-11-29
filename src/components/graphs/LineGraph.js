import React from 'react';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory';

class LineGraph extends React.Component {
    render() {
      
  
      return (
        <div>
          <VictoryChart width={1125}  height={800} style={{parent: {marginLeft: '2%', maxWidth: '90%'}}} >
            <VictoryAxis
              style={{ 
                  axis: {stroke: "black"}, 
                  tickLabels: {stroke: '#76787A', fontSize: '25'}
              }}
            />

            <VictoryAxis
              dependentAxis
              /** tickFormat specifies how ticks should be displayed */
              tickFormat={(x) => (`$${x / 1}k`)}

              style={{ 
                  axis: {stroke: "black"}, 
                  tickLabels: {stroke: '#76787A', fontSize: '25'}
              }}  
            /> 
            <VictoryLine
              style={{
                data: { stroke: "#5CDDA8" }
              }}

              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
              ]}
            />

            <VictoryLine
              style={{
                data: { stroke: "#5C8DAC" },
                parent: { border: "1px solid white"}
              }}
              
              data={[
                { x: 1, y: 6 },
                { x: 2, y: 4 },
                { x: 3, y: 6 },
                { x: 4, y: 3 },
                { x: 5, y: 2 }
              ]}
            />
          </VictoryChart>
        </div>
      );
    }
  }
  
  export default LineGraph;