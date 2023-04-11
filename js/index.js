// *Iteration 1: Names and Input

let hacker1 = "Álvaritu";

console.log(`The drivers's name is ${hacker1}`);

let hacker2 = "Álvaritu";

console.log(`The navigator's name is ${hacker2}`);

// *Iteration 2: Conditionals

const hacker1Char = hacker1.length - 1;
const hacker2Char = hacker2.length - 1;
const hackerBothCharNames = hacker1.length === hacker2.length;

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Char} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Char} characters. or`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hackerBothCharNames} characters!.`
  );
}

// *Iteration 3: Loops

let newDriversName = "";
for (i = 0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName);

// 3.2
let newNavigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorName += hacker2[i];
}
console.log(newNavigatorName);

// 3.3
if (hacker1 > hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 < hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
