/* 
Author: Karimu Mohammed
Project Name: Get the Middle Character
Description: From CodeWars> "You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
url= https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
"
Date Created: 2020.04.12
Date Modified: 2020.04.12
*/


//Lambda of the getMiddle function.
// some const getMiddle takes an argument s that returns a ternary expression of when the length of s modulus 2 == 1 (or is odd) that the charact at half the length of the string is returned otherwise will return a substring that starts at 1 less then 1/2 length of string and ends before 1 plus 1/2 the length of the string.
const getMiddle = s => s.length%2==1 ? s.charAt((s.length/2)) : s.substring((s.length/2)-1,(s.length/2)+1);

/* 
Dope Alternative Code Wars Solutions and Why I like them

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//I like this function because i want to know more on how they use the Math library for the ceiling in the substring and it seems to be a clearer solution

function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

//I like this function because it was the clearest and most direct of the solutions

*/