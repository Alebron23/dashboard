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

                <div className="container">
                    <div className="graph one">
                        <Graph type= {'bar'}/>
                    </div>

                    <div className="graph two">
                        <Graph type={'line'}/>
                    </div>
                </div>

                <div className="container">
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