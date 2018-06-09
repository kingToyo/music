<?php
  //设置效应头格式为json
  header("Content-Type:application/json;charset=utf-8");
	#1.接受前端数据
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
	$uemail=$_REQUEST["uemail"];
	$uphone=$_REQUEST["uphone"];
	$user_name=$_REQUEST["user_name"];
	$ugender=$_REQUEST["ugender"];
	if($uname != null && $upwd != null){
		#2.连接数据库
		require_once("../init.php");
		//设置查询编码为UTF-8
		mysqli_query($conn,"SET NAMES UTF8");
		#3.拼写sql语句
		$sql=" insert into hd_user(uname,upwd,email,phone,user_name,gender)values('$uname','$upwd','$uemail','$uphone','$user_name','$ugender')";
		#4.获取结果
		$result=mysqli_query($conn,$sql);
		#5.根据结果判定注册是否成功
		if($result==true){
			echo '{"code":1, "msg":"注册成功"}';
		}else{
			echo '{"code":-1, "msg":"注册失败,请重试!"}';
		}
	}else{
		echo '{"code":-1, "msg":"注册失败,请重试!"}';
	}
?>