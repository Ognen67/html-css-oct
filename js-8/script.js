// CRUD
// Create, Read, Update, Delete

console.log("js");

let blogs = [
  {
    id: uuidv4(),
    title: "My Startup Journey",
    content: "Learn about my startup journey",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0I2o_zW1LYPNmcn-Nhbxb19ObLb4PcYRLQ&s"
  }
];

let editId = null

renderBlogsTable()

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

  if(editId === null) {
      const newBlog = {
        id: uuidv4(),
        title,
        content,
        image,
      };

      blogs.push(newBlog);
  } else {
    console.log(editId);
    // najdi go blogot
    const blog = blogs.find(blog => blog.id === editId)
    // update so novi vrednosti
    blog.title = title
    blog.content = content
    blog.image = image
    // disable edit mode
    disableEditMode()
    // button style
    document.getElementById("submitBtn").innerText = "Create Blog"
    document.getElementById("submitBtn").style.backgroundColor = "#fff"  

  }

  // update local storage
  clearForm()
  renderBlogsTable();
});

function clearForm() {
  document.getElementById("blogTitle").value = "";
  document.getElementById("blogContent").value = "";
  document.getElementById("blogImage").value = "";
}

function disableEditMode() {
    editId = null
    document.getElementById("submitBtn").innerText = "Create Blog"
    document.getElementById("submitBtn").style.backgroundColor = "#fff"  

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

    blog = blogs.find(blog => blog.id === id)
    console.log(blog);
    
    editId = id;

    document.getElementById("blogTitle").value = blog.title;
    document.getElementById("blogContent").value = blog.content;
    document.getElementById("blogImage").value = blog.image;
    document.getElementById("submitBtn").innerText = "Update Blog"
    document.getElementById("submitBtn").style.backgroundColor = "#1de402"
    
}

function deleteBlog(id) {
  blogs = blogs.filter((blog) => blog.id !== id);
  console.log("delete with id: ", id);
  if(editId === id) {
    disableEditMode()
  }
  // update local storage
  renderBlogsTable();
}