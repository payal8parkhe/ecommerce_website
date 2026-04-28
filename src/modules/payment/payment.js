// Payment Module
class PaymentProcessor {
  processPayment(amount, method) {
    console.log(`Processing $${amount} via ${method}`);
    return { success: true, transactionId: Date.now() };
  }
}

module.exports = PaymentProcessor;
