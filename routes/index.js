const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  const { usuario, contrasena } = req.body;
  console.log("Intento de inicio de sesión:", usuario, contrasena);

  res.send("¡Recibidos los datos del login!");
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/registro", (req, res) => {
  res.render("registro"); // Asegúrate de que el archivo se llama registro.ejs
});

router.post("/registro", (req, res) => {
  const { nombre, email, contrasena } = req.body;
  console.log("Intento de registro:", nombre, email, contrasena);
  // Aquí iría tu lógica de registro de usuario
  res.send("¡Recibidos los datos del registro!");
});

router.get("/donacion", (req, res) => {
  res.render("donacion"); // Asegúrate de que el archivo se llama donacion.ejs
});

router.post("/donacion", (req, res) => {
  const { cardNumber, cardHolder } = req.body;
  console.log("Intento de donación:", cardNumber, cardHolder);
  // Aquí iría tu lógica de procesamiento de donación
  res.send("¡Recibidos los datos de la donación!");
});

router.get("/seleccion-zona", (req, res) => {
  res.render("seleccion_zona"); // Asegúrate de que el archivo se llama seleccion_zona.ejs
});

router.post("/seleccion-zona", (req, res) => {
  const { zona } = req.body;
  console.log("Zona seleccionada:", zona);
  res.send("¡Recibida la zona seleccionada!");
});

router.get("/reporte-creado", (req, res) => {
  res.render("reporte_creado"); // Asegúrate de que el archivo se llama reporte_creado.ejs
});

module.exports = router;
