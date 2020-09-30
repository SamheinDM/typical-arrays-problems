
exports.min = function min (array) {
  if (array === [] || array == undefined) return 0;
  let result = array.sort(compare);
  function compare(a, b) {
    return a-b;
  }
  return result[0];
}

exports.max = function max (array) {
  if (array === [] || array == undefined) return 0;
  let result = array.sort(compare);
  function compare(a, b) {
    return a-b;
  }
  result.reverse();
  return result[0];
}

exports.avg = function avg (array) {
  return 0;
}
