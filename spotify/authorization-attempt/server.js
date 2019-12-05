const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.info(`Server running on port ${port}`));
