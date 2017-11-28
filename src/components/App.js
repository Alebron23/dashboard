import React, { Component } from 'react';
import Navbar from './Navbar';
import BarGraph from './graphs/BarGraph';
import LineGraph from './graphs/LineGraph';
import DonutGraph from './graphs/DonutGraph';
import image from './assets/questionmark.jpeg';

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
                        <li className="topContent-dropdown">Displaying: </li>
                        <li> <select>
                                <option>Today</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                            </select>
                        </li>
                    </ul>
                </section>

                {/** white middle bar with data and transaction data.*/}
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

                <div className="container graphs-container">
                    <div className="graph-info-wrapper">
                        <div className='graph-info'>
                            <div className="graph-info-header">
                                {/** Had to set the flex property because it was stacking the title and spacing the img awkwardly. Thats why it has small-flex*/}
                                <div className="graph-info-title small-flex">Streams</div>
                                <img src={image} width={10} height={10} />
                            </div>

                            <div className="table"> 
                                <div className="table-row header background-aqua">
                                    <div className="first-column"><div className="square-color-sign aqua"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">R&R</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Filters</div> 
                                    <div className="small-column">$400</div> 
                                    <div className="end">$200</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Boilers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Overtime</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Hoses</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Tanks</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Rent</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row header background-blue">
                                    <div className="first-column"><div className="square-color-sign blue"></div></div>
                                    <div className="big-column">Crawlers</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Hardware</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>
                            </div>
                        </div>

                        <div className='graph'>
                            <LineGraph />
                        </div>
                    </div> 
                </div>

                <div className="container graphs-container">
                    <div className="graph-info-wrapper">
                        <div className='graph-info'>
                            <div className="graph-info-header">
                            {/** Had to set the flex property because it was stacking the title and spacing the img awkwardly. */}
                                <div className="graph-info-title mid-flex">Revenue By Plan</div>
                                <img src={image} width={10} height={10} />
                            </div>

                            <div className="table"> 
                                <div className="table-row header background-aqua">
                                    <div className="first-column"><div className="square-color-sign aqua"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row header background-blue">
                                    <div className="first-column"><div className="square-color-sign blue"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row header background-orange">
                                    <div className="first-column"><div className="square-color-sign orange"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row header background-pink">
                                    <div className="first-column"><div className="square-color-sign pink"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row header background-yellow">
                                    <div className="first-column"><div className="square-color-sign yellow"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row header background-hot-pink">
                                    <div className="first-column"><div className="square-color-sign hot-pink"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>
                            </div>
                        </div>

                        <div className="graph">
                            <BarGraph />
                        </div>
                    </div>
                </div>

                <div className="container graphs-container">
                    <div className="graph-info-wrapper" >
                        <div className='graph-info'>
                            <div className="graph-info-header">
                                {/** Had to set the flex property because it was stacking the title and spacing the img awkwardly. */}
                                <div className="graph-info-title flex">Revenue By Share</div> 
                                <img src={image} width={10} height={10} />
                            </div>

                            <div className="table"> 
                                <div className="table-row header background-aqua">
                                    <div className="first-column"><div className="square-color-sign aqua"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row header background-blue">
                                    <div className="first-column"><div className="square-color-sign blue"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                                <div className="table-row header background-orange">
                                    <div className="first-column"><div className="square-color-sign orange"></div></div>
                                    <div className="big-column">Filtration</div>
                                    <div className="small-column">Spent</div>
                                    <div className="small-column">Profit</div>
                                </div>

                                <div className="table-row">
                                    <div className="first-column space"></div>
                                    <div className="big-column">Developers</div> 
                                    <div className="small-column">$8</div> 
                                    <div className="end">$420</div> 
                                </div>

                            </div>
                        </div>

                        <div className="graph" >
                            <DonutGraph />
                        </div>
                    </div>
                </div> 
            </div> 
        )
    }
}

export default App;