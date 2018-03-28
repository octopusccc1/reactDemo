import React from 'react';

//const url = 'https://www.baidu.com/'
const url = false;
class UrlDemo extends React.Component{
    constructor(props){
        super(props);
    }
    changeUrl(){
        if(url){
            location.assign(url)
        }else{
            import('./alert')
        }
        
    }
    render(){
        console.log(process.env.NODE_ENV)
        return(
            <div>
                <button onClick={this.changeUrl}>adss</button>
            </div>
        )
    }
}

export default UrlDemo;