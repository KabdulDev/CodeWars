/* 
Author: Karimu Mohammed
Project Name: Is a Square
Description: From CodeWars> "A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
isSquare(-1) returns  false
isSquare(0) returns   true
isSquare(3) returns   false
isSquare(4) returns   true
isSquare(25) returns  true  
isSquare(26) returns  false
url= https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
"
Date Created: 2020.04.14
Date Modified: 2020.04.14
*/

const isSquare = n => (Math.sqrt(n))%1 === 0;
//grabbed Math.sqrt function from the MDN located https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

console.log(isSquare(5));
console.log(isSquare(25));
console.log(isSquare(100));
console.log(isSquare(10));

// console.log(4%1) //=== 0
// console.log(4.5%1) // === to .5; test info to illustrate and prove that i can use non integers % 1 != 0 for a truthy statement


/* 
Dope Alternative Code Wars Solutions and Why I like them

const isSquare = n => Number.isInteger(Math.sqrt(n));

//I like the above because it is more declarative and directly meets needs. It also learned me the Number.isInteger method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger


*/