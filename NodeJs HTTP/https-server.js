const https = require('https');
const fs = require('fs');
const router = require('./router');
const { parseBody } = require('./utils/bodyParser');

const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

const server = https.createServer(options, async (req, res) => {
    console.log(`${req.method} ${req.url}`);
    await parseBody(req);
    await router.handle(req, res);
});

server.listen(3443, () => {
    console.log('HTTPS Server listening on port 3443');
});
