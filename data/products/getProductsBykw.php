<?php
  //连接数据库
  require_once("../init.php");
  //定义一个数组
  $output=[
    "count"=>0,//总数
    "pageSize"=>9,//每页九个
    "pageCount"=>0,//总页数=ceil(count/pageSize)
    "pageNo"=>0,//当前第几页
    "products"=>[]//商品列表
  ];
  //接受前端发送过来的KW
  @$kw=$_REQUEST["kw"];
  //接受前端发送过来的PNO
  @$pno=$_REQUEST["pno"];
  //判断不为空才执行以下代码
  if($kw!=null&&$pno!=null){
    //用空格切割:["mac","i7","256G"]
    $kws=explode(" ",$kw);
    //遍历并替换数组元素为指定格式
    for($i=0;$i<count($kws);$i++){
      //把前端发送的搜索关键字和SQL语句拼接到一起
      $kws[$i]=" title like '%".$kws[$i]."%' ";
    }
    //用and的相连
    $where=implode(" and ",$kws);
    //拼SQL语句
    $sql="SELECT * FROM xz_laptop where $where";
    //接受数据库返回的数据
    $result=mysqli_query($conn,$sql);
    //查询的总数
    $count=count(mysqli_fetch_all($result,1));
    //计算一共有几页(向上取整,不够一页的也显示一页)
    $pageCount=ceil($count/$output["pageSize"]);
    //把计算后的数据赋值给output
    $output["count"]=$count;
    //把计算后的数据赋值给output
    $output["pageCount"]=$pageCount;
    //使用子查询去图片中查询图片
    $sql="SELECT *,(select md from xz_laptop_pic where laptop_id=lid limit 1)as md FROM xz_laptop where $where";
    //用点拼接SQL语句
    $sql.=" limit ".$pno*$output["pageSize"].",".$output["pageSize"];
    //把数据赋值给output
    $output["pageNo"]=$pno;
    //测试代码
    //var_dump($sql);
    //接受数据库查询的总数据
    $result=mysqli_query($conn,$sql);
    //把数据赋值到数组products中
    $output["products"]=mysqli_fetch_all($result,1);
  }
  //以json格式返还给前端
  echo json_encode($output);
?>