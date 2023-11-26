const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:[true, "Price must be provided"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["apple", "Samsung", "dell", "mi"],
            message:`{value} is not supported`
        }
    }
    // name:String,
    // price:Number,
    // featured:Boolean,
    // rating:Number,
    // createdAt:Date,
    // company:String
})

console.log("You can add product now");

module.exports = mongoose.model("product", productSchema);