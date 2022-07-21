require('dotenv').config();
const { token, database } = process.env

module.exports = {
    token : token,
    database : database // ""
};