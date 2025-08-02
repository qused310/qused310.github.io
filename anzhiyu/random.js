var posts=["2025/08/02/hello-world/","2025/08/02/你好/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };