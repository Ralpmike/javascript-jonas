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

{
  //?Apply and bind and call methods
  const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };

  lufthansa.book(239, 'Raphael Michael');
  lufthansa.book(635, 'Maria Bush');
  // console.log(lufthansa.bookings);

  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };

  const book = lufthansa.book;

  eurowings.book = book;

  //Does not work
  // book(23, 'Sarah Cooper');
  book.call(eurowings, 23, 'Sarah Cooper');
  book.call(lufthansa, 239, 'Mary Johnson');
  console.log(eurowings);
  console.log(lufthansa);
  // console.log(eurowings.bookings);
  // console.log(lufthansa.bookings);

  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };

  book.call(swiss, 583, 'Mary Cooper');
  // console.log(swiss.bookings);
  //? Apply method
  const flightData = [583, 'George Cooper'];
  book.apply(swiss, flightData);
  // console.log(swiss.bookings);

  //?The modern way to use the apply method is to use the call method with the spread operator
  book.call(swiss, ...flightData);

  //? The bind method
  const bookEW = book.bind(eurowings);
  const bookLH = book.bind(lufthansa);
  const bookLX = book.bind(swiss);

  bookEW(23, 'Steven Williams');
  bookEW(23, 'James Bond');

  //*Partial application means that a part of the application is already prepared or predefined
  const bookEW23 = book.bind(eurowings, 23);
  bookEW23('Raphael Michael');
  bookEW23('Maria Bush');

  //? with event listeners
  lufthansa.planes = 300;
  lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
  };

  document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

  //? parial application

  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));

  const addVAT = addTax.bind(null, 0.23);
  console.log(addVAT(100));
  console.log(addVAT(23));

  function addTaxRate(rate) {
    return function (value) {
      return value + value * rate;
    };
  }

  const addVAT2 = addTaxRate(0.23);
  console.log(addVAT2(150));
  console.log(addVAT2(50));
}

{
  //? Challenge #2
  // Coding Challenge #1

  /* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

  const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
      const answer = prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      ); // What is your favourite

      if (!answer || answer.length > 1 || isNaN(Number(answer))) {
        alert('Enter a valid option');
      } else if (Number(answer) <= 3 && Number(answer) >= 0) {
        const answerTypeChange = +answer;
        this.answers[answerTypeChange]++;
      } else {
        alert('Choose from the options listed!');
      }

      // console.log('answer:', this.answers);
      this.displayResults();
    },

    displayResults(type = 'array') {
      return type === 'string'
        ? console.log(this.answers.join(', '))
        : console.log(this.answers);
    },
  };

  // poll.registerNewAnswer();

  document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

  const testData1 = { answers: [5, 2, 3] };
  const testData2 = [1, 5, 3, 9, 6, 1];
  const displayResult = poll.displayResults.bind(testData1, 'string');
  console.log(displayResult());
  // displayResult(testData1, 'string');
}

{
  //?IIFE
  const runOnce = function () {
    console.log('This will never run again');
  };
  runOnce();
  (function () {
    console.log('This will never run again 1');
  })();
}
