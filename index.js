const express = require('express');
const rutas = require('./routes/turnos.routes');
const app = express();
app.use(express.json());
app.use('/api/turnos', rutas);
app.use((req,res) => res.status(404).json({mensaje:'Ruta no encontrada'}));
app.use((err,req,res,next) => {
    if (err.type === 'entity.parse.failed') return res.status(400).json({mensaje:'JSON inválido'});
    return res.status(err.status || 500).json({mensaje:'Error al procesar la solicitud'});
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`AutoService API: http://localhost:${PORT}/api/turnos`));
