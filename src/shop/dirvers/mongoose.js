const mongoose = require('mongoose');



// Handle MongoDB connection events
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}


module.exports = connectDB