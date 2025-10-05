const express = require('express');
const ClientController = require('../controllers/clientController');

const router = express.Router();
const clientController = new ClientController();

function setClientRoutes(app) {
    router.post('/clients', clientController.createClient.bind(clientController));
    router.get('/clients/:id', clientController.getClient.bind(clientController));
    router.put('/clients/:id', clientController.updateClient.bind(clientController));
    router.delete('/clients/:id', clientController.deleteClient.bind(clientController));

    app.use('/api', router);
}

module.exports = setClientRoutes;