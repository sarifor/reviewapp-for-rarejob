const path = require('path');

module.exports = {
    mode: 'development',    
    entry: {
      comment: ['./src/client/js/comment.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'assets/js'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        },
      ],
    },    
  };