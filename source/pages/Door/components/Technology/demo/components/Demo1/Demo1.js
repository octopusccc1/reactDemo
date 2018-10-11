import React, { Component } from 'react';
import classNames from 'classnames';
import TestItem from './TestItem';
import './TestItem.less';
const mock = [{ name: 'a' }, { name: 'b' }, { name: 'a' }, { name: 'b' }];
class Demo1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStores: [],
		}
	}
	componentDidMount() {
		document.onselectstart = function (event) {
			return false;
		}
		document.addEventListener('keydown', this.handleDownShift);
		document.addEventListener('keyup', this.handleUpShift)
	}
	handleDownShift = (e) => {
		const { setShiftType } = this.props;
		if (e.key === 'Shift') {
			setShiftType(true);
		}
	}
	handleUpShift = (e) => {
		const { setShiftType } = this.props;
		if (e.key === 'Shift') {
			setShiftType(false);
		}
	}
	cc = (i, e) => {
		const { technologyReducer, } = this.props;
		const { shiftType } = technologyReducer;
		const newSelection = e.target;//拿到点击的具体一项
		let newSelectionArray;//新建一个空数组
		if (shiftType) {
			if (this.state.selectedStores.indexOf(newSelection) > -1) {
				newSelectionArray = this.state.selectedStores.filter((s) => s !== newSelection)
			} else {
				//不是的话就加入新选择数组
				newSelectionArray = [...this.state.selectedStores, newSelection];
			}
		} else {
			newSelectionArray = [newSelection];
		}
		newSelectionArray.map(it=>it.className='active');
		this.setState({
			// 新选择数组统一改为选中状态
			selectedStores: newSelectionArray
		});
	}
	render() {
		return (
			<div className='Demo1'>
				{
					mock.map((r, i) => {
						return <TestItem
							onClick={this.cc.bind(this, i)}
							key={i}
						/>
					}
					)
				}
			</div>
		)
	}
}

export default Demo1;