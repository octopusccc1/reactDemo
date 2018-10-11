import React, { Component } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import '../../assets/common/mixin.less';
import './Door.less';
const { Header, Content, Footer } = Layout;
const MenuList = [
	{ name: '首页', url: '/door/home/' },
	{ name: '技术栈', url: '/door/technology/' },
	{ name: '博客', url: '/door/blog/' },
	{ name: '游戏', url: '/door/games/' },
	{ name: '论坛', url: '/door/BBS/' },
]
class Door extends Component {
	static propTypes = {
		setContent: PropTypes.func,
		doorReducer: PropTypes.object,
	};
	constructor(props) {
		super(props);
	}
	handleContentTypes = (e) => {
		browserHistory.push(e.key);
	}
	render() {
		const { routing } = this.props;
		const { pathname } = routing.locationBeforeTransitions;
		let surePathname;
		//是否是blogPage页，指向blog
		if (/^\/door\/blogPage\//.test(pathname)) {
			surePathname = MenuList[2].url
		//是否是door页，指向home
		} else if (/^\/door\/$/.test(pathname)) {
			surePathname = MenuList[0].url
		//是否是demo页，指向技术栈
		} else if (pathname === MenuList[1].url || pathname.indexOf('Demo') === 6) {
			surePathname = MenuList[1].url
		} else {
			surePathname = pathname
		}
		return (
			<div className="g-door" >
				<Layout>
					<Header className="g-door-header">
						<Row type="flex" justify="center">
							<Col span={16}>
								<Menu
									theme="light"
									mode="horizontal"
									defaultSelectedKeys={[surePathname]}
									className="g-door-nav"
									onClick={this.handleContentTypes}
								>
									{
										MenuList.map(
											it =>
												<Menu.Item key={it.url} >{it.name}</Menu.Item>
										)}
								</Menu>
							</Col>
						</Row>
					</Header>
					<Content className="g-door-content">
						<Row>
							<Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={3}>
								<div className="g-door-sider">
									侧边
									</div>
							</Col>
							<Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={18}>
								<div className="g-door-center">
									{this.props.children}
								</div>
							</Col>
							<Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={3}>
								<div className="g-door-sider">
								</div>
							</Col>
						</Row>
					</Content>
					<Footer className="g-door-footer">
						create by octopusccc1@github
					</Footer>
				</Layout>
			</div>
		)
	}
}

export default Door;