const express = require('express');
const router = express.Router();

const { getAddProduct, getProduct, postAddProduct, getEditProduct, postEditProduct, postDeleteProduct } = require('../../controllers/adminControler');
const { validateAddProduct, validateEditProduct } = require('../../validates/adminValidates');




router.get("/add-product", getAddProduct);

router.get("/products", getProduct);

router.post("/add-product", validateAddProduct, postAddProduct);

router.get("/edit-product/:prodId", getEditProduct);

router.post("/edit-product/", validateEditProduct, postEditProduct);

router.post("/delete-product", postDeleteProduct);

module.exports = router;