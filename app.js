const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  const subdomain = req.headers.host.split('.')[0];
  console.log(`Subdomain: ${subdomain}`);
  next();
});

const routes = require('./routes/index');
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
