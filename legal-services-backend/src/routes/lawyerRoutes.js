const express = require('express');
const LawyerController = require('../controllers/lawyerController');

const router = express.Router();
const lawyerController = new LawyerController();

function setLawyerRoutes(app) {
    router.post('/lawyers', lawyerController.createLawyer.bind(lawyerController));
    router.get('/lawyers/:id', lawyerController.getLawyer.bind(lawyerController));
    router.put('/lawyers/:id', lawyerController.updateLawyer.bind(lawyerController));
    router.delete('/lawyers/:id', lawyerController.deleteLawyer.bind(lawyerController));

    app.use('/api', router);
}

module.exports = setLawyerRoutes;