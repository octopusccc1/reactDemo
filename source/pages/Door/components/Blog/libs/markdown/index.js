import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import Canvas from './canvas';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.components = new Map;
    this.renderer = new marked.Renderer();
  }
  componentDidMount(){
    this.renderDOM();
  }
  renderDOM() {
    for (const [id, component] of this.components) {
      const div = document.getElementById(id);

      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div);
      }
    }
  }
  render() {
    let html;
    const document = this.document();
    if (typeof document === 'string') {
      this.components.clear();
      html = marked(document.replace(/:::\s?demo\s?([^]+?):::/g, (match, p1, offset) => {
        const id = offset.toString(36);
        this.components.set(id, React.createElement(Canvas, Object.assign({
          name: this.constructor.name.toLowerCase()
        }, this.props), p1));
        return `<div id=${id} class="demo-container"></div>`;
      }, { renderer: this.renderer }))
    }

    return (
      <div>
        <div dangerouslySetInnerHTML={{
          __html: html
        }} />
      </div>
    )
  }
}