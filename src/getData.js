const getComments = async () => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const response = await fetch(url);
  const comments = await response.json();

  return comments;
};

const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url);
  const posts = await response.json();
  
  return posts;
};

const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const users = await response.json();
  
  return users;
};

export const getData = async () => {
  const [comments, posts, users] = await Promise.all([
    getComments(),
    getPosts(),
    getUsers()
  ]);

  const postList = posts.map(post => {
    const autor = users.find(user => user.id === post.userId);

    return {
      user: {
        name: autor.name,
        email: autor.email,
        address: autor.address.city
      },

      title: post.title,

      body: post.body,

      comments: comments
        .filter(comment => comment.postId === post.id)
        .map(comment => ({
          user: {
            name: comment.name,
            email: comment.email,
          },
          body: comment.body
        }))
    }
  });

  return postList;
};