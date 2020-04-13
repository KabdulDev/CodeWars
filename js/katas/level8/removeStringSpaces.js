/* 
Author: Karimu Mohammed
Project Name: Remove String Spaces
Description: From CodeWars> "Simple, remove the spaces from the string, then return the resultant string.

url= https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
"
Date Created: 2020.04.12
Date Modified: 2020.04.12
*/

//Goal was to create a lambda to test solution.
//Making the regex expression was the hardest part. It's  / [flags] /ending flags
const noSpace = x => x.replace(/[/\s]/g,''); 

// Test Cases used and passed with
// console.log(noSpace("My dreams are dying"));
// console.log(noSpace("Olive Juice is naaaasty"));

/* 
Dope Alternative Code Wars Solutions and Why I like them

function noSpace(x){
  return x.replace(/\s/g, '');
}

//I like this function because they made regex work simply and i had to fight it

function noSpace(x){return x.split(' ').join('')}

//I like this function as an alternate way of viewing the problem to split apart the words by the space and then rejoin the new disjointed words

*/

