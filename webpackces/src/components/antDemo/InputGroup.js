import React from 'react';
import {Input,Button} from 'antd';
class InputGroup extends React.Component{
    constructor(props){
        super(props);
        const value = this.props.value || {}
        this.state = {
            numberFrom:value.numberFrom||0,
            numberTo:value.numberTo||0
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if('numberFrom' in nextProps){
            const numberFrom =nextProps.numberFrom;
            this.setState(numberFrom)
        }
       if('numberTo' in nextProps){
        const numberTo =nextProps.numberTo;
        this.setState(numberTo)
       }
    }
    handleChangeFrom = (e) => {
      const numberFrom = parseInt(e.target.value)
      if(isNaN(numberFrom)){
        return
      }
      
      if(!('numberFrom'in this.props)){
        this.setState({numberFrom})
      }
     
     this.triggerChange({numberFrom})
    }
    handleChangeTo = (e) => {
        const numberTo = parseInt(e.target.value)
        if(isNaN(numberTo)){
            return
          }
          if(!('numberTo'in this.props)){
            this.setState({numberTo})
          }
        
       this.triggerChange({numberTo})
         
     }
     triggerChange=(changeValue) =>{
         
         const {onChange}=this.props.onChange;
         if(onChange){
            onChange(Object.assign({},this.state,changeValue))
         }
     }
    render(){
        const {numberFrom,numberTo} = this.state
        return(
            <div>
                <Input onChange={this.handleChangeFrom} value={numberFrom}/>
                <span>~</span>
                <Input onChange={this.handleChangeTo } value={numberTo}/>
                
            </div>
        )
    }
}
export default InputGroup;