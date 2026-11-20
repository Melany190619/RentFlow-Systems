const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Simulación temporal
        if (email === 'admin@rentflow.com' && password === '123456') {
            
        
            const token = jwt.sign(
                { id: 1, email: email, rol: 'admin' },
                process.env.JWT_SECRET,
                { expiresIn: '8h' }
            );

            return res.status(200).json({
                status: 'success',
                token: token,
                user: { id: 1, email: email, nombre: 'Admin RentFlow', rol: 'admin' }
            });
        }

        
        return res.status(401).json({
            status: 'error',
            message: 'Correo o contraseña incorrectos'
        });

    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
    }
};

module.exports = {
    login
};