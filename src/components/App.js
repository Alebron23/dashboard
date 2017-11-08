import React, { Component } from 'react';
import Navbar from './Navbar';
import Graph from './Graph';

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
                    <div className="graph one">
                        <Graph type= {'bar'}/>
                    </div>

                    <div className="graph two">
                        <Graph type={'line'}/>
                    </div>
                </div>

                <div className="container graphs">
                    <div className="graph one">
                        <Graph type= {'pie'}/>
                    </div>

                    <div className="graph two">
                        <Graph type={'scatter plot'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;