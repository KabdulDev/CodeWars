/* 
Author: Karimu Mohammed
Project Name: Number To String
Description: From CodeWars> "We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`
"
Date Created: 2020.04.09
Date Modified: 2020.04.09
*/

function numberToString(num) {
    return '' + num;
    
  }

/* 
Dope Alternative Code Wars Solutions and Why I like them

function numberToString(num) {
  return num.toString();
}
I like this because it helpfully lets me no about the toString function for data type conversion


function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}
Similar to the above function but this type with the String(arg) method


*/