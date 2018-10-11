const Mock = require('mockjs');

import {
  api1,
  api2
} from './mock';


Mock.mock('/news/index', 'get', api1);
Mock.mock('/news/index2', 'get', api2);