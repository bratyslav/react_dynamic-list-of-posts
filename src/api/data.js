export const comments = async() => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const response = await fetch(url);
  const comments = await response.json();

  return comments;
};

export const posts = async() => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url);
  const posts = await response.json();
  
  return posts;
};

export const users = async() => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const users = await response.json();
  
  return users;
}