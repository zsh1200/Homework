/*getml */
var getml=document.getElementById("getml");
var getli=getml.getElementsByTagName("li");

for(var i=0;i<getli.length;i++){
	getli[i].onclick=function(){
		//console.log(this.innerHTML);
		var set1=document.getElementById("set1");
		var p=document.createElement("p");
		var text=document.createTextNode("“"+this.innerHTML+"”");
		p.appendChild(text);
		console.log(p);
		p.setAttribute("class","font_6");
		set1.replaceChild(p,set1.lastElementChild);
		this.parentNode.children[0].setAttribute("class","none");
		this.parentNode.children[1].setAttribute("class","none");
		this.setAttribute("class","borderr");
		
	}

}
var Bimg = document.getElementById("Bimg");
var h=document.getElementById("h")   ;
var first=document.getElementById("a1");
var last=document.getElementById("a2");
first.onmouseover=function(){
	h.setAttribute("src","任务所需小图/img/pp0.jpeg");
	Bimg.setAttribute("src","任务所需小图/img/pp0.jpeg");
	first.setAttribute("class","aaaa1");
	last.setAttribute("class","aaaa2");

}
last.onmouseover=function(){
	h.setAttribute("src","任务所需小图/img/pp1.jpeg");
	Bimg.setAttribute("src","任务所需小图/img/pp1.jpeg");
	first.setAttribute("class","aaaa2");
	last.setAttribute("class","aaaa1");
}


var low=document.getElementById("low");
var high=document.getElementById("high");
var num=document.getElementById("num");

		high.onclick=function (){
			if(parseInt(num.value)==5){       		
	        		high.style.cursor='not-allowed';
	        		low.style.cursor='pointer';
	        	}
	        	else{
	        		num.setAttribute("value", parseInt(num.value)+1);       		
					console.log(num);
	        		high.style.cursor='pointer';
	        	}
			
		}
		low.onclick=function (){
			if(parseInt(num.value)==1){       		
	        		low.style.cursor='not-allowed';
	        		high.style.cursor='pointer';
	        	}
	        	else{
	        		num.setAttribute("value",parseInt(num.value)-1);       		
					console.log(num);
	        		low.style.cursor='pointer';
	        	}
		}

var v =document.getElementById("v");
var tag1=document.getElementById("tag1");
var tag2=document.getElementById("tag2");
var close=document.getElementById("close");
var tan=document.getElementById("tan");
v.onclick=function(){
	tan.setAttribute("style","display:block;");
}
tag2.onclick=function(){
	tan.setAttribute("style","display:none;");
	//window.onload;
}
tag1.onclick=function(){
	tan.setAttribute("style","display:none;");
	//window.onload;
}
close.onclick=function(){
	tan.setAttribute("style","display:none;");
	//window.onload;
}




		var img1 = document.getElementById("img1");
		var img2 = document.getElementById("img2");
		var slider = document.getElementById("slider");
		
		var box = document.getElementById('box');
		img1.onmouseover = function () {
			slider.style.display = 'block';
			img2.style.display = 'block';
		}
		img1.onmouseout = function () {
			slider.style.display = 'none';
			img2.style.display = 'none';
		}

		img1.onmousemove = function (ev) {
			var ev = ev || window.event;
			var TOP=document.body.scrollTop||document.documentElement.scrollTop;//滚动条的距离

			var oL = ev.clientX -20- box.offsetLeft - slider.offsetWidth / 2;
			var oT = ev.clientY - box.offsetTop - slider.offsetHeight / 2-15+TOP;

			var oMaxw = img1.offsetWidth - slider.offsetWidth;
			var oMaxh = img1.offsetHeight - slider.offsetHeight;

			oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

			slider.style.left = oL + 'px';
			slider.style.top = oT + 'px';

			var scale = img2.offsetWidth / img1.offsetWidth;
			Bimg.style.left = -scale * oL-70 + 'px'
			Bimg.style.top = -scale * oT -40+ 'px'
		}