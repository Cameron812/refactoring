function acquireReading() {
  return { customer: 'ivan', quantity: 10, moth: 5, year: 2017 };
}

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

const bReading = acquireReading();
const base = baseRate(bReading.month, bReading.year) * bReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(bReading.year));

const cReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(cReading);
function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}
