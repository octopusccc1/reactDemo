import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.babel';

const bundler = webpack(webpackConfig);
browserSync({
    server: {
        baseDir: 'build'
    },
    middleware: [
        webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            state: { colors: true }
        }
        ),
        webpackHotMiddleware(bundler)
    ],
    files:[
        'build/*.html'
    ]

})