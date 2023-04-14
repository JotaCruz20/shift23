const webpack = require('webpack');
const path = require('path');

// Styleguidist (v11.2.0) doesn't display components with create ract app 5
// This webpackConfig is a workaround for that
// For more information see https://github.com/styleguidist/react-styleguidist/issues/1910#issuecomment-1013763698

const webpackConfig = {
  module: {
    rules: [
      {
        test: /.\.md$/, // look for .md files in component folder
        type: 'javascript/auto', // Tell webpack to interpret the result from examples-loader as JavaScript
      },
      {
        test: /\.tsx?$/,
         use: [{
                  loader: 'ts-loader',
                  options: {
                      configFile: "tsconfig.json" // important to have "noEmit": false in the config
                  }
                }],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.scss$/,
         use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            {
              loader: "sass-resources-loader",
              options: {
                resources: [
                  path.join(__dirname, 'src/assets/css/tailwind.scss'), 
                ],
              },
            },
          ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    // Rewrites the absolute paths to those two files into relative paths
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
      'react-styleguidist/lib/loaders/utils/client/requireInRuntime'
    ),
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
      'react-styleguidist/lib/loaders/utils/client/evalInContext'
    ),
  ],
};



module.exports = {
    webpackConfig,
    components: 'src/components/**/*.{jsx,tsx}',
    styleguideComponents: {
      Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
    },
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    require: [
      path.join(__dirname, './dist/styles.css') // for styleguidist to work with tailwind we have to reference compiled css here,
    ],
    sections: [
      {
        name: 'Button',
        components: 'src/components/Button/*.tsx',
      },
      {
        name: 'PopUp',
        components: 'src/components/PopUp/*.tsx',
      },
      {
        name: 'FAB',
        components: 'src/components/FAB/*.tsx',
      },
      {
        name: 'DashboardCard',
        components: 'src/components/DashboardCard/*.tsx',
      },
      {
        name: 'SideBar',
        components: 'src/components/SideBar/*.tsx',
      },
      {
        name: 'ToolBar',
        components: 'src/components/ToolBar/*.tsx',
      },
    ],
};