<?php
//用户登录
//连接数据库
require_once("../init.php");
//前端传入的数据
@$uname = $_REQUEST["uname"];
//前端传入的数据
@$upwd = $_REQUEST["upwd"];
//判断前端传入的数据不是空才执行后面的代码
if($uname != null && $upwd != null){
	//写SQL语句
	$sql= " select * from hd_user where uname='$uname' and binary upwd='$upwd' ";
	//接收数据库返回的数据
	$result = mysqli_query($conn,$sql);
	//从返回的数据中1取出一行数据
	$row = mysqli_fetch_row($result);
	//判断返回的数据不是空数据
	if($row != null){
		//在服务器上注册一个UID
		session_start();
		//把名字存进UID内
		$_SESSION["uid"] = $row[0];
		//返回的值是true
		echo "登录成功";
	}else{//否则
		//返回值是false
		echo "用户名或密码错误请重新输入";
	}	
}else{
	echo "用户名或密码不能空";
}