const mongoose = require('mongoose');

const dbConnect = async (options = {}) => {
    try {
        await mongoose.connect(process.env.MONGO_DB, options, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected database');
        mongoose.connection.on('error', (error) => {
            console.log("DB connection error", error)
        })
    } catch (error) {
        console.log("DB connection error", error.toString())
    }
}
module.exports = dbConnect;