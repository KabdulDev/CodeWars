/* 
Author: Karimu Mohammed feat. Muhammad Alam
Project Name: Vowel Count
Description: From CodeWars> "Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

url= https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
"
Date Created: 2020.04.11
Date Modified: 2020.04.11
*/
// regexr.com resource for constructing regex
// regulex.com resource for deconstructing regex

//Original setup for my Code; discussed with MA and we reviewed the utility of using the lambda format (one line input output code, in this instance the const arrow function format)
// function getCount(str) {
//   var vowels = ['a','e','i','o','u'];
//   var vowelsCount = 0;
  
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])){ //Discussed with MMA and reviewed the includes arrary function
//       vowelsCount += 1
//     }
//   }
//   
  
//   return vowelsCount;
// }

//re-writing earlier code written in my understanding utilizing the const arrow methodology. Also review the problems that can come with improper scoping. // closure

var vowels = ['a', 'e', 'i', 'o', 'u'];

const getCount = str => {
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])){
          vowelsCount += 1 ;
      }
  }
  return vowelsCount;
}

// Solution created by MMA that illustrates that const arrow methodology of declaring a function; More in line with the declarative model of functional code. More often than not the model you will be using in code.

// const vowels =  ['a','e','i','o','u'];

// const isVowel = char => vowels.includes(char);

//  The above and below isVowel are algroithmic synonyms but the buttom one is explictly declaring the steps that are behind the hood of the .includes function

// const isVowel = character => {
//     for (let i = 0; i < vowels.length; i++) {
//       if (character === vowels[i]) {
//         return true;
//       }
//     }
//     return false;
//   }
// const vowelChecker = letter => isVowel(letter)
// const getCount = str => str.split('').filter(vowelChecker).length; 


//lambda created by MMA to illustrate shortening the code and regex. The c.match(/[aeiou]/) uses regex to search through c for aeiou 
// const getCount = str => str.split('').filter(c => c.match(/[aeiou]/)).length;


// Primitives => Numbers, Strings, Booleans, null, undefined
// 'passed by VALUE'
// const a = 4;
// const b = 'karimu'

// Object => Arrays, Objects, Classes etc
// 'passed by REFERENCE'
// const arr = [1,2,3,4,5];
// arr => address

//lambda further simplified by MMA to use spread on the string array. [...str] basically means the same as str.split(''). In other words [...elementWithLengthGreaterThan1] makes an array consisting of the value at each index, at 0 it returns an empty array
// const getCount = str => [...str].filter(c => c.match(/[aeiou]/)).length;



