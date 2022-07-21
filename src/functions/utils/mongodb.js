const mongoose = require("mongoose");
const { database } = require("../../settings/config");

module.exports = async (client) => {

    mongoose.connect(database, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
})
.then(() => console.log('MongoDB Connectée...'))
.catch((err) => console.log(err));

};