'use strict';

console.log('Lifting weights repetition 1 🏋️‍♀️');

//? Default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers ?? 1;
  // price = price ?? 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 0);
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// console.log(bookings);

const junkFoods = ['🍈', '🍕', '🍅', '🍌', '🍇', '🍑'];

console.log(junkFoods);

console.log(junkFoods.at(-1));

{
  const flight = 'LH234';
  const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
  };

  const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
      console.log('Checked in');
    } else {
      console.log('Wrong passport!');
    }
  };

  // checkIn(flight, jonas);
  // console.log(flight);
  // console.log(jonas);

  const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
  };

  newPassport(jonas);
  checkIn(flight, jonas);

  //? passing by value and passing by reference
}

//? HOF (Higher Order Functions)
{
  const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
  };

  const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  };

  const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
  };

  transformer('JavaScript is the best!', upperFirstWord);
  transformer('JavaScript is the best!', oneWord);
}

'✅', ' 🍉', '🚘';

const high5 = function () {
  console.log('👋');
};

// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

{
  //? Closures: Functions returning other functions
  const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting} ${name}`);
    };
  };

  const greeterHey = greet('Hey');
  greeterHey('Jonas');
  greeterHey('Steven');

  greet('Hello')('Raphael');
}

//*Challenge
{
  // const greet = greeting => {
  //   return name => {
  //     console.log(`${greeting} ${name}`);
  //   };
  // };

  const greet = greeting => name => console.log(`${greeting} ${name}`);

  greet('Hi')('Michael');
}
