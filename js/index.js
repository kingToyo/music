// 广告轮播样式
$(function() {
    //定义两个全局变量
    var $ulIds = $(".indicators");
    var $ul = $(".banner-img"),
        //设置图片的宽.滑动时间.定时器.和悬停事件
        LIWIDTH = 1200,
        interval = 500,
        wait = 3000,
        moved = 0,
        timer = null;
    //发送AJAX请求
    $.ajax({
        type: "get",
        url: "data/index/getCarousel.php",
        dataType: "json",
        success: function(data) {
            //获取数据结构出来
            var html = "";
            for (var c of data) {
                var { img, hrer, title } = c;
                //模板拼接动态数据
                html +=
                    `<li>
          <a href="${href}" title="${title}">
            <img src="${img}">
          </a>
        </li> `;
            }
            //结构/模板拼接动态数据
            var { img, href, title } = data[0];
            html +=
                `<li>
        <a href = "${href}" title = "${title}">
          <img src = "${img}">
        </a>
      </li>`;
            $ul.html(html).css("width", LIWIDTH * (data.length + 1));
            $ulIds.html("<li></li>".repeat(data.length))
                .children(":first").addClass("hover");
            autoMove();
        }
       
    });
    function autoMove() {
        timer = setInterval(function() {
            move();
        }, wait);
    }
    function move() {
        moved++;
        $ul.animate({
            left: -moved * LIWIDTH
        }, interval, function() {
            if (moved == $ul.children().length - 1) {
                $ul.css("left", 0);
                moved = 0;
            }
            $ulIds.children(":eq(" + moved + ")").addClass("hover")
                .siblings().removeClass("hover");
        })
    }
    $("#slide").mouseenter(function() {
        clearInterval(timer);
        timer = null;
    }).mouseleave(function() {
        autoMove();
    });
    $ulIds.on("click", "li", function() {
        var $li = $(this),
            i = $li = $li.index();
        moved = i;
        $ul.stop(true).animate({
            left: -moved * LIWIDTH
        }, interval, function() {
            if (moved == $ul.children().length - 1) {
                $ul.css("left", 0);
                moved = 0;
            }
            $ulIds.children(":eq(" + moved + ")").addClass("hover")
                .siblings().removeClass("hover");
        })
    });
    var $aLeft = $(".ck-left"),
        $aRight = $(".ck-right");
    $aRight.click(function() {
        if (!$ul.is(":animated")) {
            move();
        }
    });
    $aLeft.click(function() {
        if (!$ul.is(":animated")) {
            if (moved == 0) {
                moved = $ul.children().length - 1;
                $ul.css("left", -moved * LIWIDTH);
            }
            moved--;
            $ul.animate({
                left: -moved * LIWIDTH
            }, interval, function() {
                $ulIds.children(":eq(" + moved + ")").addClass("hover")
                    .siblings().removeClass("hover");
            })
        }
    })
    // 楼层电梯效果(后期再做)
    //找到父元素
    var $divList=$("#lift");
    var $floors=$(".floor");
    //为父元素绑定事件
    $(window).scroll(function(){
      var scrollTop=$(window).scrollTop();
      if(scrollTop>=200){
        $divList.show();
        $floors.each(function(i,f){
          var $f=$(f),
            offsetTop=$f.offset().top;
          if(offsetTop<=scrollTop+innerHeight/2)
            $divList.find(".lift_item:eq("+i+")")
              .addClass("lift_item_on")
              .siblings().removeClass("lift_item_on");
        })  
      }else{
        $divList.hide();
      }
      $divList.children("ul").on("click", "li", function(){
        var $li=$(this),
          i=$li.index(),
            offsetTop=$($floors[i]).offset().top;
        $("html, body").stop(true).animate({
          scrollTop: offsetTop
        },500);     
      }) 
    });
//设置MV的轮播效果
    //定义一个全局变量
    var $div_xz = $(".mv_xz"); 
    // console.log($div_xz);
    //定义图片的宽.滑动时间.定时器.和悬停事件
    var LIWIDTHI = 1200,
    intervals = 500,
    waits = 5000,
    moveds = 0,
    timers = null;
    
        timers = setInterval(function() {
            moves();
        }, waits);
    function moves() {
        moveds++;
        $div_xz.animate({
            left: -moveds * LIWIDTHI
            }, intervals, function() {
            if (moveds === 3) {
                $div_xz.css("left", 0);
                moveds = 0;
             }
            // console.log(moveds);
        })
    }
});
