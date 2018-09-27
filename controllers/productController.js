const {Product} = require('../models/index');

class ProductController {
    static showAll(req, res) {
        Product.findAll().then((products) => {
            res.render('./products/show-all-products', {products});
        }).catch((err) => {
            res.send(err.message);
        });
    }
}

module.exports = ProductController;