
const posts = [
    {title: 'Post One', body: 'Post one body'},
    {title: 'Post Two', body: 'Post two body'}
];

function createPost(post){
    setTimeout(function(){
        posts.push(post);
    },2000);
};

