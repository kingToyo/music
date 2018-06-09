<?php
  //连接数据库
  require_once("../init.php");
  //SQL语句
  $sql="SELECT * FROM `xz_index_product` where seq_recommended!=0 order by seq_recommended";
  //接受返回的数据
  $result=mysqli_query($conn,$sql);
  //把返回的数据转成json数组返回前端
  echo json_encode(mysqli_fetch_all($result,1));
?>