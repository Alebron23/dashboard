import React, { Component } from 'react';
import Navbar from './Navbar';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class App extends Component {

    /**
    * Displays our app
    * @function 
    * @return {ReactElement}
    * */
    render() {
        
        const data = [
            {quarter: 1, earnings: 13000},
            {quarter: 2, earnings: 16500},
            {quarter: 3, earnings: 14250},
            {quarter: 4, earnings: 19000}
            ];
           
        return(
            <div>
                <Navbar />

                <section className="container topContent">
                    <h1>Revenue Dashboard</h1>
                    <ul>
                        <li className="display">Displaying: </li>
                        <li> <select>
                                <option>Last 7 Days</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                            </select>
                        </li>
                    </ul>
                </section>

                <section className="container middleContent">
                    <h4> January 15, 2018</h4>
                    <ul>
                        <li><h2>$4,025</h2></li>
                        <li className="small-text">156 Transactions</li>
                        <li className="small-text">$25.8 per transactions</li>
                    </ul>
                    <ul>
                        <li><h2>128</h2></li>
                        <li className="small-text">New customers</li>
                    </ul>
                    <ul>
                        <li><h2>8</h2></li>
                        <li className="small-text">Failed Charges</li>
                    </ul>
                </section> 

                <div className="container graphs">
                    <div className="graph one">
                        
                    </div>

                    <div className="graph two">
                    <VictoryChart theme={VictoryTheme.material} domainPadding={{x: [10, -10]}} colorScale={"warm"}>
                        <VictoryAxis
                            // tickValues specifies both the number of ticks and where
                            // they are placed on the axis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                        />
                        <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={(x) => (`$${x / 1000}k`)}
                        /> 
                        <VictoryBar
                            style={{ data: { fill: "red" } }}
                            data={data}
                            // data accessor for x values
                            x="quarter"
                            // data accessor for y values
                            y="earnings"
                        />
                    </VictoryChart>
                    </div>
                </div>

                <div className="container graphs">
                    <div className="graph one">
                    
                    </div>

                    <div className="graph two">
                    
                    </div>
                </div>
            </div>

            
        )
    }
}

export default App;