window.onload = function () {
	//实现瀑布流布局
	waterFull("main", "box");

	//动态加载图片
	window.onscroll = function () {
		if(checkWillLoadImage()) {
			//造数据
			var dataArr = [
			{"src":"img10.jpg"},
			{"src":"img18.jpg"},
			{"src":"img19.jpg"},
			{"src":"img16.jpg"},
			{"src":"img15.jpg"},
			{"src":"img20.jpg"},
			{"src":"img13.jpg"},
			{"src":"img12.jpg"},
			{"src":"img11.jpg"}

			];

			//创建元素
			for (var i = 0; i < dataArr.length; i++) {
				var newBox = document.createElement("div");
				newBox.className = "box";
				$("main").appendChild(newBox);

				var newPic = document.createElement("div");
				newPic.className = "Pic";
				newBox.appendChild(newPic);

				var newImg = document.createElement("img");
				newImg.src = "C:/Users/张浩翔/Documents/GitHub/zhhx/瀑布流效果images/" + dataArr[i].src;
				newPic.appendChild(newImg);				
			}
			//重新布局
			waterFull("main", "box");
		}
	}

};



//实现瀑布流布局
function waterFull(parent, child) {
    // 1. 父盒子居中
    // 1.1 获取所有的盒子
    var allBox = $(parent).getElementsByClassName(child);
    // 1.2 获取子盒子的宽度
    var boxWidth = allBox[0].offsetWidth;
    // 1.3 获取屏幕的宽度
    var screenW = document.documentElement.clientWidth;
    // 1.4 求出列数
    var cols = parseInt(screenW / boxWidth);
    // 1.5 父盒子居中
    $(parent).style.width = cols * boxWidth + 'px';
    $(parent).style.margin = "0 auto";



    //子盒子的定位
    //定义高度数组
    var heightArr = [], boxHeight = 0,minBoxHeight = 0, minBoxIndex = 0;
    //遍历子盒子
    for(var i=0 ; i<allBox.length ; i++) {
    	//求出每一个子盒子的高度
    	boxHeight = allBox[i].offsetHeight;
    	//取出第一行盒子的高度放入高度数组
    	if (i < cols) {
    		heightArr.push(boxHeight);
    	} else {
    		//取出最矮盒子的高度
    		minBoxHeight = _.min(heightArr);
    		//求出最矮盒子的索引
    		minBoxIndex = getMinBoxIndex(heightArr, minBoxHeight);
    		//子盒子定位
    		allBox[i].style.position = 'absolute';
    		allBox[i].style.left = minBoxIndex * boxWidth + 'px';
    		allBox[i].style.top = minBoxHeight + 'px';
    		//更新数组中的高度
    		heightArr[minBoxIndex] += boxHeight;
    	};
    }
}


//获取数组最矮盒子高度的索引
function getMinBoxIndex(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
}


function $(id) {
	return typeof id ==="string" ? document.getElementById(id) : null;
}


function checkWillLoadImage () {
	//获取最后一个盒子
	var allBox = document.getElementsByClassName("box");
	var lastBox = allBox[allBox.length - 1];

	//求出最后一个盒子自身高度的一般 + offsetTop
	var lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;

	//求出屏幕的高度
	var screenW = document.body.clientHeight || document.documentElement.clientHeight;

	//求出页面偏离浏览器的高度
	var scrollTop = scroll().top;

	return lastBoxDis <= screenW + scrollTop;
}




