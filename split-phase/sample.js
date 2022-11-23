function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}
const product = { basePrice: 10, discountThreshold: 5, discountRate: 0.1 };
const quantity = 10;
const shippingMethod = { discountedFee: 1, feePerCase: 2 };
console.log('total price:', priceOrder(product, quantity, shippingMethod));
