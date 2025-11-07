let ime = "Petko";
let vozrast = 50;
let cena = 12500;

// Check for discount
// <18, 18<=26, 27<45, 45<62, >62

function printAdd(a, b) {
  console.log(a + b);
}

console.log("-------------------");
printAdd(56, 9);
console.log("-------------------");

function add(a, b) {
  return a + b;
}

function product(x, y) {
  return x * y;
}

console.log(add(5, 8));

const zbir = add(65, 129);

console.log(zbir);
const rez = product(zbir, 5);

console.log(rez);

function greet(ime) {
  let greetMessage = "Zdravo " + ime + "!!!";
  return greetMessage;
}

let poraka = greet("Ognen");

console.log(poraka);
console.log(greet("Ognen"));

// greet("Petko");

console.log("-------------------");
// camelCase
function discountCalculation(personName, personAge, basePrice) {
  if (personAge < 18 && personAge > 0) {
    console.log(personName + " ima " + personAge + " godini. ");
    console.log(personName + " dobiva 30% popust");
    console.log("smalenata cena iznesuva: " + basePrice * 0.7);
    return basePrice * 0.7;
  } else if (personAge >= 18 && personAge <= 26) {
    console.log(personName + " ima " + personAge + " godini. ");
    console.log(personName + " dobiva 20% popust");
    console.log("smalenata cena iznesuva: " + basePrice * 0.8);
    return basePrice * 0.8;
  } else if (personAge >= 27 && personAge <= 45) {
    console.log(personName + " ima " + personAge + " godini. ");
    console.log(personName + " dobiva 10% popust");
    console.log("smalenata cena iznesuva: " + basePrice * 0.9);
    return basePrice * 0.9;
  } else if (personAge >= 45 && personAge <= 62) {
    console.log(personName + " ima " + personAge + " godini. ");
    console.log(personName + " ne dobiva popust");
    console.log("smalenata cena iznesuva: " + basePrice);
    return basePrice;
  } else if (personAge > 62 && personAge < 120) {
    console.log(personName + " ima " + personAge + " godini. ");
    console.log(personName + " dobiva 40% popust");
    console.log("smalenata cena iznesuva: " + basePrice * 0.6);
    return basePrice * 0.6;
  } else {
    console.log("Vnesovte nevalidna vrednost od " + personAge);
    console.log("Validna vrednost za vozrast e od 1 do 120");
    return null;
  }
}

function processCheckout(price) {
  console.log("Prodolzete so plakjanje, cenata iznesuva: " + price);
}

// const namalenaCena = discountCalculation(ime, vozrast, cena);

console.log("--------------------------");

let ime2 = "Ognen";
let vozrast2 = 25;
const cena2 = 8560;

const namalenaCena = discountCalculation(ime2, vozrast2, cena2);
processCheckout(namalenaCena);
