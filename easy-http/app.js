
const http = new EasyHTTP();

//* Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//     if (error) {
//         console.error(error)
//     } else {
//         console.log(posts);
//     }
//   });

//* Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, post) {
//     if (error) {
//         console.error(error)
//     } else {
//         console.log(post);
//     }
//   });

  //* create Data
  const data = {
      title: 'Custom Post',
      body: 'This is a custom post'
  }

  //* Create Post
  http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
    if (error) {
        console.error(error)
    } else {
        console.log(post);
    }
  })