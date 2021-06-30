let posts;

try {
  posts = JSON.parse(localStorage.getItem("posts"));

  if (
    posts?.constructor !== Array ||
    posts.some((post) => typeof post !== "string")
  ) {
    throw new Error();
  }
} catch {
  alert("Posts are not valid");
  posts = [];
  localStorage.setItem("posts", JSON.stringify(posts));
}

const $posts = document.getElementById("posts");

$posts.innerHTML = posts.map((post) => `<li>${post}</li>`).join("");

const $postForm = document.getElementById("postForm");

$postForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (this.post.value && !posts.includes(this.post.value)) {
    const $item = document.createElement("li");
    $item.textContent = this.post.value;
    $posts.appendChild($item);
    posts.push(this.post.value);
    localStorage.setItem("posts", JSON.stringify(posts));
  }
});
