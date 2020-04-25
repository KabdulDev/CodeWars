/* 
Author: Karimu Mohammed
Project Name: Exes and Ohs
Description: From CodeWars> "Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
url= https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
"
Date Created: 2020.04.24
Date Modified: 2020.04.24
*/

const XO = (s) => {
  //Pseudo Code Time, What do we wanna do? Take a string and see if it has the same number of X's and O's(case insensitive) and return a boolean of True or false.

  //Steps

  //Step 1 define a function ( or constant) XO that takes s as an argument - done see above

  //Step 2 run a count of X's in the string
  //options to get this, using a basic for loop or using a match regex string - will go with match
  let xCount = s.match(/[x]/gi) == null ? 0 : s.match(/[x]/gi).length;

  //Step 3 run a count of O's in the string
  let oCount = s.match(/[o]/gi) == null ? 0 : s.match(/[o]/gi).length;

  //Return the boolean value of X count === O count
  return xCount === oCount;


  //Next step refactor this into a one liner
};


console.log(XO("Oyoxx"));