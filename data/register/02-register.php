<?php
#1.接受前端数据
$uname=$_REQUEST["uname"];
#2.连接数据库
require_once("../init.php");
#3.拼接sql语句
$sql="select * from hd_user where uname='$uname'";
#4.获得执行结果
$result=mysqli_query($conn,$sql);
#5.结果行中抓取一行数据
 $row=mysqli_fetch_row($result);
 if($row==null){
 	echo "0";
 }else{
 	echo "1";
 }
?>