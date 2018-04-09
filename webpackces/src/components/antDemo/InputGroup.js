import React from 'react';
import { Input, Button } from 'antd';
import './index.less'
class InputGroup extends React.Component {
    constructor(props) {
        super(props);
        const value = this.props.value || {}
        
        this.state = {
            numberFrom: value.numberFrom || '',
            numberTo: value.numberTo || ''
        }
    }
    componentWillUpdate(){
        const {dunk} = this.props;
        const isUpdate = dunk.isUpdate;
        if(isUpdate){
            this.setState({
                numberFrom:dunk.numberFromDefault,
                numberTo:dunk.numberToDefault
            })
        }
    }
    handleChangeFrom = (e) => {
        const numberFrom = e.target.value
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]{0,2})?$/;
        if (reg.test(numberFrom) || numberFrom === '' || numberFrom === '-') {
            this.setState({ numberFrom });
            this.triggerChange({ numberFrom });
        }
       
    }
    handleChangeTo = (e) => {
        const numberTo = e.target.value
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]{0,2})?$/;
        if (reg.test(numberTo) || numberTo === '' || numberTo === '-') {
            this.setState({ numberTo });
            this.triggerChange({ numberTo });
        }

    }
    triggerChange = (changeValue) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(Object.assign({}, this.state, changeValue))
        }
    }
    render() {
        const { numberFrom, numberTo } = this.state
        return (
            <div>
                <Input onChange={this.handleChangeFrom} value={numberFrom} />
                <span>~</span>
                <Input onChange={this.handleChangeTo} value={numberTo} />

            </div>
        )
    }
}
export default InputGroup;