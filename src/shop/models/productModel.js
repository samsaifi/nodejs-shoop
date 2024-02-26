
const { model } = require("mongoose");
const productSchema = require("../schema/productSchema");
const productModel = model("Products", productSchema);


module.exports = productModel