import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

class contextDemo extends React.Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }
    render() {
        console.log(this.context.themeColor)
        return (
            <div>
                <div style={{ color: this.context.themeColor }}>
                    asddsadasdasd
                </div>
                
            </div>
        )
    }
}

export default contextDemo;