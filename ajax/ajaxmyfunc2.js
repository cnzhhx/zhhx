function obj2str(obj) {
	// "userName":"zhhx",
	// "userPwd":"123456"
	// "t": "454634634"
	//随机数
	obj.t = new Date().getTime();
	var res = [];
	for(var key in obj) {
		//在URL中不可以出现中文的，出现了中文需要转码
		//转码调用encodeURIComponent();
		res.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]));//["userName=zhhx", "userPwd=123456"];
	}
	return res.join("&");  //userName=zhhx&userPwd=123456
}

function ajax(type, url, obj, timeout, success, error) {
	//0.将对象转化为字符串
	var str = obj2str(obj); // key=value&key=value;
	//1.创建一个异步对象
	var xmlhttp = new XMLHttpRequest(), timer;

	//2.设置请求方式跟请求地址
	// method:请求的类型：GET 或 POST
	// url：文件在服务器上的位置
	// async： true（异步）或false（同步）
	if (type === "GET") {
		xmlhttp.open(type, url+"?"+str， true);
		//3.发送请求
		xmlhttp.send();
	}else{
		xmlhttp.open(type, url， true);
		//注意点：下面这条代码必须放置于open跟send之间
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send(str);
	}
	
	//4.监听状态的变化
	xmlhttp.onreadystatechange = function (ev2) {
		// 0: 请求为初始化
		// 1: 服务器连接已建立
		// 2: 请求已接收
		// 3: 请求处理中
		// 4: 请求已完成，且响应已就绪
		if (xmlhttp.readyState === 4) {
			clearInterval(timer);
			//判断请求是否成功
			if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status ===304) {
				//5.处理返回的结果
				success(xmlhttp);
			}else {
				error(xmlhttp);
			}
		}
	}
	//判断外界是否传入超时时间
	if (timeout) {
		timer = setInterval(function () {
			xmlhttp.abort();
			clearInterval(timer);
		}, timeout);
	}
}