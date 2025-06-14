const url = require('url');
const routes = require('../routes');

class Router {
    constructor() {
        this.routes = {};
    }

    register(method, path, handler) {
        if (!this.routes[method]) this.routes[method] = [];
        this.routes[method].push({ path, handler });
    }

    async handle(req, res) {
        const parsedUrl = url.parse(req.url, true);
        req.query = parsedUrl.query;
        const methodRoutes = this.routes[req.method] || [];
        for (const route of methodRoutes) {
            if (parsedUrl.pathname === route.path) {
                return route.handler(req, res);
            }
        }
        res.writeHead(404);
        res.end("Not Found");
    }
}

const router = new Router();
routes(router);
module.exports = router;