const express = require('express');
const router = express.Router();
const lawyerController = require('../controllers/lawyerController');

// POST /api/lawyers/  -> existing createLawyer
router.post('/', lawyerController.createLawyer);

// New: GET /api/lawyers/ -> list all lawyers
router.get('/', lawyerController.getLawyers);

// ...existing code for put, delete if needed...

module.exports = router;