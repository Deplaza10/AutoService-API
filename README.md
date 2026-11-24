
# 🚗 AutoService API — AutoExpert Taller

## Proyecto final de Arquitectura Cliente-Servidor

**Institución:** CIAF  
**Programa:** Ingeniería de Software  
**Asignatura:** Arquitectura Cliente-Servidor  
**Proyecto:** AutoService API  
**Año:** 2026  

## 👥 Integrantes

| Nombre completo | Número de lista |
|---|---:|
| Juan Camilo De Plaza Gómez | 6 |
| Xavier Muñoz Alzate | 12 |
| Camilo Vargas Castañeda | 18 |

## 📋 Descripción del proyecto

AutoService API es una API REST desarrollada con Node.js y Express, orientada a la gestión de turnos y solicitudes de mantenimiento y reparación de vehículos para el caso de negocio AutoExpert Taller.

El sistema permite registrar turnos, consultar los servicios solicitados, validar la información recibida y calcular automáticamente el valor final de cada servicio, dependiendo de si el cliente solicita atención normal o prioritaria.

## 🎯 Objetivo general

Desarrollar una API REST aplicando los principios de arquitectura cliente-servidor, separación de responsabilidades, validación de datos, manejo de códigos HTTP e implementación de reglas de negocio.

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- JavaScript
- JSON
- Visual Studio Code
- PowerShell
- Git
- GitHub

## 🏗️ Arquitectura del proyecto

El sistema está organizado mediante una arquitectura por capas que permite separar las responsabilidades de cada componente.

```text
autoservice-api/
├── controllers/
│   └── turnos.controller.js
├── routes/
│   └── turnos.routes.js
├── services/
│   └── turnos.service.js
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Responsabilidades de cada capa

- **index.js:** Configuración e inicialización del servidor Express.
- **Routes:** Definición de las rutas y métodos HTTP.
- **Controllers:** Procesamiento de solicitudes, validación de datos y respuestas HTTP.
- **Services:** Almacenamiento de turnos y ejecución de la lógica de negocio.

### Flujo de comunicación

Cliente → Servidor Express → Routes → Controllers → Services

La respuesta generada por el servidor se devuelve al cliente en formato JSON.

## 🧮 Regla de negocio

De acuerdo con las instrucciones del proyecto, el valor N corresponde al número de lista del primer integrante del equipo, organizado alfabéticamente por apellido.

El primer integrante es Juan Camilo De Plaza Gómez, cuyo número de lista es 6.

Por lo tanto:

- **Valor definitivo de N:** 6.
- **Fórmula del recargo:** N × 2.
- **Cálculo:** 6 × 2 = 12%.
- **Recargo prioritario:** 12%.

Cuando el cliente solicita atención prioritaria, se aplica un recargo del 12% sobre el precio base del servicio.

### Fórmula

```text
Recargo = Precio base × 12 / 100

Total a pagar = Precio base + Recargo
```

Cuando la atención no es prioritaria, el recargo es cero y el total a pagar corresponde al precio base.

### Ejemplo práctico

| Concepto | Atención normal | Atención prioritaria |
|---|---:|---:|
| Precio base | $150.000 | $150.000 |
| Porcentaje de recargo | 0% | 12% |
| Valor del recargo | $0 | $18.000 |
| Total a pagar | $150.000 | $168.000 |

Todos los valores monetarios se expresan en pesos colombianos (COP).

El recargo corresponde a la regla de negocio establecida para el proyecto académico.

## 🔗 Endpoints de la API

URL base:

```text
http://localhost:3000
```

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/turnos | Consultar todos los turnos |
| GET | /api/turnos/:id | Consultar un turno específico |
| POST | /api/turnos | Registrar un nuevo turno |

## 📡 Códigos de respuesta HTTP

| Código | Estado | Descripción |
|---|---|---|
| 200 | OK | Consulta exitosa |
| 201 | Created | Turno registrado correctamente |
| 400 | Bad Request | Información inválida |
| 404 | Not Found | Turno no encontrado |

## ✅ Ejemplo de registro exitoso

Método: POST

Endpoint: /api/turnos

Cuerpo de la solicitud:

```json
{
  "cliente": "Carlos Perez",
  "placa": "ABC123",
  "vehiculo": "Mazda 3",
  "servicio": "Cambio de aceite",
  "fecha": "2026-11-25",
  "hora": "09:00",
  "precioBase": 150000,
  "prioritario": true
}
```

Código HTTP esperado: 201 Created.

Resultado obtenido al consultar el turno registrado:

```json
{
  "id": 1,
  "cliente": "Carlos Perez",
  "placa": "ABC123",
  "vehiculo": "Mazda 3",
  "servicio": "Cambio de aceite",
  "fecha": "2026-11-25",
  "hora": "09:00",
  "precioBase": 150000,
  "prioritario": true,
  "porcentajeRecargo": 12,
  "recargo": 18000,
  "totalPagar": 168000
}
```

## ❌ Ejemplo de solicitud inválida

Método: POST

Endpoint: /api/turnos

```json
{
  "cliente": "Carlos Perez",
  "placa": "ABC123",
  "vehiculo": "Mazda 3",
  "servicio": "Cambio de aceite",
  "fecha": "2026-11-25",
  "hora": "09:00",
  "precioBase": -150000,
  "prioritario": true
}
```

Código HTTP esperado: 400 Bad Request.

Respuesta obtenida:

```json
{
  "mensaje": "precioBase debe ser un número positivo dentro del rango permitido"
}
```

## 🔍 Consulta de un turno inexistente

Método: GET

Endpoint: /api/turnos/999

Código HTTP: 404 Not Found.

```json
{
  "mensaje": "Turno no encontrado"
}
```

## 🛡️ Validaciones

La API implementa validaciones para evitar el almacenamiento de información incorrecta.

- Verificación de campos obligatorios.
- Validación de tipos de datos.
- Validación de precios positivos.
- Validación del atributo prioritario.
- Verificación de existencia de turnos.
- Manejo de respuestas HTTP.

## 💻 Instalación y ejecución

### Requisitos previos

- Node.js 22 recomendado.
- NPM.
- Visual Studio Code (opcional).
- Git (opcional si se descarga el ZIP).

### Paso 1. Clonar el repositorio

```bash
git clone https://github.com/Deplaza10/AutoService-API.git
```

### Paso 2. Ingresar a la carpeta

```bash
cd AutoService-API
```

### Paso 3. Instalar las dependencias

```bash
npm install
```

### Paso 4. Iniciar el servidor

```bash
npm start
```

### Paso 5. Consultar la API

Abrir en el navegador:

http://localhost:3000/api/turnos

Si todavía no existen turnos registrados, el servidor devolverá:

```json
[]
```

### Modo desarrollo

```bash
npm run dev
```

## 🧪 Pruebas desde PowerShell

Con el servidor activo, abrir una segunda terminal.

### Registrar un turno y consultar el código HTTP

```powershell
$r = Invoke-WebRequest -UseBasicParsing -Uri "http://localhost:3000/api/turnos" -Method Post -ContentType "application/json" -Body '{"cliente":"Carlos Perez","placa":"ABC123","vehiculo":"Mazda 3","servicio":"Cambio de aceite","fecha":"2026-11-25","hora":"09:00","precioBase":150000,"prioritario":true}'
$r.StatusCode
$r.Content
```

### Consultar todos los turnos

```powershell
curl.exe -i http://localhost:3000/api/turnos
```

### Consultar un turno específico

```powershell
curl.exe -i http://localhost:3000/api/turnos/1
```

### Consultar un turno inexistente

```powershell
curl.exe -i http://localhost:3000/api/turnos/999
```

### Comprobar una solicitud inválida

```powershell
try {
    Invoke-RestMethod -Uri "http://localhost:3000/api/turnos" -Method Post -ContentType "application/json" -Body '{}'
} catch {
    [int]$_.Exception.Response.StatusCode
    $_.ErrorDetails.Message
}
```

## 💾 Almacenamiento de datos

La aplicación utiliza un arreglo en memoria para almacenar los turnos registrados.

No requiere una base de datos externa.

Los registros se eliminan cuando el servidor se reinicia.

## 🔒 Seguridad y dependencias

Se realizó una revisión de las dependencias utilizando:

```bash
npm audit
```

Después de actualizar las dependencias del proyecto, se obtuvo el siguiente resultado:

```text
found 0 vulnerabilities
```

## 📈 Resultados del proyecto

- Implementación de una API REST funcional.
- Separación de responsabilidades mediante arquitectura por capas.
- Registro y consulta de turnos automotrices.
- Aplicación automática del recargo prioritario del 12%.
- Validación de solicitudes.
- Manejo de códigos HTTP.
- Publicación del código fuente en GitHub.

## 📝 Conclusiones

El desarrollo de AutoService API permitió aplicar los conocimientos adquiridos durante la asignatura Arquitectura Cliente-Servidor mediante una solución orientada a la gestión de servicios automotrices.

La implementación de una arquitectura por capas facilita la organización, el mantenimiento y la escalabilidad del sistema.

La regla de negocio permite calcular automáticamente el costo final de los servicios prioritarios, mientras que las validaciones permiten controlar la información recibida por el servidor.

## 🔗 Repositorio oficial

https://github.com/Deplaza10/AutoService-API

---

**Proyecto académico — CIAF 2026**

**Ingeniería de Software**

**AutoService API — AutoExpert Taller**
