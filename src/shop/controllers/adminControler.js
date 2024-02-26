const { Products } = require("../models");


const getAddProduct = async (req, res) => {
    res.render("admin/edit-product", {
        pageTitle: "Add-Product",
        editing: false,
    });
}
const getProduct = async (req, res) => { }
const postAddProduct = async (req, res) => {
    console.log(req.body);
    const { title, imageUrl, price, description } = req.body;
    return res.send("working");
    // const product = await Products.create({});
}
const getEditProduct = async (req, res) => { }
const postEditProduct = async (req, res) => { }
const postDeleteProduct = async (req, res) => { }

module.exports = {
    getAddProduct, getProduct, postAddProduct, getEditProduct, postEditProduct, postDeleteProduct
}