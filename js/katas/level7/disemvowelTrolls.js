/* 
Author: Karimu Mohammed
Project Name: Disemvowel Trolls
Description: From CodeWars> "Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
url= https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
"
Date Created: 2020.04.13
Date Modified: 2020.04.13
*/

//Turned this into a lambda. Regex again the hardest part here. Discovered that the /g flag you be right after the match token even having a space then the square bracket made the line perform differently. Also discovered the i flag for case insensitivity
const disemvowel = str => str.replace(/[aeiou]/gi, "");

//What I used for test case. Will eventually actually start creating proper tests internally.
//console.log(disemvowel("The dog jumped over the moon"));

/* 
Dope Alternative Code Wars Solutions and Why I like them

function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}

//I found the above response super interesting and was left with a question of "Why solve it this way". To get my answer your boy went to the Code Wars comments on this solution and reposted below.

This is a short circuit operation, an OR specifically. You can have several conditions, this will ignore all 'falsy' conditions, and we use the first true condition. Example:

This will assign 4 to the var f:

var a; // undefined (falsy value)
var b = null; // null (falsy value)
var c = undefined; undefined (falsy value)
var d = 4; // number (NOT falsy)
var e = 'five'; // assigment short circuits before reaching here

var f = a || b || c || d || e;

So this solution checks first if str has something assignet to it (the str before ||), if it has nothing, it evaluates to a falsy (undefined) value, then javascript checks for '', which is an empty string but is not undefined (please double check this), executes the RegExp with this empty string and returns the value.

*/