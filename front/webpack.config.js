const path = require("path");

module.exports = {
  entry: "./scripts/index.js", // Punto de entrada principal
  output: {
    path: path.resolve(__dirname, "public"), // Carpeta de salida
    filename: "bundle.js", // Archivo de salida
  },
  mode: "production", // Cambia a 'production' para optimizar el build
};
