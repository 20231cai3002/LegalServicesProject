class ClientController {
    async createClient(req, res) {
        try {
            const { name, email, phone, address } = req.body;
            // Email validation for clients
            if (!email || (!email.endsWith('@gmail.com') && !email.endsWith('@yahoo.com'))) {
                return res.status(400).json({ error: 'Client email must end with @gmail.com or @yahoo.com' });
            }
            if (!name || !phone || !address) {
                return res.status(400).json({ error: 'All fields are required' });
            }
            const Client = require('../models/client');
            // Check for duplicate email
            const existing = await Client.findOne({ email });
            if (existing) {
                return res.status(409).json({ error: 'Client with this email already exists' });
            }
            const newClient = new Client({ name, email, phone, address });
            await newClient.save();
            return res.status(201).json({ message: 'Client registered successfully', client: newClient });
        } catch (err) {
            return res.status(500).json({ error: 'Server error', details: err.message });
        }
    }

    async getClient(req, res) {
        // Logic to retrieve a client by ID
    }

    async updateClient(req, res) {
        // Logic to update client information
    }

    async deleteClient(req, res) {
        // Logic to delete a client
    }
}

module.exports = ClientController;