import React, { Component } from 'react';
import { Col } from 'antd';
import { request } from '../../../../utils/ajax';
import BlogItem from './components/BlogItem/';
import './Blog.less';
import '../../../../../mock';
const mock = [
	{ title: '为什么为什么为什么为什么天上有鸟?', id: '1', imgList: ['http://down.52pk.com/uploads/161024/5019_173035_1_lit.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=d5643ab2cf36ec1cb2b79ada70087b5e&imgtype=0&src=http%3A%2F%2Fimg.cbigame.com%2Fupload%2Fimages%2F2016%2F1107%2F1478514522193617%40800_810.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=acf65860a8c5375aecbdb68dd1fbc02d&imgtype=0&src=http%3A%2F%2Fimg.18183.duoku.com%2Fuploads%2Fallimg%2F161005%2F97-161005191Q2.jpg'] },
	{ title: '水里为什么为什么有鱼？', id: '2', imgList: ['http://down.52pk.com/uploads/161024/5019_173035_1_lit.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=d5643ab2cf36ec1cb2b79ada70087b5e&imgtype=0&src=http%3A%2F%2Fimg.cbigame.com%2Fupload%2Fimages%2F2016%2F1107%2F1478514522193617%40800_810.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=acf65860a8c5375aecbdb68dd1fbc02d&imgtype=0&src=http%3A%2F%2Fimg.18183.duoku.com%2Fuploads%2Fallimg%2F161005%2F97-161005191Q2.jpg'] },
	{ title: 'zz', id: '3', imgList: ['http://down.52pk.com/uploads/161024/5019_173035_1_lit.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=d5643ab2cf36ec1cb2b79ada70087b5e&imgtype=0&src=http%3A%2F%2Fimg.cbigame.com%2Fupload%2Fimages%2F2016%2F1107%2F1478514522193617%40800_810.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=acf65860a8c5375aecbdb68dd1fbc02d&imgtype=0&src=http%3A%2F%2Fimg.18183.duoku.com%2Fuploads%2Fallimg%2F161005%2F97-161005191Q2.jpg'] },
	{ title: 'zz', id: '4', imgList: ['http://down.52pk.com/uploads/161024/5019_173035_1_lit.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=d5643ab2cf36ec1cb2b79ada70087b5e&imgtype=0&src=http%3A%2F%2Fimg.cbigame.com%2Fupload%2Fimages%2F2016%2F1107%2F1478514522193617%40800_810.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=acf65860a8c5375aecbdb68dd1fbc02d&imgtype=0&src=http%3A%2F%2Fimg.18183.duoku.com%2Fuploads%2Fallimg%2F161005%2F97-161005191Q2.jpg'] },
	{ title: 'zz', id: '5', imgList: ['http://down.52pk.com/uploads/161024/5019_173035_1_lit.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=d5643ab2cf36ec1cb2b79ada70087b5e&imgtype=0&src=http%3A%2F%2Fimg.cbigame.com%2Fupload%2Fimages%2F2016%2F1107%2F1478514522193617%40800_810.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=acf65860a8c5375aecbdb68dd1fbc02d&imgtype=0&src=http%3A%2F%2Fimg.18183.duoku.com%2Fuploads%2Fallimg%2F161005%2F97-161005191Q2.jpg'] },
	{ title: 'zz', id: '6', imgList: ['http://down.52pk.com/uploads/161024/5019_173035_1_lit.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=d5643ab2cf36ec1cb2b79ada70087b5e&imgtype=0&src=http%3A%2F%2Fimg.cbigame.com%2Fupload%2Fimages%2F2016%2F1107%2F1478514522193617%40800_810.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=acf65860a8c5375aecbdb68dd1fbc02d&imgtype=0&src=http%3A%2F%2Fimg.18183.duoku.com%2Fuploads%2Fallimg%2F161005%2F97-161005191Q2.jpg'] },
	{ title: 'zz', id: '7', imgList: ['http://down.52pk.com/uploads/161024/5019_173035_1_lit.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=d5643ab2cf36ec1cb2b79ada70087b5e&imgtype=0&src=http%3A%2F%2Fimg.cbigame.com%2Fupload%2Fimages%2F2016%2F1107%2F1478514522193617%40800_810.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531758175682&di=acf65860a8c5375aecbdb68dd1fbc02d&imgtype=0&src=http%3A%2F%2Fimg.18183.duoku.com%2Fuploads%2Fallimg%2F161005%2F97-161005191Q2.jpg'] }
]
class Blog extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		request({
			url: '/news/index2',
			method: 'get',
		}).then(
			it => {
				console.log(it)
			}
		)
	}
	render() {
		return (
			<div className="g-blog">
				{
					mock.map(it =>
						<Col span={12} xxl={8} key={it.id}>
							<BlogItem mock={it} />
						</Col>
					)
				}
			</div>
		)
	}
}

export default Blog;