// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // optional chaining

// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';

//   console.log(
//     restaurant.openingHours[day]?.open >= 0
//       ? `On ${day}, we open at ${open}`
//       : `On ${day}, we are closed.`
//   );

//   console.log(open);
// }

// console.log(restaurant.orderty?.(0, 1) ?? 'not found');

// // ? Looping through ojects

// //property names
// let properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// for (let day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// // property values

// let values = Object.entries(restaurant.openingHours);

// for (const [day, { open, close }] of values) {
//   console.log(day, open, close);
// }
// // console.log(day, open, close);
// console.log(values);
// // object destructuring

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurant.menu);

// const { menu = [], starterMenu = [] } = restaurant;

// console.log(menu, starterMenu);
// // Array destructuring

// console.log(restaurant.order(2, 0));

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// //
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu1);

// let str = 'raphael';

// let arr = [...str];
// console.log(arr);

// console.log(...str);

// const { sat, ...weeks } = restaurant.openingHours;
// console.log({ ...sat, ...weeks });

// const add = (...number) => {
//   let sum = 0;
//   for (let num of number) {
//     sum += num;
//   }

//   console.log(sum);
// };
// add(2, 3);
// add(1, 2, 34);
// add(2, 4, 6, 7, 8, 9, 5);
// add(3, 7, 8, 9, 4, 5, 2, 5, 6);

// const x = [23, 5, 7];

// add(...x);

// // nullish coalescing operator
// restaurant.numGuest = 0;

// const guest = restaurant.numGuest || 10;
// console.log(guest);

// // nullish coalescing operator: null or undefined
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// let guest1 = {
//   name: 'Raphael',
//   age: 26,
//   location: '',
// };

// let guest2 = {
//   name: 'John',
//   age: 30,
// };

// guest1.location ||= 'greenland';
// guest2.location ||= 'finland';

// console.log(guest1, guest2);

// // console.log(menu1);

// for (let [i, item] of menu1.entries()) {
//   console.log(`${i + 1} : ${item}`);
// }

// // Advanced Object Literals

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // const [player1, player2] = game.players;

// // const [gk, ...fieldPlayers] = player1;
// // // console.log(gk, fieldPlayers);

// // let allPlayers = [...player1, ...player2];

// // let players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// // // console.log(players1Final);

// // // const { team1, draw, team2 } = game.odds;
// // // or
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;

// // console.log(team1, draw, team2);

// // function printGoals(...players) {
// //   for (let player of players) {
// //     console.log(player);
// //   }

// //   console.log(`Total number of goals: ${players.length}`);
// // }

// // printGoals(...game.scored);
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// // team1 < team2 && console.log('Team 1 is more likely to win');

// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // question  1

// // let [...players1] = game.scored.entries();
// // console.log(players1);

// // for (let [i, scorer] of game.scored.entries()) {
// //   console.log(`Goal ${i + 1}: ${scorer}`);
// // }

// // console.log(Object.values(game.odds));

// // // Question 2
// // let sum = 0;
// // let average;
// // for (let odd of Object.values(game.odds)) {
// //   sum += odd;
// //   average = sum / Object.values(game.odds).length;
// // }

// // console.log(average);

// // console.log(Object.entries(game));

// // // Question 3
// // for (const [team, odd] of Object.entries(game.odds)) {
// //   console.log(team, odd);
// //   team === 'x'
// //     ? console.log(`Odd of draw: ${odd}`)
// //     : console.log(`
// //     Odd of victory ${game[team]}: ${odd}`);
// // }

// // let scorers = {};

// // for (let player of game.scored) {
// //   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// // }
// // console.log(scorers);

// // ? set is a collection of unique values, we can use it as an object with unique values. they can not have duplicate values.

// // const orderSet = new Set([
// //   'Pasta',
// //   'Pizza',
// //   'Pizza',
// //   'Risotto',
// //   'Pasta',
// //   'Pizza',
// //   'Pasta',
// // ]);

// // console.log(orderSet);
// // console.log(orderSet.size);
// // console.log(orderSet.has('Pizza'));
// // console.log(orderSet.has('Bread'));

// // orderSet.add('Garlic bread');
// // orderSet.add('Garlic bread');
// // orderSet.delete('Risotto');
// // // orderSet.clear();
// // console.log(orderSet);

// // for (const order of orderSet) console.log(order);

// // orderSet.keys();

// // // example

// // const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// // const staffUnique = [...new Set(staff).entries()];

// // console.log(staffUnique.join(', '));

// // // Maps

// // // ? Map is a collection of key value pairs
// // // ? it can use any type of data as a key and any type of data as a value

// // const rest = new Map();

// // rest.set('name', 'Classico Italiano');
// // rest.set(1, 'Firenze, Italy');
// // console.log(rest.set(2, 'Lisbon, Portugal'));

// // rest
// //   .set(['open', 'close'], [11, 23])
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// //   .set('tags', ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']);

// // console.log(rest);

// // // ? Interacting with Maps
// // const question = new Map([
// //   ['question', 'What is the best programming language in the world?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'JavaScript'],
// //   ['correct', 3],
// //   [true, 'Correct 🎉'],
// //   [false, 'Try Again!'],
// // ]);

// // console.log(question);

// // // * converting object to map

// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // // Quiz app
// // console.log(question.get('question'));
// // for (const [key, value] of question) {
// //   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// // }

// // // const answer = +prompt('Your answer');

// // const answer = 3;
// // console.log(answer);

// // // let correctAnswer = question.get('correct');
// // // if (answer == correctAnswer) {
// // //   console.log(question.get(true));
// // // } else {
// // //   console.log(question.get(false));
// // // }

// // console.log(question.get(question.get('correct') === answer));

// // //convert  map to array

// // console.log([...question]);

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// for (const [key, value] of gameEvents) {
//   console.log(
//     key <= 45
//       ? `[FIRST HALF] ${key}: ${value}`
//       : `[SECOND HALF] ${key}: ${value}`
//   );
// }

// const s = 'banana';
// console.log(s.slice(-1));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value.trim();
  console.log(text);

  let rows = text.split('\n');
  // const newString = row.split('_');
  // let counter = '';
  console.log(Object.entries(rows));
  for (const [i, row] of rows.entries()) {
    console.log(i, row);
    const [first, second] = row.toLowerCase().trim().split('_');
    let result = `${(
      first + second.replace(second[0], second[0].toUpperCase())
    ).padEnd(20)}`;
    console.log(result + '✅'.repeat(i + 1));
  }
  // for (const string of row) {
  //   const [first, second] = string.toLowerCase().trim().split('_');
  //   console.log(
  //     `${(first + second.replace(second[0], second[0].toUpperCase())).padEnd(
  //       20
  //     )}${(counter += '✅')}`
  //   );
  // }
});
/*
underscore_case;
first_name;
Some_Variable;
calculate_AGE;
delayed_departure;

*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type
    .split('_')
    .join(' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);

  console.log(output);
  // console.log(
  //   `${type.startsWith('_Delayed') ? '🔴' : ''}${type
  //     .replaceAll('_', ' ')
  //     .trim()}`
  // );
}
