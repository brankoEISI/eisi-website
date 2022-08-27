const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        use: [
            'css-modules-typescript-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
        ]
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash:8]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
