const posts = [
    {title: 'Post One', body: 'Post one body'},
    {title: 'Post Two', body: 'Post two body'}
];

const createPost = post => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000)
    })
}