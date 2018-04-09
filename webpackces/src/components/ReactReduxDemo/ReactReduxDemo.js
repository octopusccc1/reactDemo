import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import './test.less';
const mapStateToProps = (state,ownProps) => {
    return{
        count:state.count,
        themeColor:state.themeColor
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.assign({},
        bindActionCreators(actions,dispatch)
    )
}
const actions = {
    increase: () => ({ type: 'INCREASE' }),
    decrease: () => ({ type: 'DECREASE' }),
    changeColor: () => ({ type: 'CHANGE_COLOR' }),
    
}
class ReactReduxDemo extends React.Component{
    render(){
        const {count,increase,decrease,changeColor,themeColor} = this.props;
        return(
            <div>
                <div className="aaa">less</div>
                <div  style={{color:themeColor}}>{count}</div>
                <button onClick={increase}>增加</button>
                <button onClick ={decrease}>减少</button>
                <button onClick ={changeColor}>改变颜色</button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxDemo);