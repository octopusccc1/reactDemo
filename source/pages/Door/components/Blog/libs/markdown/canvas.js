import React from 'react';
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
import marked from 'marked'
// import { transform } from 'babel-standalone'
// import { LocaleProvider } from 'antd';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    // this.playerId = `${parseInt(Math.random() * 1e9).toString(36)}`;
    this.document = this.props.children.match(/([^]*)\n?(```[^]+```)/);
    // this.description = marked(this.document[1]);
    // this.source = this.document[2].match(/```(.*)\n?([^]+)```/);
    console.log(this.document)
  }
  render(){
    return (
      <div>
        2222
      </div>
    )
  }
}
export default Canvas;