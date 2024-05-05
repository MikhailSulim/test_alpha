const { PORT = 3009, DB_URL = 'mongodb://127.0.0.1:27017/egrul' } = process.env;

module.exports = { PORT, DB_URL };
