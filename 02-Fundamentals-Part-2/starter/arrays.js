"use strict";

const friends = ["Michael", "Steven", "Peter"];

//? Add elements to the end of the array
const newLenght = friends.push("Jay");

newLenght;

//? Add elements to the beginning of the array
friends.unshift("John");

//? Remove elements from the end of the array
// friends.pop();
const popped = friends.pop();
console.log(popped); //? popped is the removed element

//? Remove elements from the beginning of the array
const shifted = friends.shift();
shifted;

console.log(friends); //? friends is the array after removing the first element

friends.indexOf("Steven"); //? indexOf() returns the index of the first occurrence of the specified element in the array

console.log(friends);
console.log(friends.indexOf("Peter"));

console.log(friends.includes("Steven")); //? includes() returns true if the specified element is found in the array, otherwise false
console.log(friends.includes("Bob")); //? includes() returns true if the specified element is found in the array, otherwise falseq

const profile = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 30,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  location: "Portugal",
  twitter: "@jonasschmedtman",
  hasDriverLicense: true,
};

console.log(
  `${profile.firstName} has ${profile.friends.length} friends, and his best friend is called ${profile.friends[0]}`
);
