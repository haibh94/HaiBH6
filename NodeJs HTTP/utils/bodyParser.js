exports.parseBody = async (req) => {
    if (['POST', 'PUT'].includes(req.method)) {
        return new Promise((resolve) => {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
                try {
                    req.body = JSON.parse(body);
                } catch {
                    req.body = {};
                }
                resolve();
            });
        });
    }
};