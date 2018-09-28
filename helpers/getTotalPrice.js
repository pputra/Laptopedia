function getTotalPrice(orders) {
    let totalPrice = 0;
    orders.forEach(order => {
        totalPrice += order.price;
    });

    return totalPrice;
}

module.exports = getTotalPrice;