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
function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}
const alerts = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);
