"use strict";

document.addEventListener("DOMContentLoaded", () => {
  async function getPosts() {
    const info = await fetch("http://localhost:3000/posts")
      .then((request) => request.json())
      .then((data) => data);
    // console.log(info);
    for (let item of info) {
      document.body.append(`ID - ${item.id}; TITLE - ${item.title}`);
    }
  }

  function createPost() {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "4",
        title: "another title 4",
        views: 300,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    createPost();
  });

  getPosts();
});
