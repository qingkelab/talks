var posts=["2025/01-04/","2025/01-14/","2025/02-15/","2025/02-22/","2025/03-08/","2025/03-15/","2025/03-22/","2024/04-10/","2024/04-15/","2024/2024-04-19/","2024/2024-04-24/","2024/2024-05-10/","2024/2024-05-21/","2024/2024-05-24/","2024/2024-05-29/","2024/2024-06-13/","2024/2024-06-06/","2024/2024-06-17/","2024/2024-06-27/","2024/2024-07-08/","2024/2024-07-11/","2024/2024-07-15/","2024/2024-07-23/","2024/2024-07-30/","2024/2024-08-06/","2024/2024-08-26/","2024/2024-09-03/","2024/2024-09-10/","2024/2024-08-14/","2024/2024-09-22/","2024/2024-09-26/","2024/2024-10-11/","2024/2024-10-14/","2024/2024-09-23/","2024/2024-10-16/","2024/2024-11-23/","2024/2024-11-05/","2024/2024-10-17/","2024/2024-11-30/","2024/2024-12-14/","2024/2024-12-24/","2024/2024-12-16/","2024/2024-12-21/","2024/2024-12-28/","Panel/20240302/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };