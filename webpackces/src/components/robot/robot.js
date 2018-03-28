import React from 'react';
import ReactDOM from 'react-dom';
class Robot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meg: '',
            respon: [],
            megArray: []
        }
    }
    handleData = (e) => {
        this.setState({
            meg: e.target.value
        })
    }
    sendMessage = () => {
        let message = this.state.meg;
        if (message === '') {
            alert('不能发送空白消息哦');
        } else {
            this.setState({
                megArray: [...this.state.megArray, message]
            })
        }
        fetch('http://www.tuling123.com/openapi/api?key=d2bd31c6d429476382dd0390097cf367&info=' + message, {
            methods: 'POST',
            type: 'cors'
        })
            .then((res) => {
                return res.json()
            })
            .then((detail) => {
                return (this.setState({
                    respon: [...this.state.respon, detail.text]
                }, () => {
                    let el = ReactDOM.findDOMNode(this.refs.msgList);
                    el.scrollTop = el.scrollHeight;
                }))
            })
        this.state.meg = '';
    }
    render() {
        let meg = this.state.meg;
        let megArray = this.state.megArray;
        let respon = this.state.respon;
        return (
            <div className='content'>
                <div className='msg-list' ref='msgList'>
                    {
                        megArray.map((elem, index) => (
                            <div className='container' key={index}>
                                <div className='message'>{elem}</div>
                                <div className='response'>{respon[index]}</div>
                            </div>
                        ))
                    }
                    <div className='fixedBottom'>
                        <input className='input' value={meg} onChange={this.handleData.bind(this)} />
                        <button className='button' onClick={this.sendMessage.bind(this)}>发送</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Robot;