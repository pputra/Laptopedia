const {Order, Product} = require('../models/index');

class OrderController {

    static showAllOrder(req, res) {
        Order.findAll({where:{UserId: req.session.user.id}, include: {model:Product }}).then((orders) => {
            res.render('./orders/orders', {orders});
        }).catch((err) => {
            res.send(err.message);
        });
    }

    static addOrder(req, res) {
        
        Order.create({
            UserId: req.session.user.id,
            ProductId: req.body.ProductId,
            price: req.body.price,
            quantity: 1
        })
            .then((result) => {
                res.redirect('/products');
            }).catch((err) => {
                res.send(err.message);
            });
    }

    static delete(req, res) {
        console.log(req.body);
        Order.destroy({where: {id: req.body.order_id}}).then(() => {
            OrderController.showAllOrder(req,res);
        }).catch((err) => {
            res.send(err.message);
        });
    }
}

module.exports = OrderController;