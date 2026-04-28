
// Orders Module
class OrderService {
  constructor() {
    this.orders = [];
  }

  createOrder(userId, items) {
    const order = {
      orderId: Math.random().toString(36).substr(2, 9),
      userId,
      items,
      status: 'pending',
      createdAt: new Date(),
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };
    this.orders.push(order);
    return order;
  }

  getOrder(orderId) {
    return this.orders.find(order => order.orderId === orderId);
  }
}

module.exports = OrderService;
