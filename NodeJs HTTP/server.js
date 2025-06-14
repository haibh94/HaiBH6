const http = require('http');
const router = require('./router');
const { parseBody } = require('./utils/bodyParser');

const server = http.createServer(async (req, res) => {
    console.log(`${req.method} ${req.url}`);
    await parseBody(req);
    await router.handle(req, res);
});

server.listen(3000, () => {
    console.log('HTTP Server listening on port 3000');
});
