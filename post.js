var posts = [];


function addPost (event) {
   event.preventDefault();

   const postElement = document.getElementById("post");


    const post = {
       name: "your name",
       text: postElement.value
    }
    posts.push(post)
}

function getPosts() {
    return posts;
}
