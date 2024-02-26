
const { model } = require("mongoose");
const orderSchema = require("../schema/orderSchema");
const orderModel = model("Orders", orderSchema);


module.exports = orderModel