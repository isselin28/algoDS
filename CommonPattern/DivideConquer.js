/* Problem:

Given a sorted array of integers, write a function called
search, that accepts a value and returns the index where the
value passd to the function is located. If the value
is not found, return -1. Ex:

searh([1,2,3,4,5,6], 4) // 3
searh([1,2,3,4,5,6], 6) // 5
*/

// Naive approach
// time complexity: O(n)
function naiveSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Refactored approach
// time complexity: O(log n)
function refactoredSearch(arr, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
