function findMatching(drivers, name) {
    const newDrivers = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
    return newDrivers;
}

function fuzzyMatch(drivers, name) {
    const newDrivers = drivers.filter(driver => driver.slice(0, 2) === name.slice(0, 2))
    return newDrivers;
}

function matchName(drivers, name) {
    const newDrivers = drivers.filter(driver => driver.name === name)
    return newDrivers;
}