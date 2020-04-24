/* 
Author: Karimu Mohammed
Project Name: High and Lows
Description: From CodeWars> "In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
url= https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
"
Date Created: 2020.04.19
Date Modified: 2020.04.19
*/

function highAndLow(numbers) {
  // ... "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"
  const nums = numbers
      .split(" ")
      //.map(el => Number(el)); // necessary because otherwise would be evaluating string value instead of int value '5.567'
      .map(el => +el);

  // way 1
  let min = nums[0],
    max = nums[0];
  for (let thing of nums) {
    min = min > thing ? thing : min; // '6' '5000000'
    max = max < thing ? thing : max;
  }

  // way 2
  // let min = nums.reduce((a, b) => a < b ? a : b, nums[0]),
  //   max = nums.reduce((a, b) => a > b ? a : b, nums[0])

  // way 3
  // const { max, min } = nums.reduce(
  //   (a, b) => ({
  //     max: a.max < b ? b : a.max,
  //     min: a.min > b ? b : a.min,
  //   }),
  //   { max: nums[0], min: nums[0] }
  // );

  return `${max} ${min}`;
}

// const max = a.reduce((a, b) => (a > b ? a : b), a[0]);
// console.log(max);

// console.log(
//   highAndLow("1 2 3 4 5"), // return "5 1"
//   highAndLow("1 2 -3 4 5"), // return "5 -3"
//   highAndLow("1 9 3 4 -5") // return "9 -5"
// );

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); // '542 -214'
