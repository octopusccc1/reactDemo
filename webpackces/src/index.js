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
import './assets/css/common/mixin.less';
import './assets/css/lib/ant-theme-vars.less';
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
            themeColor: 'red',
            numberFromDefault:0,
            numberToDefault:0,
            isUpdate:false
        }
        
    }
    getChildContext() {
        return {
            themeColor: this.state.themeColor
        }
    }
    checkItems = (rule, value, callback) => {
       
        if (!value.numberFrom || !value.numberTo || value.numberFrom === '0' || value.numberTo === '0') {
            callback('请输入正确的区间值，如1-50');
        } else {
            callback()
        }
    };
    handleChange = () => {
        setTimeout(this.checkChange.bind(this),0)
    }
    checkChange = () => {
        let values;
        const { form } = this.props;
        const formData = form.getFieldsValue()
       
        let difValue = formData.price.numberFrom - formData.price.numberTo < 0 ? false : true;
        if (difValue) {
            let saveBig = formData.price.numberFrom;
            formData.price.numberFrom = formData.price.numberTo;
            formData.price.numberTo = saveBig;
        };
        values = [formData.price.numberFrom, formData.price.numberTo]
        const obj = {
            values
        }
      
    }
    handleSubmit = (e) => {
        const obj = this.checkChange()
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // const obj = this.checkChange();
                // const { onChange } = this.props;
                // onChange && onChange(obj);
                this.returnAfter(values)
            }
        });
    }
    returnAfter = (values)=>{
        let {numberFrom,numberTo} = values.price;
        this.setState({
            numberFromDefault:numberFrom,
            numberToDefault:numberTo,
            isUpdate:true
        },()=>{
            this.setState({
                isUpdate:false
            })
        })
    }
    render() {
        const { form } = this.props;
        const {numberFromDefault,numberToDefault} = this.state;
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
                <Form layout="inline">
                    <FormItem label="Price">
                        {getFieldDecorator('price', {
                            initialValue: { numberFrom: numberFromDefault, numberTo: numberToDefault },
                            rules: [{ validator: this.checkItems }],
                        })(<InputGroup dunk={this.state}/>)}
                    </FormItem>
                    <Button type="primary" onClick={this.handleSubmit}>确定</Button>
                </Form>
            </div>
        )
    }
}
App = createForm()(App);

ReactDOM.render(<App />, document.getElementById("react-content"));

