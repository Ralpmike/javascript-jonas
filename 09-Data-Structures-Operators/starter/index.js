'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

//* Swapping variables in JavaScript can be done using destructuring assignment.
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary, temp);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0); // ['Garlic Bread', 'Pizza']

//? returns an array with the first element being the starter and the second being the main course
console.log(starter, mainCourse);

//? Nested destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // i = 2, j = [5, 6]
// console.log(i, j); // 2, [5, 6]

const [i, , [j, k]] = nested; // i = 2, j = 5, k = 6
console.log(i, j, k); // 2, 5, 6

//? Default values in destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8, 9, 1

//! Object destructuring example

//? the order of the properties in the object does not matter

const { name, openingHours, categories } = restaurant;

//? to rename variables during destructuring, you can use the following syntax

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//? setting default values during destructuring

const { menu = [], starterMenu: starters = [] } = restaurant;

//? Mutating variables during destructuring
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // destructuring assignment with mutation

console.log(a, b);

//? Nested object destructuring

const {
  fri: { open: o, close: c },
} = openingHours; // destructuring the 'fri' property from 'openingHours'
console.log(o, c); // { open: 11, close: 23 }
