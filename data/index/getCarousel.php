<?php
	//�������ݿ�
  require_once("../init.php");
	//SQL���
  $sql = " select * from hd_index_carousel ";
  //�������ݿⷵ�صĽ��
	$result = mysqli_query($conn, $sql);
	//�ڷ��صĽ����ץȡһ��ת��JSON��ʽ���ص�ǰ��
  echo json_encode(mysqli_fetch_all($result, 1));
?>