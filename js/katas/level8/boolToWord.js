/* 
Author: Karimu Mohammed
Project Name: Boolean To Words
Description: From CodeWars> "Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
"
Date Created: 2020.04.010
Date Modified: 2020.04.10
*/


function boolToWord( bool ){
    return bool ? "Yes" : "No";
  }

/* 
Dope Alternative Code Wars Solutions and Why I like them

const boolToWord = bool => bool ? 'Yes' : 'No';

//I like the above because it's a pretty direct oneliner and it follows best practice of storing a functional expression in a non-mutable variable "const"; In other words it's cool see a function shoved in a constant not ever changing. The arrow function and ternary thrown in are cool little bonuses.

*/
