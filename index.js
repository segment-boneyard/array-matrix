
module.exports = matrix;

function matrix(x, y) {
  var arr = new Array(y);

  for (var i = 0; i < y; i++) {
    arr[i] = new Array(x);
  }

  return arr;
}