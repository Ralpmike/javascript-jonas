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
      alert('Checked in');
    } else {
      alert('Wrong passport!');
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
