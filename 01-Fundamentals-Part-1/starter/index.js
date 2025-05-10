const js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

40 + 8 - 23 - 10;

let country, continent, population;

country = "Nigeria";
continent = "Africa";
population = 200_000_000;

console.log(country, continent, population);

const DATEOFBIRTH = 1991;

// DATEOFBIRTH = 1992;
// This will throw an error because we are trying to reassign a constant variable

const yearNow = 2027;
const ageRaphael = yearNow - DATEOFBIRTH;
console.log(ageRaphael);

const firstName = "Raphael ";
const lastName = "Ogunyemi";
console.log(firstName + lastName); // Concatenation

const birthYear = "1991";

console.log(Number(birthYear)); // This will convert the string to a number and add 18, resulting in 2009

console.log(birthYear + 18); // This will concatenate the string and the number, resulting in "199118"

let height = 119;

if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
