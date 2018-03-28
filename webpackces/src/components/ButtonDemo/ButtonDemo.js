import React from 'react';

class ButtonDemo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {options} = this.props;
        return(
            <div>
                {
                    options.map(el => {
                        let text;
                        const elType = typeof el;
                        if(elType === 'string' || elType === 'number'){
                            text = el;
                        } else if (elType ==='object'&& el !== null) {
                            text = el.text;
                        }
                        return (
                            <span key={text}>
                                <button>
                                 {text}
                                </button>
                                
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}
export default ButtonDemo;