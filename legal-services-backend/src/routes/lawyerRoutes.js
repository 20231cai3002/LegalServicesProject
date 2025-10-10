const express = require('express');
const LawyerController = require('../controllers/lawyerController');
const router = express.Router();
const lawyerController = new LawyerController();

// POST /api/lawyers (signup)
router.post('/', lawyerController.createLawyer.bind(lawyerController));
// ...existing code for get, put, delete if needed...

module.exports = router;