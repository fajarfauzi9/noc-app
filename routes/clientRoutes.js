const express = require('express');
const router = express.Router();

const { 
    getClients,
    createClients,
    getClientById,
    updateClient,
    deleteClient
} = require('../controllers/clientController');

router.get('/', getClients);
router.post('/', createClients);

router.get('/:id', getClientById);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;