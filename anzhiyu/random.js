var posts=["2023/12/02/AIGC/AnimateAnyone/","2024/03/11/LLM/2024-03-11/","2024/03/21/LLM/2024-03-20/","2024/04/21/LLM/2024-04-21/","2024/03/21/LLM/2024-03-21/","2024/05/08/LLM/2024-05-08/","2024/05/09/LLM/2024-05-09/","2024/05/31/LLM/2024-05-31/","2024/05/22/LLM/2024-05-22/","2024/05/07/JD/Zhengzhong Tu/","2024/01/19/JD/alijd/","2024/04/12/JD/wanghuan/","2024/02/26/zhibo/Panel/20240302/","2024/02/04/LLM/AI Agent/20240204/","2024/03/31/zhibo/Talk/2024-03-31-SceneTex/","2024/04/15/zhibo/Talk/2024-04-19/","2024/03/31/zhibo/Talk/2024-03-31-ChatDev/","2024/05/06/zhibo/Talk/2024-05-10/","2024/05/19/zhibo/Talk/2024-05-21/","2024/05/21/zhibo/Talk/2024-05-24/","2024/04/19/zhibo/Talk/2024-04-24/","2024/05/26/zhibo/Talk/2024-05-29/","2024/05/29/zhibo/Talk/2024-06-06/","2024/06/13/zhibo/Talk/2024-06-17/","2024/06/03/zhibo/Talk/2024-06-13/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };