function produceDrivingRange(blockRange) {
  return function(beginStreet, endStreet) {
    let result = parseInt(endStreet) - parseInt(beginStreet);
    if (result < blockRange) {
      return `within range by ${result}`;
    } else {
      let outOfRange = (result - blockRange);
      return `${outOfRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  }
}
