function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  function calculateBaseCharge(result) {
    return baseRate(result.month, result.year) * result.quantity;
  }
  return result;
}

function acquireReading() {
  return { customer: 'ivan', quantity: 10, moth: 5, year: 2017 };
}
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;
