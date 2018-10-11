import React, { Component } from 'react';
import PropTypes from 'prop-types';
import D3Container from './D3Container';
import * as venn from 'venn.js';
import './VennChart.less';


const VENN_COLORS = ['#4D6AFF', '#26BD71', '#FFAF0F', '#7231F5', '#4FBED7', '#919191'];//红色在前，用于自己的品牌色

const SELF_COLOR = '#FF3356';

export default class VennChart extends Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      sets: PropTypes.array,
      figure: PropTypes.number,
      label: PropTypes.string,
      size: PropTypes.number
    })),
    style: PropTypes.object,
    className: PropTypes.string,
    main: PropTypes.string,
    transformData: PropTypes.func,
  }

  static defaultProps = {
    data: [],
    transformData: (data, main, accumulate = false) => {

      let $data = JSON.parse(JSON.stringify(data));
      $data.forEach(item => {
        item.audience = item.size;
      });

      if (accumulate) {
        /**
         *  如果其他图形与本品相交部分的大小超过了本品的图像大小，就稍微放大一点本品的图像。
         *
         */
        let $main = $data.find(item => item.label == main);
        let brandSize = $main.audience;

        //计算交集大小
        let intersection = 0;
        let circleNum = 0;
        $data.forEach(sets => {
          if (sets.sets.length == 1 && sets.label) {
            circleNum += 1;
          }
          if (sets.sets.length > 1 && sets.sets.includes(main)) {
            intersection += sets.audience;
          }
        });

        if (circleNum > 2 && intersection > brandSize * 0.75) {

          brandSize = intersection * 2;
          $main.size = brandSize;
        }

        /**
         *
         *
         *  1.设三角形ABC，已知AB边c,BC边a，还有角B, 则面积就是S=1/2SinB*ac。
         *  2.扇形的面积公式为 S = (θπr^2)/360;
         *
         * 画两个圆相交，相交部分的面积已知，可以列出的一个等式是 S相交 = （S1扇形-S1三角形）+（S2扇形-S2三角形）
         *  PS：暂时用魔术数字2代替计算
         */

      }
      return $data;
    }
  }


  onDestroy = ({ d3, container }) => {
    d3.select(container).selectAll('svg').remove();
    d3.select(".venntooltip").remove();
  }

  fillColor = (d, i) => {

    if (i === 0) {
      this.colorIndex = 0;
    }

    if (d.label == this.props.main) {
      return SELF_COLOR;
    } else if (d.sets.length == 1) {
      return VENN_COLORS[this.colorIndex++ % VENN_COLORS.length];
    } else {
      return 'rgba(255,255,255,0)';
    }
  }

  drawChart = ({
    d3,
    width,
    height,
    container,
    data: originData,
  }) => {

    let data = this.props.transformData(originData, this.props.main, true);

    let svg = d3.select(container).select('svg');
    if (svg.size() !== 0) {
      svg.remove();
    }

    let chart = venn.VennDiagram().width(width).height(height);

    let tooltip = d3.select(".venntooltip");

    if (tooltip.size() == 0) {
      tooltip = d3.select('body').append("div")
        .attr("class", "venntooltip");
    }
    let tooltipInited = false;
    // 鼠标进入区域 tooltip 定位
    d3.select(container).on('mouseenter', null);
    d3.select(container).on('mouseenter', function () {

      if (!tooltipInited) {
        tooltipInited = true;

        let event = d3.event;
        let transition = tooltip.style('transition');

        tooltip.style('transition', 'none');
        tooltip.style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");

        setTimeout(() => tooltip.style('transition', transition));
      }
    });
    // 鼠标离开区域 tooltip 消失
    d3.select(container).on('mouseout', null);
    d3.select(container).on('mouseout', function () {
      tooltip.style("opacity", 0);
    });

    let div = d3.select(container).datum(data).call(chart);
    div.selectAll("text").style("fill", "white");
    div.selectAll("path")
      // .style("fill-opacity", 0)
      .style("stroke-width", 0)
      .style("stroke-opacity", 1)
      .style("stroke", "fff")
      .style('fill', this.fillColor)
      .style("fill-opacity", .8)
      .style('opacity', 0)
      .transition()
      .duration(300)
      .style('opacity', 1);

    div.selectAll("g")
      .on("mouseover", function (d, i) {
        // sort all the areas relative to the current item
        venn.sortAreas(div, d);

        // Display a tooltip with the current size
        tooltip.interrupt().transition();
        tooltip.style("opacity", 1);
        tooltip.text(d.sets.join(' ∩ ') + "\n" + (d.sets.length > 1 ? "重叠受众：" : "目标受众：") + d.share + '%');

        // highlight the current path
        let selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
          .style("stroke-width", 3)
          .style("fill-opacity", d.sets.length == 1 ? .8 : .1)
          .style("stroke-opacity", 1);
      })

      .on("mousemove", function () {
        tooltip.style("left", (d3.event.pageX + 10) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      })

      .on("mouseout", function (d, i) {
        tooltip.style("opacity", 0);
        let selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
          .style("stroke-width", 0)
          .style("fill-opacity", d.sets.length == 1 ? .8 : .0)
          .style("stroke-opacity", 1);
      });


  }
  render() {
    let { style, className = '' } = this.props;

    className += ' venn-chart-container';

    return (
      <D3Container
        drawChart={this.drawChart}
        onDestroy={this.onDestroy}
        style={style}
        data={this.props.data}
        className={className}
      />);
  }
}
