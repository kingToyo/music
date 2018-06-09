/*$(function(){
  // 注册页
  $("#register>p>:button").click(function(){
    var $btn=$(this);
    $.ajax({
      type:"POST",
      url:"data/register/01-register.php",
      data:$btn.parent().parent().serialize(),
      success:function(data){
        if(data.code=="1"){
          alert(data.msg);
           location.href="login.html";
        }else{
          alert(data.msg);
           location.href="register.html";
        }
      }
    })
  })
});
function mgm(){
  // 1.创建异步对象
  var xhr=crXhr();
  // 2.绑定监听事件
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
      var data=xhr.responseText;    
      if (data == "1") {
        $("#show-uname").html("<b><i>用户名已被占用</i></b>");
      } else if (data == " ") {
        $("#show-uname").html("<b><i>用户名不能为空</i></b>");
      } else if (data == "0") {
        $("#show-uname").html("<b><i>用户名可用</i></b>");
      }
    }
  }
  // 2.1获取uname文本框的值
 var uname = $("#uname").val();
  // 3.打开提交连接
  xhr.open("get","data/register/02-register.php?uname="+uname,true);
  // 4.发送请求主体
  xhr.send(null);
}
function btn_upwp(){
  $("#show-upwd").html("<b><i>请输入6~12位密码！</i></b>");
}
function btn_cpwp(){
  $("#show-cpwd").html("<b><i>请输入6~12位确认密码！</i></b>");
} 
function btn_upwd(){
  var upwd = $("#upwd").val();
  if(upwd==""){
    $("#show-upwd").html("<b><i>密码不能为空</i></b>");
  }else{
    $("#show-upwd").html("<b><i>通过</i></b>");
  }
}
function btn_cpwd(){
  var upwd = $("#upwd").val();
  var cpwd = $("#cpwd").val();
  if(upwd!=cpwd){
    $("#show-cpwd").html("<b><i>确认密码不一致</i></b>");
  }else{
    $("#show-cpwd").html("<b><i>通过</i></b>");
  }
}*/
// ==========================================

function mgm(){
  // 1.创建异步对象
  var xhr=crXhr();
  var knu = $("#uname").val();
  // 2.绑定监听事件
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
      var data=xhr.responseText;    
      if (data == "1") {
        
        $("#show-uname").html("<img src='img/error.png'>&nbsp;<b><i class='warning'>用户名已被占用</i></b>");
        $("#register>p>:button").click(function(){
          alert("用户名已被占用,请重试!");
          location.href = "register.html";
        })
      } else if (knu === "") {
        $("#show-uname").html("<img src='img/error.png'>&nbsp;<b><i class='warning'>用户名不能为空</i></b>");
        $("#register>p>:button").click(function(){
          alert("用户名不能为空,请重试!");
          location.href = "register.html";
        })
      } else if (knu.length < 6) {
        $("#show-uname").html("<img src='img/error.png'>&nbsp;<b><i class='warning'>用户名不能少于6位!</i></b>");
      } else if (data == "0") { 
        $("#show-uname").html("<img src='img/green.png'>&nbsp;<b><i>用户名可用</i></b>");
        $(function(){
          // 注册页
          $("#register>p>:button").click(function(){
            var $btn=$(this);
            $.ajax({
              type:"POST",
              url:"data/register/01-register.php",
              data:$btn.parent().parent().serialize(),
              success:function(data){
                if(data.code=="1"){
                  alert(data.msg);
                   location.href="login.html";
                }else{
                  alert(data.msg);
                   location.href="register.html";
                }
              }
            })
          })
        });
      }
    }
  }
  // 2.1获取uname文本框的值
 var uname = $("#uname").val();
  // 3.打开提交连接
  xhr.open("get","data/register/02-register.php?uname="+uname,true);
  // 4.发送请求主体
  xhr.send(null);
}
function btn_upwp(){
  $("#show-upwd").html("<img src='img/info.png'>&nbsp;<b><i class='remind'>请输入6~12位密码！</i></b>");
}
function btn_cpwp(){
  $("#show-cpwd").html("<img src='img/info.png'>&nbsp;<b><i class='remind'>请输入6~12位确认密码!</i></b>");
} 
function mam(){
  $("#show-uname").html("<img src='img/info.png'>&nbsp;<b><i class='remind'>请输入6~12位登录账号!</i></b>");
}
function btn_iphone(){
  $("#show-phone").html("<img src='img/info.png'>&nbsp;<b><i class='remind'>请输入您的11位电话号码!</i></b>");
}
function btn_emails(){
  $("#show-email").html("<img src='img/info.png'>&nbsp;<b><i class='remind'>请输入您的邮箱地址!</i></b>"); 
}
function btn_upwd(){
  var upwd = $("#upwd").val();
  if(upwd===""){
    $("#show-upwd").html("<img src='img/error.png'>&nbsp;<b><i class='warning'>密码不能为空</i></b>");
    $("#register>p>:button").click(function(){
      alert("密码不能为空,请重试!");
    })
  }else{
    $("#show-upwd").html("<img src='img/green.png'>&nbsp;<b><i>通过</i></b>");
  }
}
function btn_cpwd(){
  var upwd = $("#upwd").val();
  var cpwd = $("#cpwd").val();
  if(upwd!=cpwd){
    $("#show-cpwd").html("<img src='img/error.png'>&nbsp;<b><i class='warning'>确认密码不一致</i></b>");
    $("#register>p>:button").click(function(){
      alert("确认密码不一致,请重试!");
    })
  }else if(cpwd===""){
    $("#show-cpwd").html("<img src='img/error.png'>&nbsp;<b><i class='warning'>确认密码不能为空</i></b>");
    $("#register>p>:button").click(function(){
      alert("确认密码不能为空,请重试!");
    })
  }else{
    $("#show-cpwd").html("<img src='img/green.png'>&nbsp;<b><i>通过</i></b>");
  }
}
console.log(1);
function btn_phone(){
  var phone = $("#phone").val();
  var stwt = /(\+86|0086)?\s*1[3-9]\d{9}/;
  if(stwt.test(phone)){
    $("#show-phone").html("<img src='img/green.png'>&nbsp;<b><i>通过</i></b>");
  }else{
    $("#show-phone").html("<img src='img/error.png'>&nbsp;<b><i class='warning'>号码格式不正确,请重试!</i></b>");
  }
  if(phone ==""){
    $("#show-phone").html("<img src='img/error.png'>&nbsp;<b><i class='warning'>电话号码不能为空!</i></b>");
  }
}

