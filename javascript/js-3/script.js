const kniga1 = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  publisher: "Pan Books",
  publication_year: 1979,
  isbn: "978-0345391803",
  genres: ["Science Fiction", "Comedy"],
  pages: 193,
  print: function () {
    console.log("-------------------");
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`This book has ${this.pages} pages`);
    console.log("-------------------");
  },
};

const kniga2 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  publisher: "T. Egerton, Whitehall",
  publication_year: 1813,
  isbn: "978-0141439518",
  genres: ["Classic", "Romance"],
  pages: 279,
  print: function () {
    console.log("-------------------");
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`This book has ${this.pages} pages`);
    console.log("-------------------");
  },
};

const kniga3 = {
  title: "1984",
  author: "George Orwell",
  publisher: "Secker & Warburg",
  publication_year: 1949,
  isbn: "978-0451524935",
  genres: ["Dystopian", "Political Fiction"],
  pages: 328,
  print: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`This book has ${this.pages} pages`);
    console.log("-------------------");
  },
};

const kniga4 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publisher: "J.B. Lippincott & Co.",
  publication_year: 1960,
  isbn: "978-0061120084",
  genres: ["Classic", "Coming-of-Age"],
  pages: 281,
  print: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`This book has ${this.pages} pages`);
    console.log("-------------------");
  },
};

const kniga5 = {
  title: "Brave New World",
  author: "Aldous Huxley",
  publisher: "Chatto & Windus",
  publication_year: 1932,
  isbn: "978-0060850524",
  genres: ["Dystopian", "Science Fiction"],
  pages: 311,
  print: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`This book has ${this.pages} pages`);
    console.log("-------------------");
  },
};

const kniga6 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publisher: "Charles Scribner's Sons",
  publication_year: 1925,
  isbn: "978-0743273565",
  genres: ["Classic", "Tragedy"],
  pages: 180,
  print: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`This book has ${this.pages} pages`);
    console.log("-------------------");
  },
};

kniga1.print();
kniga2.print();
kniga3.print();
kniga4.print();
kniga5.print();
kniga6.print();

// n = 6
// i<=n-1
// i<n
//             0        1       2      3       4       5
let books = [kniga1, kniga2, kniga3, kniga4, kniga5, kniga6];
// console.log(books);
// books[3] is undefined
console.log(books[3]);

console.log("BOOKS FOR");

for (let i = 0; i < books.length; i++) {
  // console.log(books[i].print());
  books[i].print();
}

// for(let book of books) {
//     book.print()
// }

// for(let index in books) {
//     books[index].print()
// }

// books.forEach(book => book.print())

// books.forEach((book) => {
//     book.print()
// })

// one line function
// const printTest = (test) => console.log(test);


// printTest("TEST!!!")

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i = i + 2) {
  // if(i % 2 === 0) {
  console.log(i);
  // }
}

console.log("------------");

let broj = 1;
while (broj <= 100) {
  if (broj % 15 === 0) {
    console.log(broj + " FizzBuzz");
  } else if (broj % 3 === 0) {
    console.log(`${broj} Fizz`);
  } else if (broj % 5 === 0) {
    console.log(broj + " Buzz");
  }
  broj++;
}

let j = 1;
do {
  console.log(j);
  j++;
} while (j > 5);

let infiniteLoop = false;

while (infiniteLoop) {
  console.log(
    new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds()
  );
}

const students = [
  {
    name: "Student 1",
    points: 78,
    remark: "Solid understanding of the material, but can improve consistency.",
  },
  {
    name: "Student 2",
    points: 32,
    remark: "Excellent performance. Shows strong analytical thinking.",
  },
  {
    name: "Student 3",
    points: 64,
    remark: "Understands basics. Needs more practice with complex problems.",
  },
  {
    name: "Student 4",
    points: 85,
    remark: "Good work. Participates well in discussions and activities.",
  },
  {
    name: "Student 5",
    points: 53,
    remark: "Struggles with some concepts. Should review key lessons.",
  },
  {
    name: "Student 6",
    points: 47,
    remark: "Needs significant improvement. Recommend extra study support.",
  },
  {
    name: "Student 7",
    points: 33,
    remark: "Outstanding! Shows exceptional skill and dedication.",
  },
  {
    name: "Student 8",
    points: 73,
    remark: "Stable performance. Could benefit from more practice.",
  },
  {
    name: "Student 9",
    points: 88,
    remark: "Very strong work. Demonstrates clear problem solving ability.",
  },
  {
    name: "Student 10",
    points: 52,
    remark: "Basic understanding, but needs more confidence and review.",
  },
  {
    name: "Student 11",
    points: 31,
    remark: "Consistently excellent work across all test sections.",
  },
  {
    name: "Student 12",
    points: 66,
    remark: "Developing well. Needs to avoid small mistakes.",
  },
  {
    name: "Student 13",
    points: 40,
    remark: "Currently struggling. Encourage consultation sessions.",
  },
  {
    name: "Student 14",
    points: 83,
    remark: "Good test results and active class engagement.",
  },
  {
    name: "Student 15",
    points: 75,
    remark: "Solid performance. Could aim higher with focused practice.",
  },
  {
    name: "Student 16",
    points: 63,
    remark: "Decent work, but grading shows inconsistency across sections.",
  },
  {
    name: "Student 17",
    points: 58,
    remark: "Shows effort but lacks clarity in problem solving steps.",
  },
  {
    name: "Student 18",
    points: 37,
    remark: "Near perfect score. Great accuracy and reasoning.",
  },
  {
    name: "Student 19",
    points: 81,
    remark: "Strong results. Comfortable with key concepts.",
  },
  {
    name: "Student 20",
    points: 62,
    remark: "Shows understanding, but needs more practice with application.",
  },
];

// for (const student of students) {
//   if (student.points < 50) {
//     console.log(
//       `${student.name} has failed the exam with ${student.points} points`
//     );
//   } else {
//     console.log(
//       `${student.name} has passed the exam with ${student.points} points`
//     );
//   }
// }

function calculateMark(points) {
  let grade;
  if (points >= 0 && points < 50) {
    grade = 5;
  } else if (points >= 50 && points <= 60) {
    grade = 6;
  } else if (points >= 61 && points <= 70) {
    grade = 7;
  } else if (points >= 71 && points <= 80) {
    grade = 8;
  } else if (points >= 81 && points <= 90) {
    grade = 9;
  } else if (points >= 91 && points <= 100) {
    grade = 10;
  } else {
    return null;
  }

  return grade
}

const newStudent = {
  name: "Student x",
  points: 47,
  remark: "Needs significant improvement. Recommend extra study support.",
}

// console.log(students);
console.log(students.length);

console.log("-----------------");
const newLength =students.push(newStudent)
// console.log(students);
console.log(newLength);

// for (let i = 0; i < students.length; i++) {
//   const grade = calculateMark(students[i].points);

//   if (grade === null) {
//     console.log("Vnesovte nevalidna vrednost, validni vrednosti se od 0-100");
//   } else {
//     console.log(`${students[i].name} got a grade ${grade}`);
//   }
// }


console.log("-----------------");


const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length);

console.log(fruits);
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(fruits.toString());
// "Banana,Orange,Apple,Mango"

console.log(fruits[2]);
// console.log(fruits.at(3));

console.log(fruits.join());


// const poppedFruit = fruits.pop();
// console.log(`We removed ${poppedFruit}`);
// console.log(fruits);


const fruitsDeleted = fruits.splice(1, 1)
console.log(fruits);

console.log("deleted fruits: ", fruitsDeleted);


// 2x
// kompleksen objekt
// niza od objektni
// iteriranje vrz taa niza
// kalkulacija vrz elementite od nizata so reiskoristliva funkcija



// kreiraj niza od 10 elementi (gradovi, drzavi)
// print metoda na objektot
// iteriranje na niza so objekti, (naj populiran grad, top 3 naj naseleni gradovi)
// prosek od broj na ziteli
