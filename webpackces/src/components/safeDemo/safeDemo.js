import React from 'react';

export default class safeDemo extends React.Component {
    findState(e) {
      
    }
    isArray(value) {//验证是否为数组
        return Object.prototype.toString.call(value) == "[object Array]"
    }
    isFunction(value) {//是否方法
        return Object.prototype.toString.call(value) == "[object Function]"
    }
    isRegExp(value) {//是否正则
        return Object.prototype.toString.call(value) == "[object RegExp]"
    }
    isNativeJson(value) {//检测是否是原生的json
        console.log(Object.prototype.toString.call(value))
        var isNativeJSON = window.JSON && Object.prototype.toString.call(value) == "[object JSON]"
        return isNativeJSON
    }


    render() {
        return (
            <div>
                <input type="button" onClick={this.findState.bind(this)} value="点我 " />adsda
            </div>
        )
    }

}