const usersController = require('../controllers/usersController');

module.exports = (router) => {
    router.register("GET", "/api/users", usersController.getAll);
    router.register("GET", "/api/users/:id", usersController.getById);
    router.register("POST", "/api/users", usersController.create);
    router.register("PUT", "/api/users/:id", usersController.update);
    router.register("DELETE", "/api/users/:id", usersController.remove);
};