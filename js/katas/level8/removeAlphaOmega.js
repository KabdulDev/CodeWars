/* 
Author: Karimu Mohammed
Project Name: Remove Alpha Omega
Description: From CodeWars> "It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
"
Date Created: 2020.04.09
Date Modified: 2020.04.09
*/


function removeChar(str){
    return str.substring(1,(str.length-1)); //gotta remember when doing sub string it's not inlcusive at the beginning of the string start closed at the end of the string.
   };

console.log( removeChar("Woman"))
   