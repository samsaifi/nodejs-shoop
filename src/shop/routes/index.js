const express = require('express');
const router = express.Router();

const shopRoutes = require('./shop');
const adminRoutes = require('./admin');

router.use('/admin', (req, res, next) => {
    console.log('test middleware');
    next();
});
router.use("/admin", adminRoutes);

router.use('/', (req, res, next) => {
    console.log('shop middleware');
    next();
});
router.use(shopRoutes);



module.exports = router; 