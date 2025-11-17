console.log(`Hello from ${navigator.userAgent}`);

console.log("-------------");

console.log("Prvo");
console.log("Vtoro");
console.log("Treto");

console.log("-------------");

console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const todosContainer = document.getElementById("todos");

    res.forEach(
      (todo, index) =>
        (todosContainer.innerHTML += `<p class="todo ${todo.completed === true ? "" : "red"}">${index}: ${todo.title}</p>`)
    );
  })
  .catch((error) => console.log("Nastana greska: ", error))
  .finally(() => console.log("Baranjeto zavrsi!"));

const titleElement = document.getElementById("title");

titleElement.style = "color: darkslategray";
titleElement.style.fontFamily = "Georgia";

// titleElement.className = "underline"
// titleElement.classList.add("strike-through");
titleElement.classList.add("underline");

console.log(titleElement);

document.querySelector("#title");
const buttonElement = document.querySelector(".btn");
const listElement = document.querySelector("ul");
console.log(listElement);

const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
  btn.style.color = "red";
  btn.style.padding = "8px 12px";

  btn.addEventListener("click", () => {
    console.log("clicked");
  });

  btn.addEventListener("mouseover", () => {
    btn.classList.add("btn-hover");

    setTimeout(() => {
      btn.classList.remove("btn-hover");
    }, 1500);
  });
});

console.log(buttonElement);

const darkModeToggle = document.getElementById("dark-mode");

darkModeToggle.addEventListener("click", () => {
// confirm("Dark mode!")
  document.body.classList.toggle("dark-mode");
  darkModeToggle.classList.toggle("dark-toggle");
  console.log(darkModeToggle);
});

const contentElements = document.getElementsByClassName("content");

for (let el of contentElements) {
  console.log(el);
}

Array.from(contentElements).forEach((el) => console.log(el));


// Homework

// menuvanje na stil na elementi so ista klasa
// site p elementi menuvanje fontFamily preku style svojstvoto
// Event Listeners ("click", "mouseover", "mouseleave") create alert() popup
  // confirm popup for conditional dark mode
// fetch + DOM rendering na lista na objekti (public API)
// Error handling so catch
// setTimeout + setInterval

// Input pole preku koe mozam da kreiram todo so svojstva: "title" i "completed"
// click listener na sekoe todo, toggle completed + hover + cursor: pointer
