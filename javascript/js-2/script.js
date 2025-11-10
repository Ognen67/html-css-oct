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
function discountCalculationLog(personName, personAge, basePrice) {
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

let namalena = discountCalculationLog("Stanko", 36, 875);
console.log("namalenata cena nadvor od discountCalculationLog", namalena);

// Discount percentage
const KIDS_DISCOUNT = 40;
const STUDENT_DISCOUNT = 30;
const ADULT_DISCOUNT = 20;
const PENSIONERS_DISCOUNT = 40;

// TypeError: Assignment to constant variable. (ne mozeme da ja menuvame vrednosta na konstantata)
// STUDENT_DISCOUNT = 45

function discountCalculation(personAge, basePrice) {
  let discountedPrice;

  if (personAge < 18 && personAge > 0) {
    discountedPrice = basePrice - (basePrice * KIDS_DISCOUNT) / 100;
  } else if (personAge >= 18 && personAge <= 26) {
    discountedPrice = basePrice - (basePrice * STUDENT_DISCOUNT) / 100;
  } else if (personAge >= 27 && personAge <= 45) {
    discountedPrice = basePrice - (basePrice * ADULT_DISCOUNT) / 100;
  } else if (personAge >= 45 && personAge <= 62) {
    discountedPrice = basePrice;
  } else if (personAge > 62 && personAge < 120) {
    discountedPrice = basePrice - (basePrice * PENSIONERS_DISCOUNT) / 100;
  } else {
    discountedPrice = null;
  }

  return discountedPrice;
}

function processCheckout(price) {
  console.log("Prodolzete so plakjanje, cenata iznesuva: " + price);
}

// const namalenaCena = discountCalculationLog(ime, vozrast, cena);

console.log("--------------------------");

let ime2 = "Ognen";
let vozrast2 = 16;
let adresa2 = "Dimitrie Chupovski";
let grad2 = "Skopje";
let karticka2 = "19381289312";
const cena2 = 8560;

const namalenaCena = discountCalculation(vozrast2, cena2);

if (namalenaCena !== null) {
  processCheckout(namalenaCena);
} else {
  console.log("Vnesovte navalidna vrednost za vorzrast, " + vozrast2);
}

console.log("--------------------------");

let ime = "Petko";
let vozrast = 50;
let adresa = "Dimitrie Chupovski";
let grad = "Skopje";
let karticka = "123123113123";

let petko = {
  ime: "Petko",
  vozrast: 50,
  adresa: "Dimitrie Chupovski",
  grad: "Skopje",
  karticka: "123123113123",
};

console.log("--------------------------");

// JSON - Javascript Object Notation

let ognen = {
  ime: "Ognen",
  vozrast: 25,
  adresi: {
    domasna: "Dimitrie Chupovski",
    rabotna: "Leninova 20",
    backup: "Makedonska 56",
  },
  grad: "Skopje",
  karticka: "19381289312",
  cena: 8560,
};

console.log(petko);
console.log(ognen);

console.log(petko.vozrast);
console.log(petko.karticka);
console.log(petko["grad"]);

console.log(ognen.adresi.rabotna);

console.log("---------------------------");

const kniga1 = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  publisher: "Pan Books",
  publication_year: 1979,
  isbn: "978-0345391803",
  genres: ["Science Fiction", "Comedy"],
  pages: 193,
  print: function() {
    // Konkatenacija
    console.log("Title: " + this.title + "\nAuthor: " + this.author);
    // Interpolacija
    console.log(`Title: ${this.title}\nAuthor: ${this.author}`);
  }
};

const kniga2 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  publisher: "T. Egerton, Whitehall",
  publication_year: 1813,
  isbn: "978-0141439518",
  genres: ["Classic", "Romance"],
  pages: 279,
  print: function() {
    // console.log("Title: " + this.title + "\n" + "Author: " + this.author);

    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`This book has ${this.pages} pages`);
  }
};

const kniga3 = {
  title: "1984",
  author: "George Orwell",
  publisher: "Secker & Warburg",
  publication_year: 1949,
  isbn: "978-0451524935",
  genres: ["Dystopian", "Political Fiction"],
  pages: 328,
  print: function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`This book has ${this.pages} pages`);
  }
};


kniga1.print()
kniga2.print()
kniga3.print()

let books = [kniga1, kniga2, kniga3]
console.log(books);

console.log("books index 2", books[2]);

const numbers = [312, 41, 123, 763, 91]

// Statically typed
// Dynamically typed

const niza = [3213, {a: 5}, "Hello", true, false]
console.log(numbers);

console.log(niza);

const names = ["Marko", "Angjelo", "Teo", "Robert", "Ognen"]
console.log(names);

// console.log(kniga1);

// array
// let users = [petko, ognen]

// console.log("--------------------------");
// console.log(users);

// 5 Funkcii (reiskoristlivi discountCalculation)
// 5 Objekti (printanje na svojstvata na objektite)
// Chitkanje za nizi (inicijaliziranje na niza, printanje)
