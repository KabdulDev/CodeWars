// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    // ...
    const isEven = number % 2 == 0;
    if (isEven) {
        return "Even";
    }
    else {
        return "Odd";
    }
  }

console.log(even_or_odd(17))
console.log(even_or_odd(19))
console.log(even_or_odd(22))
console.log(even_or_odd(4))
console.log(even_or_odd(0))
console.log(even_or_odd(-17))