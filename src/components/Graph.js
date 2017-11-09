import React from 'react';
import * as d3 from 'd3';


const Graph = (props) => {
    return( 
        <div className="container inside">
        
        </div>
    )
}

class Bar extends React.Component {
    
      constructor(props) {
        super(props)
      }
    
      render() {
        let style = {
          fill: "steelblue"
        }
    
        return(
          <g>
              <rect className="bar" style={style} x={this.props.x} y={this.props.y + 5} width={this.props.width} height={this.props.height} />
          </g>
        )
      }
    
    }
    
    class YAxis extends React.Component {
    
      constructor(props) {
        super(props)
      }
    
      render() {
        let style = {
          stroke: "steelblue",
          strokeWidth: "1px"
        }
        
        let textStyle = {
          fontSize: "0.8em",
          fill: "steelblue",
          textAnchor: "end"
        }
        
        //D3 mathy bits
        let ticks = d3.range(0, this.props.end, (this.props.end / this.props.labels.length))
        let percentage = d3.format(".0%")
        
        let lines = []
        ticks.forEach((tick, index) => {
          lines.push(<line key={index} style={style} y1={tick} x1={this.props.y} y2={tick} x2={this.props.y - 4}  />)
        })
        
        let columnLables = []
        ticks.forEach((tick, index) => {
          columnLables.push(<text key={index} style={ textStyle } y={tick + 6} x={this.props.y - 6} fontFamily="Verdana" >{percentage(this.props.labels[index])}</text>)
        })
        
      
        return(
          <g>
              <g className="y_labels" transform={`translate(${-5},${17})`}>
              <line x1={this.props.y} y1={this.props.start} y2={this.props.end} x2={this.props.y} style={ style } />
              </g>
              <g className="y_labels" transform={`translate(${-5},${51})`}>
                { columnLables }
                { lines }
              </g>
          </g>
        )
      }
    
    }
    
    class XAxis extends React.Component {
    
      constructor(props) {
        super(props)
      }
    
      render() {
        let style = {
          stroke: "steelblue",
          strokeWidth: "1px"
        }
        
        let step = (this.props.start + this.props.end / this.props.labels.length)
        
        //D3 mathy bits   
        let ticks = d3.range(this.props.start, this.props.end, step)
        
        let lines = []
        ticks.forEach((tick, index) => {
          lines.push(<line key={index} style={style} x1={tick + 10 } y1={this.props.x} x2={tick + 10} y2={this.props.x + 4}  />)
        })
        
        let columnLables = []
        ticks.forEach((tick, index) => {
          columnLables.push(<text key={index} style={{fill: "steelblue"}} x={tick + 5} y={this.props.x + 20} fontFamily="Verdana" fontSize="55">{this.props.labels[index]}</text>)
        })
        
      
        return(
          <g>
              <line x1={this.props.start} y1={this.props.x } x2={this.props.end} y2={this.props.x} style={ style } />
              { columnLables }
              { lines }
          </g>
        )
      }
    
    }
    
    class ReactChart extends React.Component {
    
      render() {
        let data = this.props.data
    
        let margin = {top: 20, right: 20, bottom: 30, left: 45},
          width = this.props.width - margin.left - margin.right,
          height = this.props.height - margin.top - margin.bottom;
    
        let letters = data.map((d) => d.letter)
    
        //D3 mathy bits    
        let ticks = d3.range(0, width, (width / data.length))
        let x = d3.scaleOrdinal()
          .domain(letters)
          .range(ticks)
        let y = d3.scaleLinear()
          .domain([0, d3.max(data, (d) => d.frequency)])
          .range([height, 0])
    
        let bars = []
        let bottom = 450
        
        data.forEach((datum, index) => {
          bars.push(<Bar key={index} x={x(datum.letter)} y={bottom - 6 - (height - y(datum.frequency))} width={20} height={height - y(datum.frequency)} />)
        })
    
        return (
          <svg width={this.props.width} height={this.props.height}>
              <YAxis y={40} labels={y.ticks().reverse()} start={15} end={height} />
              
              <g className="chart" transform={`translate(${margin.left},${margin.top})`}>
                 { bars }
                 <XAxis x={ bottom } labels={letters} start={0} end={width} />
              </g>
          </svg>
        );
      }
    }

export default ReactChart;