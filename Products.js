require("dotenv").config();
const connectDB = require("./Database/connect");
const Product = require("./Modules/product");

const ProductJson = require("./package.json");

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_DB);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Success");
    }
    catch(error){
        console.log(error);
    }
}

start();