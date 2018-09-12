module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) return 0;
  if (array.length == 1) return 1;

  var arr = [].concat(array);
  arr.sort(compareNumeric);

  var max   = 0;
  var count = 1;
  arr.forEach(function(item,index, array){
    var diff = item - array[index-1];
    if ( diff == 1 ) count++;
    if ( diff > 1 ) {
      max = count > max ? count : max;
      count = 1;
    }
  });

  return max;

}

function compareNumeric(a,b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
