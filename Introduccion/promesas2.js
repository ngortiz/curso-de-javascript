const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post 1", "Post 2", "Post 3"];
      const error = true;

      if (error) {
        reject("Hubo un error al inntentar obtener los posts");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};
fetchPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });
