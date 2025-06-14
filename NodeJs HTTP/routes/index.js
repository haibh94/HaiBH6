const userRoutes = require('./users');
const productRoutes = require('./products');

module.exports = (router) => {
    userRoutes(router);
    productRoutes(router);
};