const express = require('express');
const mongoose = require('mongoose');
const { PORT, DB_URL } = require('./utils/config');

require('dotenv').config();
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const cors = require('./middlewares/cors');
const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(DB_URL, {
  // useNewUrlParser: true,
});

app.use(cors);
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
