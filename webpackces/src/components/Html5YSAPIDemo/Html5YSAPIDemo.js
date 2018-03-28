import React from 'react';

class Html5YSAPIDemo extends React.Component{
    componentDidMount(){
        this.refs.user.classList.toggle('user3')
    }
    render(){
        
        return(
            <div className="user" ref="user">
            111
            </div>
        )
    }
}
export default Html5YSAPIDemo;