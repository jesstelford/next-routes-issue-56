const routes = require('next-routes')();

routes.add('about', '/about');
routes.add('user', '/:userId');

module.exports = routes;
