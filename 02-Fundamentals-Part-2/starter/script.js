"use strict";

// const yearUntilRetirement = (birthYear) => {
//   const age = 2023 - birthYear;
//   const retirementAge = 65;
//   const yearsLeft = retirementAge - age;

//   if (yearsLeft > 0) {
//     return `You have ${yearsLeft} years left until retirement.`;
//   } else {
//     return "You are already retired.";
//   }
// };

// const result = yearUntilRetirement(1991);

// console.log(result);
/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => {
  const sum = score1 + score2 + score3;

  return sum / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
  } else return "No team wins...";
}

// Test data 2
let scoreDolphins = calcAverage(43, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
let winner = checkWinner(scoreDolphins, scoreKoalas);
console.log(scoreKoalas, scoreDolphins, winner);

// Test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
winner = checkWinner(scoreDolphins, scoreKoalas);
console.log(scoreKoalas, scoreDolphins, winner);
