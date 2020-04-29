/* 
Author: Karimu Mohammed
Project Name: Multiples of 3 or 5
Description: From CodeWars> "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net
url= https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
"
Date Created: 2020.04.27
Date Modified: 2020.04.27
*/

const solution = (number) =>
  Array.from({ length: number }, (v, i) => i)
    .filter((num) => num % 3 == 0 || num % 5 == 0)
    .reduce((totalVal, currentVal) => totalVal + currentVal, 0);

/* 
//Psuedo code time everybody. Let's talk this out

  //First get some function (or constant) solution that takes song as an input. -done

  //Second find an array of all the positive multiples of 3 or 5 less than the number passed in a.k.a. create an array of items divisible by 3 or 5 bound by number and 3 -- 
  //On 2nd thought with a nigth of sleep, figured let's break this down further. Second - a) Make an array of items from 0 to BELOW THE number PASSED IN -- this got me first submittal

  let multiples = Array.from({length: number}, (v, i) => i); // referenced from Stack Overflow that from would be helpful here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  

  //Second -b) filter that given array to remove to contain only items divisible by 3 or 5;
  let multsOf3_5 = multiples.filter( num => (num % 3 == 0) || (num % 5 == 0) );
  

  //Add all of the elements of the array to get the final sum. //Reviewing the test cases and submittal 
  return multsOf3_5.reduce((totalVal, currentVal) => totalVal + currentVal);

  //One liner version coming now

   */

/*  function multsOf3_5(number) {
    if (number == 0) {
        return multiples
        //multiples.reduce();
    } else {
      if (number % 3 == 0) {
        multiples.push(number);
      } else if (number % 5 == 0) {
        multiples.push(number);
      }
    multsOf3_5(number-1)
    }
  }
  multsOf3_5(number) */

//Reduce that array with addition to get final result

/* 
Dope Alternative Code Wars Solutions and Why I like them

function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
//This solution is a nice return of the for loop gang.


function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}
//Interested in their use of the Math methods, even though I don't currently understand them.


solution= n=> n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)
//Cleaner version of my solution. I like how they chose to solve for the 0 case. This one is syntactically interesting


*/

console.log(solution(0));
