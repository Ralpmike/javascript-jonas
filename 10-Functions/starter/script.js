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
