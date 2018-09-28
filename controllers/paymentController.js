const {Payment, Order, City, Product} = require('../models/index');
const RajaOngkir = require('../API/rajaongkir');
const getTotalPrice = require('../helpers/getTotalPrice');
const hasNoCourierOptions = require('../helpers/hasNoCourierOptions');

class PaymentController {
    static showShippingMenu(req, res) {
        City.findAll().then((cities) => {
            res.render('./payments/shipping-address', {cities});
        }).catch((err) => {
            res.send(err.message);
        });
    }

    static showCourierMenu(req, res) {
        Order.findAll({include:{model:Product},where:{PaymentId: null}}).then((orders) => {
            let totalWeight = 0;
            let totalPrice = 0;
            orders.forEach(order => {
                totalWeight += order.Product.weight;
                totalPrice += order.price;
            });

            let params = {
                origin: 152, // ID Kota atau Kabupaten Asal
                destination: Number(req.body.CityId), // ID Kota atau Kabupaten Tujuan
                weight: 1700 // Berat Barang dalam gram (gr)
            };
            
            let prevBody = req.body;
            
            res.locals.prevBody = prevBody;
            if (req.body.courier === 'JNE') {
                RajaOngkir.getJNECost(params).then(function (result){
                    let courier = result.rajaongkir.results[0];
                    
                    res.render('./payments/courier-options', {courier})

                }).catch(function (error){
                    res.send(error);
                });    
            } else if (req.body.courier === 'TIKI') {
                RajaOngkir.getTIKICost(params).then(function (result){
                    let courier = result.rajaongkir.results[0];
                    //if empty courier === {"code":"tiki","name":"Citra Van Titipan Kilat (TIKI)","costs":[]}
                    res.render('./payments/courier-options', {courier})

                }).catch(function (error){
                    res.send(error);
                }); 
            } else {
                RajaOngkir.getPOSCost(params).then(function (result){
                    let courier = result.rajaongkir.results[0];
                    console.log(result.results);
                    res.render('./payments/courier-options', {courier})

                }).catch(function (error){
                    res.send(error);
                }); 
            }
            

        }).catch((err) => {
            
        });
    }

    static pay(req, res) {
        Order.findAll({where: {PaymentId: null}}).then((orders) => {
            
            let totalPrice = getTotalPrice(orders);
            
            Payment.create({
                CityId: req.body.CityId,
                street_address: req.body.street_address,
                cost: totalPrice,
                shipping_cost: req.body.shippingPrice,
                isComplete: true
            })
                .then((payment) => {
                    res.render('./payments/complete', {payment});
                }).catch((err) => {
                    res.send(err.message);
                });
        }).catch((err) => {
            res.send(err.message);
        });
    }
}

module.exports = PaymentController;