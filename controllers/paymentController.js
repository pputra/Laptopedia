const {Payment, Order, City, Product} = require('../models/index');
const RajaOngkir = require('../API/rajaongkir');

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
            //res.send(prevBody);
            if (req.body.courier === 'JNE') {
                RajaOngkir.getJNECost(params).then(function (result){
                    let courier = result.rajaongkir.results[0];
                    
                    res.render('./payments/courier-options', {courier})

                }).catch(function (error){
                    res.send(error.message);
                });    
            } else if (req.body.courier === 'TIKI') {
                RajaOngkir.getTIKICost(params).then(function (result){
                    let courier = result.rajaongkir.results[0];
                    
                    res.render('./payments/courier-options', {courier})

                }).catch(function (error){
                    res.send(error.message);
                }); 
            } else {
                RajaOngkir.getPOSCost(params).then(function (result){
                    let courier = result.rajaongkir.results[0];
                    
                    res.render('./payments/courier-options', {courier})

                }).catch(function (error){
                    res.send(error.message);
                }); 
            }
            

        }).catch((err) => {
            
        });
    }
}

module.exports = PaymentController;