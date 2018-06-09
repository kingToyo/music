SET FOREIGN_KEY_CHECKS=0;
-- 设置轮播图
DROP TABLE IF EXISTS `hd_index_carousel`;
CREATE TABLE `hd_index_carousel` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
)ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
-- 轮播图数据  
INSERT INTO `hd_index_carousel` VALUES ( NULL,'img/timg3.jpg','毛不易','/m1.html?lid=29');
INSERT INTO `hd_index_carousel` VALUES ( NULL,'img/timg5.jpg','吴亦凡','/m2.html?lid=18');
INSERT INTO `hd_index_carousel` VALUES ( NULL,'img/timg6.jpg','吕蔷','/m3.html');
INSERT INTO `hd_index_carousel` VALUES ( NULL,'img/timg8.jpg','马良','/m4.html');
-- 会员账号格式
DROP TABLE IF EXISTS `hd_user`;
CREATE TABLE `hd_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
-- 会员账号数据
INSERT INTO `hd_user` VALUES ( NULL, 'dingding', '123456', 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', '0');
INSERT INTO `hd_user` VALUES ( NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', '1');
INSERT INTO `hd_user` VALUES ( NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1');
INSERT INTO `hd_user` VALUES ( NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
--创建MV的数据
