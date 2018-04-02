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
const actions = {
    increase: () => ({ type: 'INCREASE' }),
    decrease: () => ({ type: 'DECREASE' })
}
let store = createStore(todoApp);
const mock ={
    checked:false
}
class App extends React.Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }
    constructor(props){
        super(props);
        this.state={themeColor:'red'
        }
    }
    getChildContext() {
        return{
            themeColor:this.state.themeColor
        }
    }
    render() {
        return (
            <div>
                <ContextDemo />
                <SafeDemo />
                <ModelDemo eventChecked={mock.checked}/>
                <Provider store={store}>
                    <ReactReduxDemo />
                </Provider>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("react-content"));

