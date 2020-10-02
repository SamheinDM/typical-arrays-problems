
exports.min = function min (array = []) {
  if (array === undefined || array.length == 0) return 0;
  let result = array.sort(compare);
  function compare(a, b) {
    return a-b;
  }
  return result[0];
}

exports.max = function max (array) {
  if (array === undefined || array.length == 0) return 0;
  let result = array.sort(compare);
  function compare(a, b) {
    return a-b;
  }
  result.reverse();
  return result[0];
}

exports.avg = function avg (array) {
  if (array === undefined || array.length == 0) return 0;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  result /= array.length;
  return result;
}