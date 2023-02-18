require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Middleware de ruta no encontrada.
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Ruta no encontrada",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
