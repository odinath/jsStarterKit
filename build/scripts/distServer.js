import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

// enabling gzip compression
app.use(compression());
app.use(express.static('dist'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.get('/users', function(request, response) {
    // Hard coding for simplicity. Pretend this hit a real database
    response.json([
        { "id": 1, "firstName": "Odin", "lastName": "Marole", "email": "odin.marole@production.com" }
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
