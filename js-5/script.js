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
  .then((res) => console.log(res))
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
  document.body.classList.toggle("dark-mode");
  darkModeToggle.classList.toggle("dark-toggle");
  console.log(darkModeToggle);
});

