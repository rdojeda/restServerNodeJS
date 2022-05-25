const { Router } = require('express');
const { productsGet, productsPut, productsPost, productsDelete } = require('../Controllers/products.controller');

const router = Router()

router.get("/", productsGet );

router.put("/", productsPut);

router.post("/", productsPost);

router.delete("/", productsDelete);

module.exports = router