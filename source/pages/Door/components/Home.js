import React, { Component } from 'react';
import * as d3 from 'd3';
class Home extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(d3.select('body').transition)
    }
    render(){
        return(
            <div>
                <svg id="aaa"></svg>
            </div>
        )
    }
}

export default Home;