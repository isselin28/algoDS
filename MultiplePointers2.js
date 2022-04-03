/* Problem: Count Unique Values

Implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values
in the array. There can be negative numbers in the array,
but it will always be sorted.

*/

// my solution, using 2 pointers
function myCountUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let total = 1;
  let num = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (num !== arr[i]) {
      total++;
      num = arr[i];
    }
  }
  return total;
}

// colt's solution
// using one pointer (i), he replaces the array elements from the beginning with unique array values.
// hence returning i+1 is returning the total unique values
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    //note: j=1!
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]; //replaces array elements with unique values
    }
  }
  return i + 1;
}
