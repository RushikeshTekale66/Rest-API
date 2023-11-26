const mongoose = require("mongoose");

// const url = "mongodb://127.0.0.1:27017/RestAPI";

const connectDB = (url)=>{
    console.log("Database connected")

    return mongoose.connect(url, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
});
}

module.exports = connectDB;