if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod');
  } else {
    module.exports = require('./Root.dev');
  }
  
var a ='随便写点什么';
  