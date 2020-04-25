/* 
Author: Karimu Mohammed
Project Name: Mumbling
Description: From CodeWars> "This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
url= https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
"
Date Created: 2020.04.15
Date Modified: 2020.04.19
*/

// const accum = s => {
//     let aSpread = s.split('')
//     let mumble = aSpread[0].toUpperCase();
//     for (let i = 1; i < aSpread.length; i ++){
//         mumble= mumble + "-" + aSpread[i].toUpperCase() + aSpread[i].toLowerCase().repeat(i) ;
//     }
//     return mumble;
// }
const accum = (s) =>
  s
    .split("")
    .map((ltr, i) => ltr.toUpperCase() + ltr.toLowerCase().repeat(i))
    .join("-");

// const a = [1, 2, 3, 4, 5];

// const aTimes2 = a.map(x => x * 2) // [2,4,6,8, 10]
// const aOdds = a.filter(x => x % 2)
// const b = a.concat(6)
//coding is really hard; yes

// const isAllPositive = a.every(el => el > 0) // true

console.log(accum("Jagged"));

//Return to this one for reviewing sakes
