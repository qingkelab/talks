var posts=["2024/01/19/JD/alijd/","2023/12/02/AIGC/AnimateAnyone/","2024/03/11/LLM/2024-03-11/","2024/02/26/zhibo/Panel/20240302/","2024/02/04/LLM/AI Agent/20240204/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };