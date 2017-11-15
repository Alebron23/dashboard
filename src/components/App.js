import React, { Component } from 'react';
import Navbar from './Navbar';
import BarGraph from './graphs/BarGraph';
import LineGraph from './graphs/LineGraph';
import DonutGraph from './graphs/DonutGraph';


class App extends Component {

    /**
    * Displays our app
    * @function 
    * @return {ReactElement}
    * */
    render() {
        
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
                    <div className="graph" style={{display: "flex", flexWrap: "wrap"}}>
                        <LineGraph />
                    </div> 
                </div>

                <div className="container graphs">
                    <div className="graph">
                        <BarGraph />
                    </div>
                </div>

                <div className="container graphs">
                    <div className="graph">
                        <DonutGraph />
                    </div>
                </div> 
            </div>

            
        )
    }
}

export default App;