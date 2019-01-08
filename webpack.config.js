module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    // filename: 'server.js'
  }//,
  // module: {
  //   loaders: [{
  //     exclude: /node_modules/,
  //     loader: 'babel'
  //   }]
  // },
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './'
  // }
};
