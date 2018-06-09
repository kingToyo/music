<?php
//确认是否登录
//data/users/islogin.php
//连接数据库
require_once("../init.php");
//进入session
session_start();
//把前端传入的UID去session中查询是否存在
@$uid=$_SESSION["uid"];
//判断传入的UID不是空数据
if($uid != null){
	//拼写SQL语句
	$sql = "select uname from hd_user where uid=$uid";
	//接收数据库返回的结果
	$result = mysqli_query($conn,$sql);
	//从返回的结果中取出一行数据
	$row = mysqli_fetch_row($result);
	//输出返回结果的uname
	echo json_encode(["ok"=>1, "uname"=>$row[0]]);
}else{//否则
	//没有查询到就输出0
	echo json_encode(["ok"=>0]);
}