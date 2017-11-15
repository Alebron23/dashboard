import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const BarGraph = () => {

    const data = [
        {quarter: 1, earnings: 13000, fill: '#5CDDA8', width: 190},
        {quarter: 2, earnings: 16500, fill: '#5EADE2', width: 190}, 
        {quarter: 3, earnings: 14250, fill: '#EA872D', width: 190},
        {quarter: 4, earnings: 19000, fill: '#D70F55', width: 190},
        {quarter: 5, earnings: 20000, fill: '#DC4B8F', width: 190},
        {quarter: 6, earnings: 40000, fill: '#EFC133', width: 190}
      ];

      //style={{ parent: { maxWidth: "50%", fontSize: 20}, labels: {fontSize: 12} , axisLabel: {stroke: "white"}}} responsive={false}

    return( 
        
            <VictoryChart width={1300}  height={800} style={{ parent: {   marginLeft: '0%',maxWidth:'100%'}}}  domainPadding={120} >
                
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`$${x / 5000}k`)}

                    style={{ 
                        axis: {stroke: "black"}, 
                        tickLabels: {stroke: '#76787A', fontSize: '25'}
                    }}
                /> 

                <VictoryBar
                    padding={2}
                    data={data}
                    // data accessor for x values
                    x="quarter"
                    // data accessor for y values
                    y="earnings"
                    style={{width: '40'}}
                />
            </VictoryChart>
        
    )
}

export default BarGraph;