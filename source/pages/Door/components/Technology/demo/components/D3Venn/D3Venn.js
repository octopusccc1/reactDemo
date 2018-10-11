import React, { Component } from 'react';
import * as d3 from 'd3';
import * as venn from 'venn.js';
class D3Venn extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { data = [] } = this.props;
    this.updateWidthHeight();
    this.renderChart(data);
    window.addEventListener('resize', this.$handleResize);
  }
  updateWidthHeight() {
    if (this.d3Container) {
      this.width = this.d3Container.offsetWidth;
      this.height = this.d3Container.offsetHeight;
    }
  }
  drawChart=( typed3,
    width,height,container, data)=>{
      // let svg = typed3.select(container).select('svg');
      let chart = venn.VennDiagram().width(width).height(height);
      let div = typed3.select(container).datum(data).call(chart);
      // div.selectAll("text").style("fill", "white");
      // div.selectAll("path")
      //   // .style("fill-opacity", 0)
      //   .style("stroke-width", 0)
      //   .style("stroke-opacity", 1)
      //   .style("stroke", "fff")
      //   .style('fill',  "rgba(255,255,255,0)")
      //   .style("fill-opacity", .8)
      //   .style('opacity', 0)
      //   .transition()
      //   .duration(300)
      //   .style('opacity', 1);
    
  }
  renderChart = (data) => {
    const { drawChart = () => { } } = this.props;
    this.drawChart(d3,66,66,this.d3Container,[1,2,3]);
    
  }

  render() {
    return (
      <div>
        <div className="venn"
          id="#d3a"
          style={{ minHeight: '150px' }}
          ref={node => this.d3Container = node} />
      </div>
    )
  }
}

export default {
  component: D3Venn,
  name: 'venn图'
};