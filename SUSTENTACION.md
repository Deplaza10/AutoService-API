# Guía de sustentación
1. Presentar el taller automotriz y sus datos: cliente, placa, vehículo, servicio, fecha, hora, precio base y prioridad.
2. Mostrar index.js, routes, controllers y services. Explicar que separar responsabilidades facilita mantenimiento y pruebas.
3. Ejecutar npm start. Importar la colección Postman y demostrar POST 201, GET 200, POST 400 y GET 404. Mostrar también un turno sin prioridad.
4. Explicar N: número oficial del primer integrante ordenado por apellido. Con N provisional 6, 150000 × 12 / 100 = 18000; total 168000.
5. Explicar que el arreglo reside en RAM y se pierde al reiniciar; el taller no exige base de datos.
6. Preguntas: ¿Qué es REST? Estilo arquitectónico para acceder a recursos mediante una interfaz uniforme. ¿Qué hace express.json()? Interpreta cuerpos JSON. ¿Por qué 201? Se creó un recurso. ¿Por qué 400? Entrada inválida. ¿Por qué 404? Recurso inexistente. ¿Dónde está el cálculo? En services, no en routes ni controllers.
7. Antes de entregar: confirmar integrantes, N, taller real, resultados de pruebas y enlace público GitHub. Todos deben poder explicar el código.
