const { Router } = require ('express');
const DevControllers= require('./controllers/DevControllers');
const Seachcontrollers= require('./controllers/Seachcontrollers');


const routes = Router();

routes.post('/devs', DevControllers.store);
routes.get('/devs', DevControllers.index);

routes.get('/search', Seachcontrollers.index);


module.exports = routes;