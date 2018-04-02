import React from 'react';
import Checkbox from './Checkbox';
export default class CheckboxDemo extends React.Component{
    findState(e){
        console.log(e.target)
    }
    render(){
        return(
            <Checkbox onChange={this.findState.bind(this)}/>
        )
    }
}