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
