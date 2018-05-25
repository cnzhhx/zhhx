window.onload = function () {
	// left
	var left_div_ul = $("left_div_ul");
	var allLis = left_div_ul.children;
	// console.log(allLis);

	for (var i = 0; i < allLis.length; i++) {
		var li = allLis[i];
		li.onmouseover = function () {
			if (this.className == 'selected') {

			}else{
				this.className = 'selected1';
			}
		}
		li.onmouseout = function () {
			// var lilast = this;	
			if (this.className == 'selected') {

			}else{
				this.className = '';
			}
		}	
		li.onclick = function () {
			for (var i = 0; i < allLis.length; i++) {
				allLis[i].className = "";
				this.className = 'selected';
			}
		}	
	}

	//中间          轮播有问题    请在以后解决
	var center_div = $("ul") ;
	var allA = center_div.children;
	var cuoyinginde = 0, indicatorIndex = 0;
	var alllizhongs = $("ol").children;
	var timer = null;

	center_div.appendChild(allA[0].cloneNode(true));


	for (var j = 0; j < alllizhongs.length; j++) {
		(function(j){
			var lizhong = alllizhongs[j];
			lizhong.onclick = function () {
				if (this.className == "suoyingindex") {

				}else{
					for (var i = 0; i < alllizhongs.length; i++) {
						alllizhongs[i].className = "";
					}
					this.className = "suoyingindex";

					//动
					constant($("ul"), (-660 * j), 100);
					cuoyinginde = indicatorIndex = j;					
				}
			}
		})(j);
	}

		var timer = setInterval(autoPlay, 2000);
		
		$("center_div_img").onmouseover = function () {
			clearInterval(timer);
		}

		$("center_div_img").onmouseout = function () {
			timer = setInterval(autoPlay, 2000);
		}


		function autoPlay() {
			//ul滚起来
			cuoyinginde++;
			if (cuoyinginde > allA.length - 1) {
				$("ul").style.left = 0;
				cuoyinginde = 1;
			}
			constant($("ul"), -cuoyinginde * 660, 50);

			//指示器滚起来
			indicatorIndex++;
			if(indicatorIndex >= alllizhongs.length - 1) {
				indicatorIndex = 0;
			}
			for (var i = 0; i < alllizhongs.length; i++) {
				alllizhongs[i].className = "";
			}

			alllizhongs[indicatorIndex].className = "suoyingindex";
		}	
	


	//右边顶部切换
	var azhuanhuan1 = $("azhuanhuan1");
	var azhuanhuan2 = $("azhuanhuan2");
	var divzhuanhuan1 = $("divzhuanhuan1");
	var divzhuanhuan2 = $("divzhuanhuan2");
	var backgroundPosition = $("bianjiao").style.backgroundPosition;
	console.log();

	azhuanhuan1.onclick = function () {
		azhuanhuan2.className = "";		
		azhuanhuan1.className = "right-selected";
		divzhuanhuan2.className = "";
		divzhuanhuan1.className = "right-1-box-mianban-hengtiao-selected";
		$("nice2").style.display = "none";
		$("nice1").style.display = "block";
		$("bianjiao").style.backgroundPosition = 0 + "px " + -150 +"px";  
	}

		azhuanhuan2.onclick = function () {
		azhuanhuan1.className = "";
		azhuanhuan2.className = "right-selected";
		divzhuanhuan1.className = "";
		divzhuanhuan2.className = "right-1-box-mianban-hengtiao-selected";
		$("nice1").style.display = "none";
		$("nice2").style.display = "block";
	}

	// $("bianjiao").onclick = function () {
	// 	console.log(backgroundPosition);
	// 	// if ($("bianjiao").style.backgroundPosition == ) {

	// 	// }
	// }

}
