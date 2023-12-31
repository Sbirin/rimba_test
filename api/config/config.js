require('dotenv').config();
const {DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOSTNAME, DB_DIALEG} = process.env;
module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALEG
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALEG
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALEG
  }
}
