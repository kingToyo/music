$(function(){
  //查找ID为music-footer的标签追加元素
  $("#music-footer").load("music_footer.html", function () {
    //添加link
    var link = document.createElement("link");
    //添加link属性
    link.rel = "stylesheet";
    //添加link属性,引入css
    link.href = "css/music_footer.css";
    //把link标签动态追加到head里
    document.head.appendChild(link);
  });
});