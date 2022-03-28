// Problem
/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's
corresponsing value squared in the second array. The frequency of values must be the same.

Examples:
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (muse be same frequency)
*/

// Naive Approach
// time complexity: O(n^2)
function NaiveApproach(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1, arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Refactored approach
// We are using the common pattern: frequency counter here
// time complexity: O(n)

function RefactoredApproach(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let item of arr1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  }

  for (let item of arr2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}
