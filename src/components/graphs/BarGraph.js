import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const BarGraph = () => {


    // let style={
    //     data: {fill: "tomato", opacity: 0.7},
    //     labels: {fontSize: 12},
    //     parent: {border: "1px solid #ccc"}
    //   }

    const data = [
        {quarter: 1, earnings: 13000, fill: '#5CDDA8'},
        {quarter: 2, earnings: 16500, fill: '#5EADE2'}, 
        {quarter: 3, earnings: 14250, fill: '#EA872D'},
        {quarter: 4, earnings: 19000, fill: '#D70F55'}
      ];

      //style={{ parent: { maxWidth: "50%", fontSize: 20}, labels: {fontSize: 12} , axisLabel: {stroke: "white"}}}

    return( 
        <div className="container inside">
            <VictoryChart    domainPadding={20} >
                {<VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis

                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    width={400}
                />}
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    
                    style={{ 
                        axis: {stroke: "black"}, 
                        axisLabel: {fontSize: '20'},
                        tickLabels: {stroke: 'white'}
                    }}
                    theme={{fill: 'white'}}
                /> 
                <VictoryBar
                    padding={2}
                    data={data}
                    // data accessor for x values
                    x="quarter"
                    // data accessor for y values
                    y="earnings"
                />
            </VictoryChart>
        </div>
    )
}

export default BarGraph;