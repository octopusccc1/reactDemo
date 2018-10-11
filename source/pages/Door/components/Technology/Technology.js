import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { browserHistory } from 'react-router';
import CardCreate from './components/CardCreate'
import PropTypes from 'prop-types';
import { context } from '../../../../utils/context';
const requireContext = context();
let mapMock = requireContext.keys().map(it => it.replace(/\.\/|\/index\.js/g, ''));
//3个为一组
const groupNew = (arr) => {
	let groupArr = [];
	for (let i = 0, len = arr.length; i < len; i += 3) {
		groupArr.push(arr.slice(i, i + 3));
	}
	return groupArr;
};
let newMapMock = groupNew(mapMock);
class Technology extends Component {
	constructor(props) {
		super(props);
	}
	handleDemo = (r) => {
		browserHistory.push(`/door/${r}/`);
	}
	render() {
		return (
			<div>
				<div style={{ padding: '30px' }}>
					{
						newMapMock.map((it, i) =>
							<Row gutter={16} key={i}>
								{
									it.map((r, index) =>
										<Col span={8} key={index}  style={{marginBottom:'30px'}} onClick={this.handleDemo.bind(this, r)}>
											<CardCreate title={requireContext(`./${r}/index.js`).default.name}>
												{r}
											</CardCreate>
										</Col>)
								}
							</Row>)
					}
				</div>
			</div>
		)
	}
}

export default Technology;