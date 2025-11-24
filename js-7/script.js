console.log("js");

let blogs = [];

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

  const newBlog = {
    id: uuidv4(),
    title,
    content,
    image,
  };

  console.log(newBlog);

  blogs.push(newBlog);
  // update local storage
  document.getElementById("blogTitle").value = "";
  document.getElementById("blogContent").value = "";
  document.getElementById("blogImage").value = "";
  renderBlogsTable();
});

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

    // const idCell = document.createElement("td");
    // idCell.innerText = blog.id;

    // const titleCell = document.createElement("td");
    // titleCell.innerText = blog.title;

    // const contentCell = document.createElement("td");
    // contentCell.innerText = blog.content;

    // const imageCell = document.createElement("td");
    // const image = document.createElement("img");
    // image.src = blog.image;
    // image.classList.add("blogImageCell");

    // imageCell.innerText = blog.image;
    // imageCell.appendChild(image);

    // const actionsCell = document.createElement("td");

    // const editButton = document.createElement("button");
    // editButton.innerText = "Edit";
    // const deleteButton = document.createElement("button");
    // deleteButton.innerText = "Delete";

    // deleteButton.addEventListener("click", () => {
    //   blogs = blogs.filter((x) => x.id !== blog.id);

    //   // update local storage
    //   renderBlogsTable();
    // });

    // actionsCell.appendChild(editButton);
    // actionsCell.appendChild(deleteButton);

    // tr.appendChild(idCell);
    // tr.appendChild(titleCell);
    // tr.appendChild(contentCell);
    // tr.appendChild(imageCell);
    // tr.appendChild(actionsCell);

    tableBody.appendChild(tr);
  });
}

// function renderBlogsTable() {
//   const tableBody = document.getElementById("blogTableBody");
//   tableBody.innerHTML = "";

//   blogs.forEach((blog) => {
//     const tr = document.createElement("tr");

//     const idCell = document.createElement("td");
//     idCell.innerText = blog.id;

//     const titleCell = document.createElement("td");
//     titleCell.innerText = blog.title;

//     const contentCell = document.createElement("td");
//     contentCell.innerText = blog.content;

//     const imageCell = document.createElement("td");
//     const image = document.createElement("img");
//     image.src = blog.image;
//     image.classList.add("blogImageCell");

//     imageCell.innerText = blog.image;
//     imageCell.appendChild(image);

//     const actionsCell = document.createElement("td");

//     const editButton = document.createElement("button");
//     editButton.innerText = "Edit";
//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";

//     deleteButton.addEventListener("click", () => {
//       blogs = blogs.filter((x) => x.id !== blog.id);

//       // update local storage
//       renderBlogsTable();
//     });

//     actionsCell.appendChild(editButton);
//     actionsCell.appendChild(deleteButton);

//     tr.appendChild(idCell);
//     tr.appendChild(titleCell);
//     tr.appendChild(contentCell);
//     tr.appendChild(imageCell);
//     tr.appendChild(actionsCell);

//     tableBody.appendChild(tr);
//   });
// }

function deleteBlog(id) {
  blogs = blogs.filter((blog) => blog.id !== id);
  console.log("delete with id: ", id);
  // update local storage
  renderBlogsTable();
}

// public api
// fetch list of objects with at least 5-6 properties excluding id
// display in table
// create add form to add to this list
// actions, edit, delete (dodajte uste nesto)

// fetch data store locally
// localstorage for persistence
// css
