$(function(){
  var $ulIds=$(".music-indicators");
  var $ul=$(".music-banner-img"),
    LIWIDTH=1660,interval=500,wait=3000,moved=0,timer=null;
  $.ajax({
    type:"get",
    url:"data/index/music_getCarousel.php",
    dataType:"json",  
    success:function(data){
      console.log(data);
      var html="";
      for(var c of data){
         var { img, hrer, title } = c;
        html+=
        `<li>
          <a href="${href}" title="${title}">
            <img src="${img}">
          </a>
        </li> `;  
      }
      var  { img, href, title } = data[0];
      html +=
      `<li>
        <a href = "${href}" title = "${title}">
          <img src = "${img}">
        </a>
      </li>`;
      $ul.html(html).css("width", LIWIDTH * (data.length+1));
      $ulIds.html("<li></li>" .repeat(data.length))
        .children(":first").addClass("hover");
        autoMove();
    },
    error:function(){alert("网络故障,请检查!")}
  });
  function autoMove(){
    timer = setInterval(function(){
     move();
    }, wait);
  }
  function move(){
    moved++;
    $ul.animate({
      left:-moved*LIWIDTH
    }, interval, function(){
      if(moved == $ul.children().length-1){
        $ul.css("left", 0);
        moved = 0;
      }
      $ulIds.children(":eq("+moved+")").addClass("hover")
        .siblings().removeClass("hover");
    })
  }
  $("#music-slide").mouseenter(function(){
    clearInterval(timer);
    timer=null;
  }).mouseleave(function(){
    autoMove();
  });
  $ulIds.on("click", "li", function(){
    var $li=$(this),i=$li=$li.index();
    moved=i;
    $ul.stop(true).animate({
      left:-moved*LIWIDTH
    }, interval, function(){
      if(moved == $ul.children().length-1){
        $ul.css("left", 0);
        moved = 0;
      }
      $ulIds.children(":eq("+moved+")").addClass("hover")
        .siblings().removeClass("hover");
    })
  });
  var $aLeft = $(".music-left"),$aRight = $(".music-right");
  $aRight.click(function(){
    if(!$ul.is(":animated")){
      move();
    }
  });
  $aLeft.click(function(){
    if(!$ul.is(":animated")){  
      if(moved == 0){
        moved=$ul.children().length-1;
        $ul.css("left", -moved*LIWIDTH);
      }
      moved--;
      $ul.animate({
        left:-moved*LIWIDTH
      }, interval, function(){
        $ulIds.children(":eq("+moved+")").addClass("hover")
          .siblings().removeClass("hover");
      })
    }    
  })
});