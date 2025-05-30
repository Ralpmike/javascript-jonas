'use strict';
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[2]]: {
    open: 11,
    close: 23,
  },
  [weekDays[4]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //? ES6 enhanced object literals
  openingHours,
  // Hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//? Object keys: Property names
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

//? Object values: Property values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// for (const [open, close] of Object.entries(values)) {
//   console.log(open, close);
// }
// // let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// //* Swapping variables in JavaScript can be done using destructuring assignment.
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary, temp);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0); // ['Garlic Bread', 'Pizza']

// //? returns an array with the first element being the starter and the second being the main course
// console.log(starter, mainCourse);

// //? Nested destructuring

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested; // i = 2, j = [5, 6]
// // console.log(i, j); // 2, [5, 6]

// const [i, , [j, k]] = nested; // i = 2, j = 5, k = 6
// console.log(i, j, k); // 2, 5, 6

// //? Default values in destructuring
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8, 9, 1

// //! Object destructuring example

// //? the order of the properties in the object does not matter

// const { name, openingHours, categories } = restaurant;

// //? to rename variables during destructuring, you can use the following syntax

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// //? setting default values during destructuring

// const { menu = [], starterMenu: starters = [] } = restaurant;

// //? Mutating variables during destructuring
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); // destructuring assignment with mutation

// console.log(a, b);

// //? Nested object destructuring

// const {
//   fri: { open: o, close: c },
// } = openingHours; // destructuring the 'fri' property from 'openingHours'
// console.log(o, c); // { open: 11, close: 23 }

// //* Spread operator example
// //? The spread operator is used to unpack elements from an array or properties from an object.
// //*Spread operator is used to merge arrays or objects
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // This creates a nested array
// const newArr = [1, 2, ...arr];

// console.log(badNewArr);
// console.log(newArr); // [1, 2, 7, 8, 9]

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];

// //? Copying arrays
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']
// const menuCombined = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuCombined); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto', 'Gnocchi']

// //?iterables: arrays, strings, maps, sets
// const str = 'Raphael';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); // ['R', 'a', 'p', 'h', 'a', 'e', 'l', ' ', 'S.']

// console.log(...str);

// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients); // Here we spread the ingredients array into the function call

// //? Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// //?copying objects using spread operator

// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); // Ristorante Roma
// console.log(restaurant.name); // Classico Italiano

// //? Rest operator

// //? The rest operator is used to collect multiple elements into an array.
// const arr2 = [1, 2, ...[3, 4]]; // Spread operator
// const [x, y, ...others] = [1, 2, 3, 4, 5]; // Rest operator
// console.log(x, y, others); // 1, 2, [3, 4, 5]

// //? Destructuring with rest operator
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //? Rest operator in object destructuring
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// //? Rest operator in function parameters
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// //? short circuiting with logical operators
// console.log('--- OR ---');
// //*OR(||) operator looks for the first truthy value
// console.log(3 || 'Raphael'); // 3

// //?falsy values: 0, '', undefined, null, NaN

// console.log('--- AND ---');

// //*AND(&&) operator looks for the first falsy value
// console.log('' && 'Raphael'); // ''

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// console.log('--- Nullish Coalescing Operator ---');
// //? The nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined, unlike the OR operator which considers all falsy values.

// restaurant.numGuests = 0; // simulating a case where numGuests is 0
// const guests1 = restaurant.numGuests || 10; // 10 because 0 is falsy
// console.log(guests1); // 10
// const guests2 = restaurant.numGuests ?? 10; // 10 because 0 is nullish
// console.log(guests2);
// //*Nullish: null and undefined (Not 0 or '')

// //? Logical assignment operators

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0, // simulating a case where numGuests is 0
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //* Logical assignment operators combine logical operators with assignment.
// //? The logical OR assignment operator (||=) assigns a value only if the left-hand side is falsy.

// // rest2.numGuests = rest2.numGuests || 10; // 10 because rest2.numGuests is undefined
// // rest1.numGuests = rest1.numGuests || 10;

// // rest2.numGuests ||= 10;
// // rest1.numGuests ||= 10;

// //* The logical nullish assignment operator (??=) assigns a value only if the left-hand side is null or undefined.
// rest2.numGuests ??= 10; // rest2.numGuests is undefined, so it gets assigned 10
// rest1.numGuests ??= 10; // rest1.numGuests is 0, so it remains 0

// // console.log(rest1);
// // console.log(rest2);

// //* The logical AND assignment operator (&&=) assigns a value only if the left-hand side is truthy.
// // rest1.owner = rest1.owner && 'Anonymous'; // rest1.owner is undefined, so it remains undefined
// // rest2.owner = rest2.owner && 'Anonymous'; // rest2.owner is 'Giovanni Rossi', so it gets assigned 'Anonymous'
// // console.log(rest1, rest2);
// rest1.owner &&= 'Anonymous'; // rest1.owner is undefined, so it remains undefined
// rest2.owner &&= 'Anonymous'; // rest2.owner is 'Giovanni Rossi', so it gets assigned 'Anonymous'
// console.log(rest1, rest2); // rest1.owner remains undefined, rest2.owner becomes 'Anonymous'

//?Set data structure
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// let size = ordersSet.size;
// console.log(size); // 4, because 'Pizza' and 'Pasta' are duplicates and only counted once
// console.log(ordersSet.has('Pizza')); // true

// let newSet = ordersSet.add('Garlic Bread');

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
  'avocado',
]);

const mexicanFoods = new Set([
  'tacos',
  'tomatoes',
  'beans',
  'garlic',
  'rice',
  'tortillas',
  'avocado',
]);

//?Intersection: The intersection method returns a new Set containing the values that are present in both sets.
const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('intersection', commonFoods); // Set { 'tomatoes', 'garlic' }

console.log([...commonFoods]);

//?Union: The union method returns a new Set containing all the values from both sets.

const italianMexicanFoods = italianFoods.union(mexicanFoods);

console.log('union', italianMexicanFoods);

//?Difference: The difference method returns a new Set containing the values that are present in the first set but not in the second set.
const mexicanFoodsOnly = mexicanFoods.difference(italianFoods);

// console.log('mexicanFoods:', [...mexicanFoods]);
// console.log('italianFoods:', [...italianFoods]);
// console.log('mexicanFoodsOnly', mexicanFoodsOnly);

//*symmetricDifference: The symmetricDifference method returns a new Set containing the values that are present in either set, but not in both sets.

const mexicanFoodsOnly2 = mexicanFoods.symmetricDifference(italianFoods);
// console.log('mexicanFoods:', [...mexicanFoods]);
// console.log('italianFoods:', [...italianFoods]);
// console.log('mexicanFoodsOnly2', [...mexicanFoodsOnly2]);

//! Map data structure: a collection of key-value pairs

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

rest.set(2, 'Lisbon, Portugal');

console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open!

const time = 9;

console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are open!

//? operations with Map

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct :D'],
  [false, 'Try again!'],
]);

console.log(question);

//* Creating maps from objects

const newMaps = new Map(Object.entries(openingHours));
// console.log(...newMaps);

//* Maps: Iteration

//?Qusetion
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// let answer = prompt('Your answer');

let answer = 3;
console.log(question.get(Number(answer) === question.get('correct')));
// console.log(asnwer === question.get('correct'));

// const result = answer === true ? question.get(true) : question.get(false);
// console.log(result);

//? coverting map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
