/* Problem: Maximum Subarray Sum

Write a function called maxSubarraySum which accepts 
an array of integers and a number called n. The function
should calculate the maximum sum of n consecutive elements
in the array. Ex:
 
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6],4) // 13
maxSubarraySum([],4) // null

*/

// Here, the trick is in how we are sliding the window
// To slide the subarray, we don't need to loop.
// Simply by subtracting first element of subarray and add the next new element

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  // sum the first n element
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // slide and compare
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
