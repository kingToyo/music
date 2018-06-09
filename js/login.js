$(function() {
    //找到登录按钮
    $("#login>:button").click(function() {
        var $btn = $(this);
        $.ajax({
            type: "POST",
            url: "data/users/signin.php",
            //遍历input内容
            data: $btn.parent().serialize(),
            success: function(msg) {
                //判断
                if (msg == "登录成功") {
                    alert(msg);
                    location.href = "index.html";
                } else if (msg == "用户名或密码错误请重新输入") {
                    alert(msg);
                    location.href = "login.html";
                }
            }
        })
    })
});