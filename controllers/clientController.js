const pool = require('../config/db');


//Get client bu ID
const getClientById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM clients WHERE client_id = $1',[id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

const updateClient = async (req, res) => {
    const { id } = req.params;
    const { nama, alamat, pic, sla, status_layanan } = req.body;

    try {
        const result = await pool.query(
            'UPDATE clients SET nama=$1, alamat=$2, pic=$3, sla=$4, status_layanan=$5 WHERE client_id=$6 RETURNING *', [nama, alamat, pic, sla, status_layanan, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

//Delete client
const deleteClient  = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query(
            'DELETE FROM clients WHERE client_id = $1',[id]
        );
        res.json({ message: 'Client deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }

};

//Get clients
const getClients = async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM clients');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

//Post clients
const createClients = async (req, res) => {
    const { nama, alamat, pic, sla, status_layanan } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO clients (nama, alamat, pic, sla, status_layanan)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [nama, alamat, pic, sla, status_layanan]     
        );

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

module.exports = {
    getClients,
    createClients,
    getClientById,
    updateClient,
    deleteClient
};