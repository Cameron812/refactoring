class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._year = data.year;
    this._month = data.month;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get year() {
    return this._year;
  }
  get month() {
    return this._month;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

function acquireReading() {
  return { customer: 'ivan', quantity: 10, moth: 5, year: 2017 };
}

const rawReading = acquireReading();

const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;
const basicChargeAmount = aReading.baseCharge;
