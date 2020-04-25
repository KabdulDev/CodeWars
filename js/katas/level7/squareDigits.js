/* 
Author: Karimu Mohammed
Project Name: Square Digits
Description: From CodeWars> "Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer
url= https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
"
Date Created: 2020.04.24
Date Modified: 2020.04.24
*/

const squareDigits = num => Number(num.toString().split('').map(i=> i*i).join(''));
    //Psuedo Code breakdown
    //Goal of code: take some number and square all of the digits in that number and concatenate all of the results into one super number
    //take num as an argument of squareDigits - done


    /* //split the value of num into an array with each single digit being it's own element - done
    let singleDigits=num.toString().split('');
    //square each digit in array (can act on each element individually via a for loop or through a map)
    let squaredDigits = singleDigits.map(i => i*i);
    //use join to return one big happy family
    squaredDigits.join('');
    //ensure that returned family is an integer - Yay! - had to review parseInt, but it worked - 
    return Number.parseInt(squaredDigits.join(''), 10); 
    Now let's make this cleaner!
    */

    //Let's combine All of the above into 1 line - after searching docs f

    //Number(num.toString().split('').map(i=> i*i).join(''));

/* 
Dope Alternative Code Wars Solutions and Why I like them

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

//I like the above because of the alternate way of handling type conversion with the starting +; simplified things greatly
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger


*/

    


console.log(squareDigits(8654));