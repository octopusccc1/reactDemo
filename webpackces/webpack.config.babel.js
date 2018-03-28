import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
//import lessToJs from 'less-vars-to-js';
//import fs from 'fs';
const GLOBALS = {
    'process.env.NODE_ENV':JSON.stringify('develoment')
};
const mockPath = [];
const getHtmlWebpackPlugin = () => {
    const htmlWebpackPlugin = mockPath;
    htmlWebpackPlugin.push(
        new HtmlWebpackPlugin({
            filename:'demo.html',
            template:`${__dirname}/source/demo.html`,
            chunks:['bundle']
        })
    )
    return htmlWebpackPlugin;
}
export default {
    entry:{
        bundle:'./src/index.js'
    },
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath:'/build/'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins:[
        
        new webpack.LoaderOptionsPlugin({
            options:{
                babel: {
                    presets: ["es2015", "react", "stage-2"]
                }
            }
        }),
        new webpack.DefinePlugin(GLOBALS)
    ].concat(getHtmlWebpackPlugin())
}