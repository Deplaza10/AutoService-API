const turnos = [];
let siguienteId = 1;
const N = 6; // Provisional: actualizar según la lista oficial del equipo.
const porcentajeRecargo = N * 2;
function obtenerTurnos() { return turnos; }
function obtenerTurnoPorId(id) { return turnos.find(t => t.id === id); }
function crearTurno(datos) {
    const prioritario = datos.prioritario ?? false;
    const recargo = prioritario ? Math.round(datos.precioBase * porcentajeRecargo) / 100 : 0;
    const nuevo = { id: siguienteId++, cliente: datos.cliente, placa: datos.placa,
        vehiculo: datos.vehiculo, servicio: datos.servicio, fecha: datos.fecha,
        hora: datos.hora, precioBase: datos.precioBase, prioritario,
        porcentajeRecargo: prioritario ? porcentajeRecargo : 0, recargo,
        totalPagar: Math.round((datos.precioBase + recargo) * 100) / 100 };
    turnos.push(nuevo);
    return nuevo;
}
module.exports = { obtenerTurnos, obtenerTurnoPorId, crearTurno };
