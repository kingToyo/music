$(function(){
  //查找ID为music-header的父元素追加元素
  $("#music-header").load("music_header.html", function () {
    //添加link
    var link = document.createElement("link");
    //添加link属性
    link.rel = "stylesheet";
    //添加link属性,引入css
    link.href = "css/music_header.css";
    //追加到head里
    document.head.appendChild(link);
  });
});