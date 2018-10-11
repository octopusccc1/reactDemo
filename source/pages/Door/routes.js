import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Door from './view';
import BBS from './components/BBS';
import Blog from './components/Blog/';
import Games from './components/Games/';
import Home from './components/Home';
import Technology from './components/Technology/';
import Ceshi from './components/Blog/demo/'
import { context } from '../../utils/context';
const requireContext = context();
const requireMock = requireContext.keys().map(it => it.replace(/\.\/|\/index\.js/g, ''));
export default (
	<Route path="door/" component={Door}>
		<IndexRoute component={Home} />
		<Route path="BBS/" component={BBS}></Route>
		<Route path="blog/" component={Blog}>
		</Route>
		<Route path="games/" component={Games}></Route>
		<Route path="home/" component={Home}></Route>
		<Route path="technology/" component={Technology}>
		</Route>
		{
			requireMock.map((it, i) => <Route path={`${it}/`} key={i} component={requireContext(`./${it}/index.js`).default.component} />)
		}
		<Route path="blogPage/:demo" component={Ceshi}/>
	</Route>
);
