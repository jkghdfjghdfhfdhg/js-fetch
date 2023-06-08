const postId = 1; // здесь указываем id поста
const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

fetch(url)
  .then(response => response.json())
  .then(comments => {
    console.log(comments); 
  });

