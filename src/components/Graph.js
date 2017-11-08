import React from 'react';

const Graph = (props) => {
    return( 
        <div className="container inside">
            {props.type}
            <svg>
                <circle cx={50} cy={50} r={10} fill="red" />
            </svg>
        </div>
    )
}

export default Graph;