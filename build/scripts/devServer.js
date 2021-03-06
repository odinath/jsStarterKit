import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../../src/index.html'));
});

app.get('/users', function(request, response) {
    // Hard coding for simplicity. Pretend this hit a real database
    response.json([
        { "id": 1, "firstName": "Odin", "lastName": "Marole", "email": "odin.marole@development.com" }
    ]);
    // response.sendFile(path.join(__dirname, '../../data/mockData.json'));
});

app.listen(port, function(errorMessage){
    if (errorMessage) {
        console.log(errorMessage); // eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});
