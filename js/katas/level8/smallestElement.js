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
Date Modified: 2020.04.08
*/

//class SmallestIntegerFinder {
    function findSmallestInt(args) {
        let small = args[0];
        for (let i=0; i<args.length; i++){
            small < args[i] ? small : small=args[i];
            /* console.log(i);
            console.log(small) */
        }
        return small
    }
    


  //}
  console.log(findSmallestInt([1,2,3,-6,9,-2]))
  console.log(findSmallestInt([0, 200, 5, 30]))