class LawyerController {
    async createLawyer(req, res) {
        try {
            const { name, email, specialization, phone } = req.body;
            // Email validation for lawyers
            if (!email || !email.endsWith('@kalawer.com')) {
                return res.status(400).json({ error: 'Lawyer email must end with @kalawer.com' });
            }
            if (!name || !specialization || !phone) {
                return res.status(400).json({ error: 'All fields are required' });
            }
            const Lawyer = require('../models/lawyer');
            // Check for duplicate email
            const existing = await Lawyer.findOne({ email });
            if (existing) {
                return res.status(409).json({ error: 'Lawyer with this email already exists' });
            }
            const newLawyer = new Lawyer({ name, email, specialization, phone });
            await newLawyer.save();
            return res.status(201).json({ message: 'Lawyer registered successfully', lawyer: newLawyer });
        } catch (err) {
            return res.status(500).json({ error: 'Server error', details: err.message });
        }
    }

    async getLawyer(req, res) {
        // Logic to retrieve a lawyer by ID
    }

    async getLawyers(req, res) {
        try {
            const lawyers = await Lawyer.find().sort({ createdAt: -1 });
            return res.status(200).json(lawyers);
        } catch (error) {
            console.error('getLawyers error:', error);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    async updateLawyer(req, res) {
        // Logic to update a lawyer's information
    }

    async deleteLawyer(req, res) {
        // Logic to delete a lawyer by ID
    }
}

module.exports = LawyerController;