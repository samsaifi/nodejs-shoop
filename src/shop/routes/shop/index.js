const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send("Welcome to the shoop!");
});

// router.get("/", shopController.getIndex);

// router.get("/products", shopController.getProducts);

// router.get("/products/:productId", shopController.getProduct);

// router.get("/cart", shopController.getCart);

// router.post("/cart", shopController.postCart);

// router.post("/cart-delete-item", shopController.postCartDelete);

// router.post("/create-order", shopController.postOrder);

// router.get("/orders", shopController.getOrders);

module.exports = router;