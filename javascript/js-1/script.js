// HTML - struktura i sodrzina
// CSS  - stiliziranje
// JS   - interaktivnost

// Web strana     - staticka, prinesuva nekoja sodrzina kon korisnikot
// Web aplikacija - dinamicka, -||- plus ovozmozuva nekakva interakcija

// Javascript - skriptiracki/programski jazik koj se koristi na webot

// Primeni

// Web apps (JS, React, Angular, Vue, Svelte)
// Desktop apps (electron)
// Mobile apps (React native)
// Backend apps (Node js)

// Integrate with AI

// Node js - javascript runtime environment (okolina za razvoj)

console.log("Zdravo decki!");

// Variables (promenlivi)

// Basic Data types (podatocni tipovi)
// string
// number
// boolean - (true, false)

// null
// undefined

let ime = "Ognen";
let vozrast = 18;

// konkatanacija - concatenation
console.log("Zdravo decki! Jas sum " + ime + ", imam" + vozrast + " godini.");

// undefined
let prihod;

console.log(prihod);

let lokacija = "Skopje";

console.log(lokacija);

let polnoleten = true;

console.log(polnoleten);

// Conditionals

if (polnoleten === true) {
  console.log(ime + " e polnoleten");
} else {
  console.log(ime + " ne e polnoleten");
}

console.log("--------------");

// Loose equality - sporeduva samo vrednosti, pravi avtomatska konverzija na tipovi, so cel da se evaluira vo true
console.log(5 == "5"); // true
// Strict equality - ne pravi konverzija, tipovite mora da se isti
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log("5" === "5"); // true

console.log("--------------");

// >, <, >=, <=, ===

if (vozrast >= 18) {
  console.log("Ognen ima " + vozrast + " godini. " + "Ognen e polnoleten");
} else {
  console.log("Ognen ima " + vozrast + " godini. " + "Ognen ne e polnoleten");
}

// +, -, *, /, %

console.log(5 + 7);
console.log(5 - 2);
console.log(6 * 5);
console.log(12 / 4);

console.log(12 % 6);

console.log("--------------");

let a = 120;
x = 12;

if (a % 2 === 0) {
  console.log(a + " e paren broj");
} else {
  console.log(a + " e neparen broj");
}

if (a % x !== 0) {
  console.log(a + " ne e deliv so " + x);
} else {
  console.log(a + " e deliv so " + x);
}

// ako n e deliv so 3 printaj Fizz
// ako n e deliv so 5 printaj Buzz
// ako n e deliv so 3 i 5 printaj FizzBuzz

let n = 15;

// Ima greska
// if (n % 3 === 0) {
//   console.log("Fizz");
// } else if (n % 5 === 0) {
//   console.log("Buzz");
// } else if (n % 15 === 0) {
//   console.log("FizzBuzz");
// } else {
//   console.log(n + " ne e deliv so 3,5 i 15");
// }

// && - "I" operator
// || - "ILI" operator

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else {
  console.log(n + " ne e deliv so 3,5 i 15");
}

console.log("--------------");
if (n % 3 === 0) {
  console.log("Fizz");
}

if (n % 5 === 0) {
  console.log("Buzz");
}

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
}
console.log("--------------");

let logiran = true;
let polnoleten2 = false;

if (logiran && polnoleten2) {
  console.log("moze da kupi");
} else {
  console.log("NE moze da kupi");
}

let licna = true;
let pasos = false;

if (licna || pasos) {
  console.log("moze da kupi");
} else {
  console.log("NE moze da kupi");
}
