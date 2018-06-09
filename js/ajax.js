//封装取值函数
function $(id){
	return document.getElementById(id);
}
// 创建异步对象
function crXhr(){
	var xhr=null;
	// 判断是否有返回值
	if(window.XMLHttpRequest){
	// 有返回值执行标准创建格式
		xhr=new XMLHttpRequest();
	}else{
	// 没有执行IE8以下的创建格式(IE8以上都支持标准创建)
		xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}