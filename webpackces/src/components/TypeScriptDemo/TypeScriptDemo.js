import React from 'react';
import * as echarts from 'echarts';
import _ from 'lodash';
// const option = {
//     title:{
//         text: 'EEe'
//     },
//     tooltip:{

//     },
//     legend:{
//         data:['销量']
//     },
//     xAxis:{
//         data:["衬衫","羊毛衫","雪纺衫","裤子"]
//     },
//     yAxis:{

//     },
//     series:[{
//         name:'销量',
//         type:'bar',
//         data:[5,20,36,10]
//     }]
// }
const option= {
    series:[
        {
            name:'ssa',
            type:'pie',
            radius:'55%',
            data:[
                {value:235,name:'adssadas1'},
                {value:432,name:'adssadas2'},
                {value:324,name:'adssadas3'},
                {value:235,name:'adssadas4'},
                {value:236,name:'adssadas5'}
            ]
        }
    ]
}
export default class TypeScriptDemo extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.chart = echarts.init(this.node)
        this.chart.setOption(option);
        this.bindToWindowResize();
    }
    componentWillUnmount(){
        this.chart.dispose();
        this.unbindToWindowResize();
    }
    greeter = (person:string) =>{
        return "Hello," + person;
    }
    bindToWindowResize = () =>{
        window.addEventListener('resize',this.handleWindowResize);
    }
    unbindToWindowResize = () =>{
        window.removeEventListener('resize',this.handleWindowResize)
    }
    handleWindowResize = _.debounce(() => {
        this.chart && this.chart.resize()
    },100) 
    render(){
        let user = "Jane User"
        return(
            <div ref={node => this.node = node} style={{ width:'100%',height:'100%'}}>
                
            </div>
        )
    }
}