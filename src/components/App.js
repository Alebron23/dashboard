import React, { Component } from 'react';
import Navbar from './Navbar';
import ReactChart from './Graph';

class App extends Component {
    /**
    * Displays our app
    * @function 
    * @return {ReactElement}
    * */
    render() {

        let data = [
            {letter: 'A', frequency: .08167},
            {letter: 'B', frequency: .01492},
            {letter: 'C', frequency: .02782},
            {letter: 'D', frequency: .04253},
            {letter: 'E', frequency: .12702},
            {letter: 'F', frequency: .02288},
            {letter: 'G', frequency: .02015},
            {letter: 'H', frequency: .06094},
            {letter: 'I', frequency: .06966},
            {letter: 'J', frequency: .00153},
            {letter: 'K', frequency: .00772},
            {letter: 'L', frequency: .04025},
            {letter: 'M', frequency: .02406},
            {letter: 'N', frequency: .06749},
            {letter: 'O', frequency: .07507},
            {letter: 'P', frequency: .01929},
            {letter: 'Q', frequency: .00095},
            {letter: 'R', frequency: .05987},
            {letter: 'S', frequency: .06327},
            {letter: 'T', frequency: .09056},
            {letter: 'U', frequency: .02758},
            {letter: 'V', frequency: .00978},
            {letter: 'W', frequency: .02360},
            {letter: 'X', frequency: .00150},
            {letter: 'Y', frequency: .01974},
            {letter: 'Z', frequency: .00074}];

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
                        
                        
                    </div>
                </div>

                <div className="container graphs">
                    <div className="graph one">
                        
                    </div>

                    <div className="graph two">
                    
                    </div>
                </div>

                <ReactChart width={800} height={500}  data={data} />
            </div>
        )
    }
}

export default App;