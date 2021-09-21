const posts = [
    {title: 'Post One', body: 'Post one body'},
    {title: 'Post Two', body: 'Post two body'}
];

const createPost = post => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = true;

            if (!error){
                resolve();
            } else {
                reject(`Error: Something went wrong!`)
            }
        }, 2000)
    })
};

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

createPost({title: "New Post", body: "This is a new post"})
.then(getPosts) // runs when resolve() is called
.catch(err => { // catches the error from reject()
        console.log(err);
})