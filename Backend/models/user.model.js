import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    ProductName: String,
    ProductPrice: Number,
    ProductDescription: String
})
const db = mongoose.model('Product', Schema)

export {db} 
