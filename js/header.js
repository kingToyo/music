 $(function(){
  //查找ID为header的父元素追加元素
  $("#header").load("header.html", function() {
    //添加link
    var link = document.createElement("link");
    //添加link属性
    link.rel = "stylesheet";
    //添加link属性,引入css
    link.href = "css/header.css";
    document.head.appendChild(link);
      //设置导航栏的下滑效果(有问题)
    var $box = $("div.box"),LIWIDTHIS = 96;
    console.log($box);
    $("ul.tabs").on("mouseover","a",function(e){
      e.preventDefault();
      //获取a的父元素的li在其父元素ul下的位置i
      var i = $(this).parent().index();
      console.log(i);
      $box.css("left",LIWIDTHIS * i);
    });
      // 设置搜素框的内容
    var btnSearch=document.querySelector(
      "#top-input>[data-trigger=search]"
    );
    var txtSearch=document.getElementById("txtSearch");
    // 点击跳转(协带搜索内容)
    btnSearch.onclick=function(){
      if(txtSearch.value.trim()!=="")
        location.href=
        "music/index.html?kw="+txtSearch.value.trim();
      }
    //设置回车键跳转
    txtSearch.onkeyup=function(e){
      if(e.keyCode===13)
        btnSearch.onclick();
    }
  });  
});
