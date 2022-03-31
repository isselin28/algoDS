/* Problem
Write a function called sumZero which accepts a sorted
array of integers. The function should find the first pair
where the sum is 0. Return an array that includes both
values that sum to zero or undefined if a pair does not exist.
*/

// Naive approach
// time complexity: O(n^2)
// space complexity: O(n)
function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Naive approach
// time complexity: O(n)
function refactoreSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
