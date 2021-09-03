
const posts = [
    {title: 'Post One', body: 'Post one body'},
    {title: 'Post Two', body: 'Post two body'}
];

//* ============= Synchronous way 
// const createPost = (post) => {
//     setTimeout(() =>{
//         posts.push(post);
//     },2000);
// };

// const getPosts = () => {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => {
//             output += `<li>${post.title}</li>`
//         });
//         document.getElementById('app').innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'New Post', body: 'This is a new post'})

// getPosts();

//* ============= Asynchronous way
const createPost = (post, cb) => {
  setTimeout(() => {
    posts.push(post);
    cb(); // getPost will be called here
  }, 2000);
};

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("app").innerHTML = output;
  }, 1000);
};

// Calling createPost and passing getPosts as a callback
createPost({ title: "New Post", body: "This is a new post" }, getPosts);