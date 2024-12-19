const path = require("path");

module.exports = {
  entry: "./scripts/index.js",
  output: {
    path: path.resolve(__dirname, "."), // Usa path.resolve para mayor compatibilidad
    filename: "bundle.js",
  },
  mode: "production", // Cambia a 'production'
};
