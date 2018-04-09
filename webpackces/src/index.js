import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import todoApp from './components/ReactReduxDemo/todos'
import Robot from './components/robot/robot';
import ProxyDemo from './components/ProxyDemo/ProxyDemo';
import TypeScriptDemo from './components/TypeScriptDemo/TypeScriptDemo';
import websocketDemo from './components/websocketDemo/websocketDemo';
import ButtonDemo from './components/ButtonDemo/ButtonDemo';
import SortDemo from './components/sortDemo/sortDemo';
import UrlDemo from './components/UrlDemo/UrlDemo';
import H5Demo from './components/Html5YSAPIDemo/Html5YSAPIDemo';
import ReactReduxDemo from './components/ReactReduxDemo/ReactReduxDemo';
import CheckBoxDemo from './components/CheckBoxDemo/CheckBoxDemo';
import SafeDemo from './components/safeDemo/safeDemo';
import ContextDemo from './components/contextDemo/contextDemo';
import ModelDemo from './components/modelDemo/modelDemo';
import InputGroup from './components/antDemo/InputGroup';
import './components/antDemo/index.less'
import PriceInput from './components/antDemo/ceshi';

import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;
const actions = {
    increase: () => ({ type: 'INCREASE' }),
    decrease: () => ({ type: 'DECREASE' })
}
let store = createStore(todoApp);
const mock = {
    checked: false
}
class App extends React.Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            themeColor: 'red'
        }
    }
    getChildContext() {
        return {
            themeColor: this.state.themeColor
        }
    }

    onChange() {

    }
    checkItems = (rule, value, callback) => {
        if (!value.number1 || !value.number2 || value.number1 === '0' || value.number2 === '0') {
            callback('请输入正确的区间值，如1-50');
        } else {
            callback()
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    checkPrice = (rule, value, callback) => {
        console.log(value)
        if (value.number > 0) {
            callback();
            return;
        }
        callback('Price must greater than zero!');
    }
    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;


        return (
            <div>
                {/* <ContextDemo />
                <SafeDemo />
                <ModelDemo eventChecked={mock.checked}/>
                <Provider store={store}>
                    <ReactReduxDemo />
                </Provider> */}
                {/* <Form onSubmit={this.handleSubmit}>
                    <FormItem> 
                {getFieldDecorator('value',{
                    initialValue:{
                        numberFrom:0,
                        numberTo:0
                    },
                    rules: [
                      {validator:this.checkItems}
                    ]
                  })(
                    <InputGroup onChange={this.onChange} />
                  )}
                    
                    </FormItem>
                    <FormItem>
                    <Button type="primary"  htmlType="submit">点我</Button>
                    </FormItem>
                </Form> */}
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem label="Price">
                        {getFieldDecorator('price', {
                            initialValue: { number1: '', number2: ''},
                            rules: [{ validator: this.checkItems }],
                        })(<PriceInput />)}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
App = createForm()(App);

ReactDOM.render(<App />, document.getElementById("react-content"));

