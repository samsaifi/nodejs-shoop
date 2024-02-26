const { Schema } = require("mongoose");
const cartSchema = require("./cartSchema");

const userSchema = new Schema({
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    cart: cartSchema,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



module.exports = userSchema