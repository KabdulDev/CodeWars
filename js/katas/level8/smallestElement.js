/* 
Author: Karimu Mohammed
Project Name: Smallest Element
Description: From CodeWars> "Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
"
Date Created: 2020.04.08
Date Modified: 2020.04.09
*/

class SmallestIntegerFinder {
    findSmallestInt(args) { //Since this method is alled without static this is a Public instance Method. These methods will than be called off of new specific objects of the class. Like the instance we see below for testing.
        let small = args[0];
        for (let i=0; i<args.length; i++){
            small < args[i] ? small : small=args[i];
        
        }
        return small
    }
    


  }

  //For the record and for testing. An exhibition of the Public instance Method seen above.
 /*  
const instance = new SmallestIntegerFinder
console.log(instance.findSmallestInt([1,2,3,-6,9,-2])) 
*/

//Dope Alternative CodeWars Solutions -Note to Self: All of the elegant solutions make it clear that it's necessary to review the Math library as well as the sort and reduce  methods
/* 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
I like this because it's simple and to the point  gets the minimum from the array


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}
I like for some reasons as above, just alternate way to get there.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
    return a - b; } )
    return args[0];
  }
}

I like this because of the use of the sort method to organize the elements and then just return the the element at 0. Also the function within the function is a useful view of the solution to potentiallly ape.


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function(prev, curr, index, array) {
      return prev < curr ? prev : curr;
    });
  }
}


*/
  