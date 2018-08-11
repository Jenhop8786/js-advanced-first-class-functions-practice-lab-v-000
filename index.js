// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
    return driver1.name.localCompare(driver2.name);
  })
}