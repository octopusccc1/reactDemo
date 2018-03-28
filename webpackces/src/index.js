import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
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

const actions = {
    increase: () => ({ type: 'INCREASE' }),
    decrease: () => ({ type: 'DECREASE' })
}
let store = createStore(todoApp);
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReactReduxDemo />
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("react-content"));

