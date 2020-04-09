/* 
Author: Karimu Mohammed
Project Name: Return Negative
Description: From HackerRank: "In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
"
Date Created: 2020.04.08
Date Modified: 2020.04.08
*/

function makeNegative(num) {
    return (num>0 ? num * -1 : num) //Wanted to setup a simple ternary expression to handle creating a negative number when a number is greater than 0
}

/* 
Dope Alternative Code Wars Solutions and Why I like them


function makeNegative(num) {
  return -Math.abs(num);
}
I like the above because it illustrates using the Math library in JavaScript which is really hopeful to no

makeNegative = n => -Math.abs(n)
I like the above because it uses a simple pass through function as reviewed with some of the React code I've worked on before

*/

/* 
Testing console log to view in node output
console.log(makeNegative(-3))
console.log(makeNegative(3))
console.log(makeNegative(0))
console.log(makeNegative(-21))
 */