import React from 'react';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory';

class LineGraph extends React.Component {
    render() {
      
  
      return (
        <div>
          <VictoryChart width={1300}  height={800} style={{parent: {marginLeft: '5%', maxWidth: '70%'}}} >
            <VictoryAxis
              style={{ 
                  axis: {stroke: "black"}, 
                  tickLabels: {stroke: '#76787A', fontSize: '40'}
              }}
            />

            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={(x) => (`$${x / 1}k`)}

              style={{ 
                  axis: {stroke: "black"}, 
                  tickLabels: {stroke: '#76787A', fontSize: '40'}
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
                data: { stroke: "#5CDDA8" },
                parent: { border: "1px solid white"}
              }}
              data={[
                { x: 1, y: 7 },
                { x: 5, y: 6 },
                { x: 4, y: 5 },
                { x: 3, y: 4 },
                { x: 2, y: 1 }
              ]}
            />
          </VictoryChart>
        </div>
      );
    }
  }
  
  export default LineGraph;