const service = require('../services/turnos.service');
function listar(req, res) { return res.status(200).json(service.obtenerTurnos()); }
function consultar(req, res) {
    const turno = service.obtenerTurnoPorId(Number(req.params.id));
    if (!turno) return res.status(404).json({ mensaje: 'Turno no encontrado' });
    return res.status(200).json(turno);
}
function crear(req, res) {
    const datos = req.body;
    if (!datos || typeof datos !== 'object' || Array.isArray(datos))
        return res.status(400).json({ mensaje: 'Se requiere un objeto JSON' });
    for (const campo of ['cliente','placa','vehiculo','servicio','fecha','hora']) {
        if (typeof datos[campo] !== 'string' || !datos[campo].trim())
            return res.status(400).json({ mensaje: `Campo obligatorio o inválido: ${campo}` });
    }
    if (typeof datos.precioBase !== 'number' || !Number.isFinite(datos.precioBase) || datos.precioBase <= 0 || datos.precioBase > Number.MAX_SAFE_INTEGER / 1000)
        return res.status(400).json({ mensaje: 'precioBase debe ser un número positivo dentro del rango permitido' });
    if (datos.prioritario !== undefined && typeof datos.prioritario !== 'boolean')
        return res.status(400).json({ mensaje: 'prioritario debe ser booleano' });
    const fecha = new Date(datos.fecha + 'T00:00:00Z');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(datos.fecha) || !Number.isFinite(fecha.getTime()) || fecha.toISOString().slice(0,10) !== datos.fecha)
        return res.status(400).json({ mensaje: 'fecha debe ser válida (AAAA-MM-DD)' });
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(datos.hora))
        return res.status(400).json({ mensaje: 'hora debe tener formato HH:mm' });
    return res.status(201).json(service.crearTurno(datos));
}
module.exports = { listar, consultar, crear };
