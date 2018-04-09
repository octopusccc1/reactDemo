import React from 'react';
import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class PriceInput extends React.Component {
  constructor(props) {
    super(props);

    const value = this.props.value || {};
    this.state = {
      number1: value.number1 || '',
      number2: value.number2 || '',
    };
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }
  handleNumberChange1 = (e) => {
    const number1 = parseInt(e.target.value || 0, 10);
    if (isNaN(number1)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number1 });
    }
    this.triggerChange({ number1 });
  }
  handleNumberChange2 = (e) => {
    const number2 = parseInt(e.target.value || 0, 10);
    if (isNaN(number2)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number2 });
    }
    //this.triggerChange({ number2});
  }
  handleCurrencyChange = (currency) => {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    //this.triggerChange({ currency });
  }
  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }
  render() {
    
    const state = this.state;
    return (
      <span>
        <Input
          value={state.number1}
          onChange={this.handleNumberChange1}
          
        />
        <span>~</span>
        <Input
          value={state.number2}
          onChange={this.handleNumberChange2}
          
        />
    </span>
    );
  }
}

export default PriceInput;