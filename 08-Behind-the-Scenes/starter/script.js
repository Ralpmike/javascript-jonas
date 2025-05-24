'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Michael';
      const str = `Oh, you're a millenail, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New output';
    }
    // console.log(add(2, 3));

    // console.log(str);
    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = 'Raphael';
calcAge(1991);

const profile = {
  name: 'Raphael',
  birthYear: 1991,

  calcAge: function () {
    let age = () => {
      console.log(this);
      console.log(2037 - this.birthYear);
    };

    age();
  },
};

profile.calcAge();

try {
  console.log('Instance of Error');
  console.log(x);
} catch (error) {
  console.log('Error message', error.name);
  console.error({ error });
}

// console.log(this);

// function calcAge(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }

const peter = {
  name: 'Peter',
  year: 1996,
  evaluateAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

peter.evaluateAge();

// ? the Argument keyword

const addExpr = function (a, b) {
  console.log('regular function', arguments);
  return a + b;
};

addExpr(2, 5);

const addArrow = (a, b) => {
  try {
    console.log('arrow function', arguments);
    return a + b;
  } catch (error) {
    console.log('Error:', error.message);
    // console.error({ error });
  }
};
addArrow(2, 5);

//?Memory Management: the Stack and the Heap memory -- primitive and reference types(objects)

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Peter'],
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

//? Copying objects

//*shallow copy
const jessicaCopy = { ...jessica }; //?the spread does a shallow copy

jessicaCopy.lastName = 'Smith';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', jessicaCopy);

jessicaCopy.friends.push('Bob');
jessicaCopy.friends.push('Alice');
console.log('Before marriage:', jessica);
console.log('After marriage: ', jessicaCopy);
//? Object.assign() method

//?Deep copy
const jessicaDeepCopy = structuredClone(jessica);
