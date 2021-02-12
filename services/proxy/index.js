const proxy = require('express-http-proxy');
const express = require('express');
const cfg = require('../../pkg/config');
const path = require('path');

const app = express();

app.use('/api/v1/auth', proxy(
    'http://localhost:10001',
    {proxyReqPathResolver: (req) => `http://localhost:10001/api/v1/auth${req.url}`}
));

app.use('/api/v1/recipe', proxy(
    'http://localhost:10002',
    {proxyReqPathResolver: (req) => `http://localhost:10002/api/v1/recipe${req.url}`}
));

app.use('/api/v1/storage', proxy(
    'http://localhost:10003',
    {proxyReqPathResolver: (req) => `http://localhost:10003/api/v1/storage${req.url}`}
));

app.use('/', express.static(path.join(__dirname, '../../public/build')));


const PORT = process.env.PORT || cfg.get('services').proxy.port

app.listen(PORT, err => {
    if(err){
        console.error('Could not start server:', err);
    }
    console.log(`Server successfully started on port ${PORT}`);
});