const returnFirstTwoDrivers = function (drivers) {
  ["Antonia", "Nuru", "Amari", "Mo"];
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  ["Antonia", "Nuru", "Amari", "Mo"];
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return (fare) => {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
return returnFirstTwoDrivers(drivers);
}