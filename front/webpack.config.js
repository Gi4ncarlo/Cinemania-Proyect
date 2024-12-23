const path = require("path");

module.exports = {
  entry: "./public/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "public"), // Carpeta de salida
    filename: "bundle.js", // Archivo de salida
  },
  mode: "production", // Cambia a 'production' para optimizar el build
};
