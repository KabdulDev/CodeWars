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

var multiples = [];
  
function multsOf3_5(number) {
  if (number == 0) {
      return multiples
      //multiples.reduce();
  } else {
    if (number % 3 == 0) {
      multiples.push(number);
      multsOf3_5(number-1)
    } else if (number % 5 == 0) {
      multiples.push(number);
      multsOf3_5(number-1)
    }
    else{
        multsOf3_5(number-1)
    }
  
  }
}



const solution = (number) => {
  //Psuedo code time everybody. Let's talk this out

  //First get some function (or constant) solution that takes song as an input. -done

  //Second find an array of all the positive multiples of 3 or 5 less than the number passed in a.k.a. create an array of items divisible by 3 or 5 bound by number and 3
/*   let multiples = [];
  
  function multsOf3_5(number) {
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
  
};
/* 
Dope Alternative Code Wars Solutions and Why I like them


//This solution is just smooth and smart as all hell. Need to get my trim game up.



//Super similar to the answer i thought, but their filter is simpler because empty strings evaluate to false, thus Boolean works just fine. Super smart and worth remembering.


*/

console.log(multsOf3_5(23));
