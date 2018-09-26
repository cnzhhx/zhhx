window.onload = function() {
	var translate =  document.getElementById('translate');
	var translateword = document.getElementById("go");
	var gogo = document.getElementById('gogo');
	var vocabulary = {
	"forever" : "永远",
	"love" : "爱"
	}
	translate.onclick = function () {
		gogo.value = "";
		for(var key in  vocabulary) {
			if (key == translateword.value) {
				gogo.value = vocabulary[key];
				return false;
			}
		}
		if (gogo.value == "") {
			alert("词库中没有该单词");
		}
	}

	var add = document.getElementById("add");	
	var addzh = document.getElementById("addzh");	
	var addyw = document.getElementById("addyw");	

	addyw.onclick = function () {
		vocabulary[add.value] = addzh.value;
		alert("添加成功");
	}

	var body1 = document.getElementById("body1");
	var body2 = document.getElementById("body2");
	var body3 = document.getElementById("body3");
	var body4 = document.getElementById("body4");
	var selection = document.getElementById("selection");
	var allas = selection.children;

	for (var i = 0; i < allas.length; i++) {
		(function (i) {
			var li = allas[i];
			li.onclick = function () {
				for (var j = 0; j < allas.length; j++) {
					allas[j].style.backgroundColor = "#ffffff";
					allas[i].style.backgroundColor = "orangered";
				}
				body1.style.display = "none";
				body2.style.display = "none";
				body3.style.display = "none";
				body4.style.display = "none";
				if (i == 0) {
					body1.style.display = "block";
				}
				if (i == 1) {
					body2.style.display = "block";
				}
				if (i == 2) {
					body3.style.display = "block";
				}
				if (i == 3) {
					body4.style.display = "block";
				}				
			}
		})(i);
	}
}
