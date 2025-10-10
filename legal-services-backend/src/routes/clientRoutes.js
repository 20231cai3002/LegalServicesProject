const express = require('express');
const ClientController = require('../controllers/clientController');
const router = express.Router();
const clientController = new ClientController();

// POST /api/clients (signup)
router.post('/', clientController.createClient.bind(clientController));
// ...existing code for get, put, delete if needed...

module.exports = router;