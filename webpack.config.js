const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    app: './index.jsx',
  },
  context: `${__dirname}/static_src`,
  output: {
    path: `${__dirname}/static/build`,
    filename: NODE_ENV === 'development' ? '[name].js' : '[name]-[hash].js',
    publicPath: '/static/build/',
  },

  optimization: {
    minimize: NODE_ENV !== 'development',
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: `${__dirname}/static_src`,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded,modules: true',
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
        loader: 'url-loader?limit=4096&name=[path][name].[ext]',
      },
    ],
  },

  resolve: {
    modules: [`${__dirname}/static_src`, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },

  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 100,
  },

  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,
};