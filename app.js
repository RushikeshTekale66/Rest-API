const express = require('express');
const app = express();
require("dotenv").config();
const addProduct = require("./Modules/product");

let PORT = 5000;


const products_routes = require("./Products/routs");
const connectDB = require("./Database/connect");

app.use("/api/products", products_routes);


app.get("/", (req, res) => {
    res.send("I am your port");
})

app.post('/addproduct', async (req, res) => {
    let product = new addProduct(req.body);
    let result = await product.save();
    res.send(result);
})

const start = async () => {
    try{
        await connectDB(process.env.MONGO_DB);
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am connected`)
        });

    }
    catch(error){
        console.log(error);
    }
    

    
}
start();

console.log("App is live");
