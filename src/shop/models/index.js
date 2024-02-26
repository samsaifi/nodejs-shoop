const mongoose = require('mongoose');
const orderModel = require('./orderModel');
const userModel = require('./userModel');
const productModel = require('./productModel');

mongoose.Promise = global.Promise;


const models = {}


models.mongoose = mongoose;
models.Products = productModel;
models.Users = userModel;
models.Orders = orderModel;


module.exports = models;
