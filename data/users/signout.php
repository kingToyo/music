<?php
//注销登录信息
//data/users/signout.php
//打开session
session_start();
//清楚session中的用户数据
session_unset();
//删除服务器存储用户数据的表格
session_destroy();