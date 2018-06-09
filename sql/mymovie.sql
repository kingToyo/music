SET NAMES UTF-8;
DROP DATABAS mm CHARSET UTF8;
USE mm;
#网站基本信息表！
CREATE TABLE haidiemusic(
  site_name VARCHAR(16),
  logo VARCHAR(64),
  admin_email VARCHAR(64),
  icp VARCHAR(32),
  copyright VARCHAR(64)
)

#插入数据
INSERT INTO mm_site_info
VALUES('我的音乐网','img/logo.png',
'admin@mm.com','苏ICP证0512056788号',
'版权所有@2009-2018 我的音乐网')

#导航表
CREATE TABLE mm_navbar_item(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(16),
  url VARCHAR(128),
  title VARCHAR(32),
  parent INT #设置二级菜单
)

#插入数据
INSERT INTO mm_navbar_item VALUES
(NULL,'首页','/index.html','跳转到网站首页',NULL),
(NULL,'影讯','/movie.html','最新热度的电影资讯',1),
(NULL,'院线','/cinema.html','查看周边院线动态',1),
(NULL,'订票','/order.html','在线订票',NULL);

#轮播广告条目表
CREATE TABLE mm_carousel_item(
  cid INT PRIMARY KEY AUTO_INCREMET,
  pic VARCHAR(128),
  url VARCHAR(128),
  title VARCHAR(32)
);

#插入数据
INSERT INTO mm_carousel_item VALUES
  (NULL,'img/pic1.jpg','/m1.html','战狼2'),
  (NULL,'img/pic2.jpg','/m2.html','猩球大战'),
  (NULL,'img/pic3.jpg','/m3.html','指环王'),
  (NULL,'img/pic4.jpg','/m4.html','神偷奶爸');

