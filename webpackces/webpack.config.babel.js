import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {travelDir ,getEntireName } from './tools/helps';
//import lessToJs from 'less-vars-to-js';
//import fs from 'fs';
const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('develoment')
};
const mockPath = [];
const viewsPath = '/views/';
const dataPath ='ftl-mocks';
travelDir('.'+viewsPath,mockPath)
const getHtmlWebpackPlugin = () => {
    const htmlWebpackPlugin = mockPath
    // .filter((pt)=>{
    //     return pt.indexOf(`${path.sep}common${path.sep}`)===-1;
    // })
    .map((pt)=>{
        const chunkName = getEntireName(pt)
        return new HtmlWebpackPlugin({
            filename:chunkName +'.html',
            template:pt,
            chunks:[chunkName]
        })
    })
    htmlWebpackPlugin.push(
        new HtmlWebpackPlugin({
            filename: 'demo.html',
            template: `${__dirname}/source/demo.html`,
            chunks: ['bundle']
        })
    )
    return htmlWebpackPlugin;
}
export default {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader?'
                }, {
                    loader: 'less-loader?'
                }
                ]
            },
            {
                test: /\.ftl$/,
                use: [{
                    loader: 'ftl-loader',
                    options:{
                        dataPath:dataPath,
                        templatePath:viewsPath
                    }
                }
                ]
            }
        ]

    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                babel: {
                    presets: ["es2015", "react", "stage-2"]
                }
            }
        }),
        new webpack.DefinePlugin(GLOBALS)
    ].concat(getHtmlWebpackPlugin())
}