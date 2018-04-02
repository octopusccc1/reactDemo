import React from 'react';

export default class Checkbox extends React.Component {
    findState(e) {
        console.log(e.target.checked)
    }
    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.findState.bind(this)} />adsda
            </div>
        )
    }

}