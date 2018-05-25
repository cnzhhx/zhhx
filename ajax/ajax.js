window.onload = function (ev) {
	var oBin = document.querySelector("button");
	oBtn.onclick = function (ev1) {
		//1.创建一个异步对象
		var xmlhttp = new XMLHttpRequest();

		//2.设置请求方式跟请求地址
		// method:请求的类型：GET 或 POST
		// url：文件在服务器上的位置
		// async： true（异步）或false（同步）
		xmlhttp.open("GET", "url地址"， true);
		//3.发送请求
		xmlhttp.send();
		//4.监听状态的变化
		xmlhttp.onreadystatechange = function (ev2) {
			// 0: 请求为初始化
			// 1: 服务器连接已建立
			// 2: 请求已接收
			// 3: 请求处理中
			// 4: 请求已完成，且响应已就绪
			if (xmlhttp.readyState === 4) {
					console.log("接收到服务器返回的数据")；//这里还有一个http状态码 例如404等等  也需要进行判断
			}
		}
	}
}