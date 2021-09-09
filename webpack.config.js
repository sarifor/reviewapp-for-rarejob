const path = require('path');

module.exports = {
    mode: 'development',    
    entry: {
      comment: ['./src/client/js/comment.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'assets'),
    },
  };