# AutoService API — CIAF
Proyecto final de Arquitectura Cliente-Servidor. Caso de negocio propuesto: taller automotriz que recibe solicitudes de mantenimiento y reparación. Confirmar el nombre del taller real elegido antes de entregar.

## Integrantes
Pendientes de confirmar: completar nombres y números oficiales de los 3 a 4 integrantes, ordenados por apellido.

## Regla de negocio
N = 6 provisional; recargo = N × 2 = 12%. Actualizar N en services/turnos.service.js y los ejemplos de este documento cuando se confirme el equipo. Si prioritario es true, total = precioBase + precioBase × recargo / 100; si es false o se omite, total = precioBase. Valores en COP, redondeados a dos decimales.

## Ejecución
Requiere Node.js 18 o superior. Desde la carpeta del proyecto:
```sh
npm install
npm start
```
Para desarrollo: `npm run dev`. Puerto 3000. Los registros se pierden al reiniciar el servidor.

## Arquitectura
index.js configura Express y conecta las rutas. routes/ asocia endpoints con controladores. controllers/ valida entradas y asigna códigos HTTP. services/ almacena registros, genera IDs y calcula tarifas.

## Endpoints
| Método | Ruta | Resultado |
|---|---|---|
| GET | /api/turnos | 200, arreglo de turnos |
| GET | /api/turnos/:id | 200 o 404 |
| POST | /api/turnos | 201 o 400 |

## Ejemplo POST exitoso
Content-Type: application/json
```json
{"cliente":"Carlos Pérez","placa":"ABC123","vehiculo":"Mazda 3","servicio":"Cambio de aceite","fecha":"2026-12-01","hora":"09:00","precioBase":150000,"prioritario":true}
```
Respuesta esperada 201 (servidor recién iniciado):
```json
{"id":1,"cliente":"Carlos Pérez","placa":"ABC123","vehiculo":"Mazda 3","servicio":"Cambio de aceite","fecha":"2026-12-01","hora":"09:00","precioBase":150000,"prioritario":true,"porcentajeRecargo":12,"recargo":18000,"totalPagar":168000}
```
## Ejemplo POST inválido
```json
{"cliente":"Carlos Pérez","placa":"ABC123","vehiculo":"Mazda 3","servicio":"Cambio de aceite","fecha":"2026-12-01","hora":"09:00","precioBase":0}
```
Respuesta esperada 400:
```json
{"mensaje":"precioBase debe ser un número positivo dentro del rango permitido"}
```
Consultar GET /api/turnos/999 devuelve 404 si no existe. Importar la colección Postman incluida y ejecutar en orden. Los resultados anteriores son esperados; verificar en el servidor local antes de entregar.

## GitHub
Crear repositorio público vacío y ejecutar:
```sh
git init
git add .
git commit -m "Proyecto final AutoService API"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```
Entregar el enlace público en la plataforma institucional.
