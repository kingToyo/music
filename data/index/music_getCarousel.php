<?php
	//连接数据库
  require_once("../init.php");
	//SQL语句
  $sql = " select * from music_index_carousel ";
  //接收数据库返回的结果
	$result = mysqli_query($conn, $sql);
	//在返回的结果中抓取一行转成JSON格式返回到前端
  echo json_encode(mysqli_fetch_all($result, 1));
?>