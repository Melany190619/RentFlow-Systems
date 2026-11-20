const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();

const app = express();

app.use(helmet()); 
app.use(cors()); 
app.use(express.json()); 
app.use(morgan('dev')); 
app.use('/api/auth', authRoutes);

app.get('/api/status', (req, res) => {
    res.status(200).json({ 
        status: 'success', 
        message: 'API de RentFlow funcionando correctamente',
        timestamp: new Date()
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});