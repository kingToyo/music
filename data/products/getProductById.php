<?php
  //连接数据库
  require_once("../init.php");
  //接受前端传输过来的lid
  @$lid=$_REQUEST["lid"];
  //定义一个二维数组保存数据库中查询的数据
  $output=[
    "product"=>[],
    "pics"=>[],
    "specs"=>[]
  ];
  if($lid!=null){
    //拼接SQL语句
    $sql="SELECT * FROM `xz_laptop` where lid=$lid";
    //接受返回的数据
    $result=mysqli_query($conn,$sql);
    //把查询的商品详情数据返回到output中的product数组中
    $output["product"]=mysqli_fetch_all($result,1)[0];
    //拼写SQL语句，查询商品图片信息
    $sql="SELECT * FROM xz_laptop_pic where laptop_id=$lid";
    //接受返回的数据
    $result=mysqli_query($conn,$sql);
    //把查询的图片数据返回到output中的pics数组中
    $output["pics"]=mysqli_fetch_all($result,1);
    //求fid的
    $fid=$output["product"]["family_id"];
    //拼写SQL语句，查询商品的所有规格信息
    $sql="SELECT lid,spec FROM `xz_laptop` where family_id=$fid";
    //接受返回的数据
    $result=mysqli_query($conn,$sql);
    //把查询的图片数据返回到output中的pics数组中
    $output["specs"]=mysqli_fetch_all($result,1);
  }
  //以json格式发送给前端
  echo json_encode($output);
?>