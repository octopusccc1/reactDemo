import React from 'react';
import { Checkbox, Icon, message } from 'antd';
const propsLoadingState = {
    NONE: 0,
    LOADING: 1,
    LOADED: 2
}
class modelDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propsState: propsLoadingState.NONE,
            collapse: true,
            collapsible: true
        }
    }
    toggleCollapse() {
        const { collapse } = this.state;
        this.setState({
            collapse: !collapse
        })
    }
    handleEventItemClick = evt => {
        const { propsState, collapsible } = this.state;
        switch (propsState) {
            case propsLoadingState.NONE:
                collapsible && this.toggleCollapse();
                break;
        }
    }
    render() {
        const { eventChecked } = this.props;
        const {propsState,collapse,collapsible} = this.state;
        const loading = propsState == propsLoadingState.LOADING
        const iconType = loading ? 'loading' : collapse ? 'right' : 'down';
        console.log(eventChecked)
        return (
            <div onClick ={this.handleEventItemClick}>
                <Checkbox checked={eventChecked} onClick={this.handleEventItemClick} />
                <div>dsasdadad</div>
                {iconType}
            </div>
        )
    }
}
export default modelDemo;