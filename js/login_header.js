$(function(){
  $("#login_header").load("login_header.html",function(){
    var link=document.createElement("link");
    link.rel="stylesheet";
    link.href="css/login_header.css";
    document.head.appendChild(link);
  })
});