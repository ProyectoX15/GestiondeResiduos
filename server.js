const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); // Para procesar formularios codificados en la URL
app.use(express.json()); // Para procesar datos JSON en las peticiones

/*
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;
  console.log('Intento de inicio de sesión:', usuario, contrasena);

  res.send('¡Recibidos los datos del login!');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/registro', (req, res) => {
  res.render('registro'); // Asegúrate de que el archivo se llama registro.ejs
});

app.post('/registro', (req, res) => {
  const { nombre, email, contrasena } = req.body;
  console.log('Intento de registro:', nombre, email, contrasena);
  // Aquí iría tu lógica de registro de usuario
  res.send('¡Recibidos los datos del registro!');
});

app.get('/donacion', (req, res) => {
  res.render('donacion'); // Asegúrate de que el archivo se llama donacion.ejs
});

app.post('/donacion', (req, res) => {
  const { cardNumber, cardHolder } = req.body;
  console.log('Intento de donación:', cardNumber, cardHolder);
  // Aquí iría tu lógica de procesamiento de donación
  res.send('¡Recibidos los datos de la donación!');
});

app.get('/seleccion-zona', (req, res) => {
  res.render('seleccion_zona'); // Asegúrate de que el archivo se llama seleccion_zona.ejs
});

app.post('/seleccion-zona', (req, res) => {
  const { zona } = req.body;
  console.log('Zona seleccionada:', zona);
  res.send('¡Recibida la zona seleccionada!');
});

app.get('/reporte-creado', (req, res) => {
  res.render('reporte_creado'); // Asegúrate de que el archivo se llama reporte_creado.ejs
});
*/
//Routes
app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
