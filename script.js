'use strict';

// Scoping
function calcAge(birthYear) {
  const age = 2040 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    // const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 % birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Victor';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New Output!!!';
    }
    console.log(str);
    console.log(millenial);
    console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'Gabriel';
calcAge(1997);
// console.log(age);
// printAge();
