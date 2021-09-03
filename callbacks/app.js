
const posts = [
    {title: 'Post One', body: 'Post one body'},
    {title: 'Post Two', body: 'Post two body'}
];

const createPost = (post) => {
    setTimeout(() =>{
        posts.push(post);
    },2000);
};

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.getElementById('app').innerHTML = output;
    }, 1000);
}

const newPost = {title: 'New Post', body: 'This is a new post'}
createPost({title: 'New Post', body: 'This is a new post'})

getPosts();