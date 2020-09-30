
exports.min = function min (array) {
  if (!array || array.length === 0) return 0;
  array.sort(compareNumbers = (a, b) => {
    return a - b;
  });
  return array[0]
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;
  array.sort(compareNumbers = (a, b) => {
    return a - b;
  });
  return array[array.length - 1];
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;
  let arrSum = 0;
  array.map(item => arrSum += item);
  return arrSum/array.length;
}
