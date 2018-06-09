$(function() {
    //查找ID为footer的父元素追加元素
    $("#login_footer").load("login_footer.html", function() {
        //添加link
        var link = document.createElement("link");
        //添加link属性
        link.rel = "stylesheet";
        //添加link属性,引入css
        link.href = "css/login_footer.css";
        document.head.appendChild(link);
    })      
});