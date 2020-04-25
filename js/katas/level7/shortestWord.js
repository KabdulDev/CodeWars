/* 
Author: Karimu Mohammed
Project Name: Shortest Word
Description: From CodeWars> "Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
url= https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
"
Date Created: 2020.04.24
Date Modified: 2020.04.24
*/

const findShort = s => s.split(" ").map(i => i.length).sort((a,b) => a-b)[0];

    //Psuedo Code description of problem

    //some function that takes in a string - done(technically here a constant but it's equivalent for current usecase)
/* 
    //Take string and break it into seperate words
    let words = s.split(" ");

    //Get length of each of the seperate words
    let wordLengths = words.map(i => i.length );

    //Return length of smallest word - could for loop inside of the wordLengths and constantly compare value and lower them based on array size, but there should be a findMin method or something similar
    return wordLengths.sort((a,b) => a-b)[0]; //fun note, at first tried with min function and no dice there; I know there is a javascript method to find the minimum value in an array but while searching array and number methods i figured I could use sort and then find the 0 elements in a properly sorted array - which I imagine what a proper min function would do any way

     */
    //Let's break this into a one-liner!

/* 
Dope Alternative Code Wars Solutions and Why I like them

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

//I like the above because of they use the vastly simpler Math.min also a good use and reminder of spreader


const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

  //I like the above because it's a great reminder to constantly format code and make sure it's pretty


*/




console.log(findShort("Does any one have three dollars for meek"));