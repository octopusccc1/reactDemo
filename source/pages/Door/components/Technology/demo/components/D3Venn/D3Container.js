import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import debounce from 'lodash/debounce';

export default class D3Container extends Component {
  static propTypes = {
    data: PropTypes.any,//eslint-disable-line
    init: PropTypes.func,// 初始化时调用
    drawChart: PropTypes.func.isRequired,// 绘图时调用
    onResize: PropTypes.func,
    onDestroy: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.id = '' + +new Date() + ~~(Math.random() * 100);
    if (props.init) {
      props.init(this);
    }
    this.$handleResize = debounce(this.handleResize.bind(this), 300);
  }

  componentDidMount() {
    const { data = [] } = this.props;
    this.updateWidthHeight();
    this.renderChart(data);

    window.addEventListener('resize', this.$handleResize);
  }

  componentWillReceiveProps(props) {
    if (props.data !== this.props.data) {
      this.renderChart(props.data);
    }
  }

  shouldComponentUpdate() {
    return false;
  }


  componentWillUnmount() {
    const { onDestroy = () => { }, data } = this.props;
    onDestroy({
      d3,
      width: this.width,
      height: this.height,
      container: this.d3Container,
      data
    });
    window.removeEventListener('resize', this.$handleResize);
    this.$handleResize = null;
  }

  updateWidthHeight() {
    if (this.d3Container) {
      this.width = this.d3Container.offsetWidth;
      this.height = this.d3Container.offsetHeight;
    }
  }

  handleResize() {
    const { onResize = () => { }, data } = this.props;
    this.updateWidthHeight();
    onResize({
      d3,
      width: this.width,
      height: this.height,
      container: this.d3Container,
      data
    });
    this.renderChart(data);
  }

  renderChart = (data) => {
    const { drawChart = () => { } } = this.props;
    drawChart({
      d3,
      width: this.width,
      height: this.height,
      container: this.d3Container,
      data
    });
  }

  componentDidCatch() {
    let { style, className } = this.props;
    if (className) {
      className += ' d3-container';
    }
    return (
      <div id={'#d3' + this.id}
        className={className}
        style={{ ...style, minHeight: '150px' }}
        ref={node => this.d3Container = node} >
        <div>组件渲染出错</div>
      </div>);
  }

  render() {
    let { style, className = '' } = this.props;
    if (className) {
      className += ' d3-container';
    }

    return (
      <div className={className}
        id={'#d3' + this.id}
        style={{ ...style, minHeight: '150px' }}
        ref={node => this.d3Container = node} />);
  }
}
