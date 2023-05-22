// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const length = Math.abs(destination - start) * 264;
  if (length <= 400) {
    return 0;
  } else if (length > 400 && length <= 2000) {
    return (length - 400) * 0.02;
  } else if (length > 2000 && length <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}