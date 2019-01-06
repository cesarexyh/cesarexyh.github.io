<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '找不到页面了';
         clearTimeout(titleTime);
     }
     else {
         //$('[rel="icon"]').attr('href', "../../images/favicon-16x16-next.png");
         document.title = '哈哈又被你找到了';
         titleTime = setTimeout(function () {
			 $('[rel="icon"]').attr('href', "../../images/favicon-16x16-next.png");
             document.title = OriginTitle;
         }, 2000);
     }
 });