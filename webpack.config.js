const HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Generator } = require("webpack");
const path = require('path'); 





module.exports = {
  mode: "development",
  entry: {
    js: "./src/index.js",
    // react: "./src/index_react.js",
    // ts: "./src/index_ts.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: false,
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        // use: [MiniCssExtractPlugin.loader,"css-loader"]
        use: [
          MiniCssExtractPlugin.loader, // Cambiado a siempre usar el plugin para desarrollo
          'css-loader'
        ],

  
      },
      
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: 'asset/resource',
          generator: {
              filename: 'assets/[name].[hash].[ext]'
          },
          
          
      },
      
      {
        test: /\.(woff|ttf)$/i, 
        type: 'asset/resource', 
        generator: {
          filename: 'assets/[name].[hash][ext]', // Asegúrate de usar [ext] para la extensión correcta
        },
      }
      
    ],
  },
  
  
  

 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["js"],
      hash: true,
      inject: "body",
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "./react.html",
    //   chunks: ["react"],
    //   hash: true,
    //   inject: "body",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "./ts.html",
    //   chunks: ["ts"],
    //   hash: true,
    //   inject: "body",
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  ],
 
}
