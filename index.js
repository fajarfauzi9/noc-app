const express = require('express');
const app = express();
const  clientRoutes = require('./routes/clientRoutes');

const pool = require('./config/db');

//middleware
app.use(express.json());

app.use('/clients', clientRoutes);

//route utama
app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        res.json({
            error: err.message
        });
    }
});

// jalankan server
app.listen(3000, () => {
    console.log('Server jalan di port 3000');
});