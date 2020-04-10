/* 
Author: Karimu Mohammed
Project Name: String Repeat
Description: From CodeWars> "Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
"
Date Created: 2020.04.010
Date Modified: 2020.04.10
*/

function repeatStr (n, s) {
    var repeatStr = ""
    for (let i=0; i<n; i++){
        repeatStr = repeatStr + s;
    }
    return repeatStr;
  }

/*   
Test cases
console.log(repeatStr(3,"Ma"));
console.log(repeatStr(2,"Da"));
console.log(repeatStr(5,"Viva La ")); */

/* 
Dope Alternative Code Wars Solutions and Why I like them

function repeatStr (n, s) {
  return s.repeat(n);
}
//This repeat function seems to handle this request perfectly and as if it were designed to meet the task. Want to feel comfortable utilizing.


repeatStr = (n, s) => s.repeat(n); 
//This and the below code are the same except for the const. The const is slightly better practice but this one lacks purely stylisticly so that the code can be made shorter.

const repeatStr = (n,s) => s.repeat(n) ;

//I like the above because it's a pretty direct oneliner and it follows best practice of storing a functional expression in a non-mutable variable "const"; In other words it's cool see a function shoved in a constant not ever changing. The arrow function and ternary thrown in are cool little bonuses.

*/