const blogsString = localStorage.getItem("blogs");
const blogs = JSON.parse(blogsString);

console.log(blogs);

// alternative with classname
// document.getElementsByClassName("blogs")[0]
const blogsContainer = document.getElementById("blogs");

blogs.forEach((blog) => {
  blogsContainer.innerHTML += `
    <div class="blog">
        <h1>${blog.title}</h1>
        <p>${blog.content}</p>
        <img width="250" src="${blog.image}"/>
    </div>`;
});
