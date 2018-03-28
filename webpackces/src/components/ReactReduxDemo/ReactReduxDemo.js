import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
const mapStateToProps = (state,ownProps) => {
    return{
        count:state.count
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return Object.assign({},
        bindActionCreators(actions,dispatch)
    )
}
const actions = {
    increase: () => ({ type: 'INCREASE' }),
    decrease: () => ({ type: 'DECREASE' })
}
class ReactReduxDemo extends React.Component{
    render(){
        const {count,increase,decrease} = this.props;
        return(
            <div>
                <div>{this.props.count}</div>
                <button onClick={increase}>增加</button>
                <button onClick ={decrease}>减少</button>
                
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxDemo);