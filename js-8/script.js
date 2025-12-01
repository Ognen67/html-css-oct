// CRUD
// Create, Read, Update, Delete

// {
//     "blogs": "[{"id":"2f1ee875-ab1d-4cef-9064-0cf9cf3dc919","title":"My Startup Journey","content":"Learn about my startup journey","image":"https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg"},{"id":"483d0ec1-a6ed-41f6-a0d1-4f66d48d58f9","title":"My latest travels","content":"Follow me on my travels around the world","image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhUQEhIVFRAVFRUVFRYVFhYRFRUYFhUYFxUVFRcYHSggGBolHRcVITEhJSkrLi4wFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICY1LS8tLy0tLS0tMC0vLS0tLS0tLS0tLS0uLS0tLS0rLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIAKUBMgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAEAQAAIBAgQDBgMFBwMCBwAAAAECEQADBBIhMQVBUQYTImFxgTKRoRQjQrHwB1JiwdHh8TNywkOCFSRTY5KTsv/EABoBAAMBAQEBAAAAAAAAAAAAAAECBAMABQb/xAAwEQACAgEDAgQEBgIDAAAAAAAAAQIRAwQSITFRE0GxwSJxkeEyQoGh0fAFFRQzYf/aAAwDAQACEQMRAD8AtwKeBSgU4Cvp2z5UQCngUoFOApWwjkFTo1RKKlUVmx0wu04qww2Wqy3R+FqbIuCrFLkv8Goo8Cq3BtFWKtXl5Op6+J8Cmgcak0aWoHFXa7HdnZGqKLF2jVbcSrfE3aAuO"
// }

console.log("js");

let blogs = [];

blogsString = localStorage.getItem("blogs");
blogs = JSON.parse(blogsString);

let editId = null;

renderBlogsTable();

// {
//     id: uuidv4,
//     title: "My First Blog",
//     content: "Hello world!",
//     image: "https://picsum.com/kjasdkjakjad"
// }

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);

  const title = document.getElementById("blogTitle").value;
  const content = document.getElementById("blogContent").value;
  const image = document.getElementById("blogImage").value;

  if (editId === null) {
    const newBlog = {
      id: uuidv4(),
      title,
      content,
      image,
    };

    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
  } else {
    console.log(editId);
    // najdi go blogot
    const blog = blogs.find((blog) => blog.id === editId);
    // update so novi vrednosti
    blog.title = title;
    blog.content = content;
    blog.image = image;
    // disable edit mode
    disableEditMode();
    // button style
    document.getElementById("submitBtn").innerText = "Create Blog";
    document.getElementById("submitBtn").style.backgroundColor = "#fff";
  }

  // update local storage
  updateLocalStorage();
  clearForm();
  renderBlogsTable();
});

function clearForm() {
  document.getElementById("blogTitle").value = "";
  document.getElementById("blogContent").value = "";
  document.getElementById("blogImage").value = "";
}

function disableEditMode() {
  editId = null;
  document.getElementById("submitBtn").innerText = "Create Blog";
  document.getElementById("submitBtn").style.backgroundColor = "#fff";
}

function updateLocalStorage() {
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

function renderBlogsTable() {
  const tableBody = document.getElementById("blogTableBody");
  tableBody.innerHTML = "";

  blogs.forEach((blog) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.content}</td>
            <td><img class="blogImageCell" src='${blog.image}'/></td>
            <td>
                <button onclick="editBlog('${blog.id}')">Edit</button>
                <button onclick="deleteBlog('${blog.id}')">Delete</button>
            </td>
        `;

    tableBody.appendChild(tr);
  });
}

function editBlog(id) {
  console.log(id);

  blog = blogs.find((blog) => blog.id === id);
  console.log(blog);
  editId = id;

  document.getElementById("blogTitle").value = blog.title;
  document.getElementById("blogContent").value = blog.content;
  document.getElementById("blogImage").value = blog.image;

  document.getElementById("submitBtn").innerText = "Update Blog";
  document.getElementById("submitBtn").style.backgroundColor = "#1de402";
}

function enhanceBlog() {
  fetch({method: "POST"}, "url-open-ai")
}

function deleteBlog(id) {
  blogs = blogs.filter((blog) => blog.id !== id);
  console.log("delete with id: ", id);
  if (editId === id) {
    disableEditMode();
  }
  // update local storage
  updateLocalStorage();
  renderBlogsTable();
}

// povtoruvanje i vezbanje na materijalot (so kucanje)
// get data from data.json file
// toggle edit mode
// add style
// login/register mock with isAdmin flag conditionally displaying the admin


// public api za show/movies/books etc..
// 
// Pages
// shows
// show/${id} show?id=${id}
// show/episodes
// show/cast
// search/filter
// login-register
// favorites