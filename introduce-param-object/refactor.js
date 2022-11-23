class NumberRange {
  constructor(min, max) {
    this._min = min;
    this._max = max;
  }
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
  contains(arg) {
    return arg >= this.min && arg <= this.max;
  }
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 48, time: '2016-11-10 09:20' },
    { temp: 49, time: '2016-11-10 09:30' },
    { temp: 50, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
    { temp: 52, time: '2016-11-10 09:60' },
  ],
};
function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}
const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);
const alerts = readingsOutsideRange(station, range);
