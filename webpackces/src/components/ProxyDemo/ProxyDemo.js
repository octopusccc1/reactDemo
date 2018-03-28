import React from 'react';


class ProxyDemo extends React.Component {

    render() {
        let enginner = { name: 'Joe Sixpack', salary: 50 };
        let interceptor = {
            set(receiver, property, value) {
                console.log(property, 'is changed to', value);
                receiver[property] = value;
            }
        }
        enginner = new Proxy(enginner, interceptor);
        enginner.salary = 70;
        return (
            <div>

            </div>
        )
    }
}
export default ProxyDemo;