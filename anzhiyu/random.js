var posts=["2025/08/02/hi/","2025/08/02/这是一篇博文/","2025/08/02/你好/","2025/08/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };