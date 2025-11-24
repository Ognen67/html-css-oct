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

// InnerHtml foreach rendering
// todos.forEach(
//   (todo, index) =>
//     (todosContainer.innerHTML += `<p class="todo ${
//       todo.completed === true ? "strike-through" : "red"
//     }">${index}: ${todo.title}</p>`)
// );

let todos = [];

function showTodos(type) {
  console.log(type);
  if (type === "completed") {
    const completedTodos = todos.filter((todo) => todo.completed === true);
    return renderTodos(completedTodos);
  } else if (type === "incomplete") {
    const incompleteTodos = todos.filter((todo) => todo.completed === false);
    return renderTodos(incompleteTodos);
  } 

  return renderTodos(todos);
}

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

function addTodo() {
  const newTodoTitle = document.getElementById("add-todo-input").value

  const newTodoObj = {
    userId: 10,
    id: uuidv4(),
    title: newTodoTitle,
    completed: false
    // createdAt: 
  }

  todos = [newTodoObj, ...todos]
  // todos.unshift(newTodoObj)
  console.log(todos);
  renderTodos(todos)
}

// function showAllTodos() {
//   renderTodos(todos);
// }

// function showCompleteTodos() {
//   const completedTodos = todos.filter((todo) => todo.completed === true);
//   renderTodos(completedTodos);
// }

// function showInompleteTodos() {
//   const completedTodos = todos.filter((todo) => todo.completed === false);
//   renderTodos(completedTodos);
// }

function renderTodos(todos) {
  const todosContainer = document.getElementById("todos");
  todosContainer.innerHTML = "";

  todos.forEach((todo) => {
    const todoCard = document.createElement("div");
    const todoTitle = document.createElement("h2");
    const todoCompleteButton = document.createElement("button");
    todoCompleteButton.classList.add("btn-complete");

    // dokolku imame pokompleksna logika za uslovno dodavanje na klasi
    // const classesToAdd = determineClassesForTodo(todo)

    // so eden uslov mozeme da koristime ternary - ternaren operator
    todoCard.classList.add(`${todo.completed === true ? "completed" : "todo"}`);
    todoTitle.classList.add(
      `${todo.completed === true ? "completed-title" : null}`
    );

    todoTitle.innerText = todo.title;
    todoCompleteButton.innerText = "complete";

    todoCompleteButton.addEventListener("click", () => {
      const thisTodo = todos.find((x) => x.id === todo.id);
      // const thisTodo = todos.filter((x) => x.id === todo.id)[0];
      thisTodo.completed = !thisTodo.completed;
      console.log(thisTodo);

      todoCard.classList.toggle("completed");
      todoTitle.classList.toggle("completed-title");
    });

    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoCompleteButton);
    todoCard.classList.add("todo");

    todosContainer.appendChild(todoCard);
  });
}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((res) => {
    todos = res;
    renderTodos(todos);
  })
  .catch((error) => console.log("Nastana greska: ", error))
  .finally(() => console.log("Baranjeto zavrsi!"));

const titleElement = document.getElementById("title");

titleElement.style = "color: darkslategray";
titleElement.style.fontFamily = "Georgia";

titleElement.style.color = "yellow";
// titleElement.className = "underline"
// titleElement.classList.add("strike-through");
titleElement.classList.add("underline");

titleElement.classList.add("title");

console.log(titleElement);

document.querySelector("#title");
// const buttonElement = document.querySelector(".btn");
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

// buttonElement.style.color = "green";
// console.log(buttonElement);

// buttonElement.innerHTML = "<span>icon</span>"
// buttonElement.innerText = "<span>icon</span>";

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


// Domasno
// public api za books kako sto e json placeholder za todos
// Динамично пополнување на табела со книги со можност за бришење на секоја книга одделно
// sort by createdAt