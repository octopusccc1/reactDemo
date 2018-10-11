import React, { Component } from 'react';
import classNames from 'classnames';
import './TestItem.less';
class TestItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelf: false,
      txtSet: false,
      
    };
  }
  handleClick = () => {
    const { isSelf } = this.state;
    const { shiftType,setAllClickType } = this.props;
    if(isSelf&&!shiftType){
      this.setState({
        txtSet: true
      });
      setAllClickType(false);
    }else {
      setAllClickType(true);
    }
  }
  handleEnter = () => {
    this.setState({
      isSelf: true
    });
  }
  handleOut = () => {
    this.setState({
      isSelf: false
    });
  }
  render() {
    const {props} = this;
    return (
        <div {...props}>
          aaaaaa
        </div>
    )
  }
}

export default TestItem;