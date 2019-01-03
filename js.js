 window.onload=function () {
    var cover =document.getElementsByClassName('cover')[0];
     window.onscroll=function () {
       var st=document.documentElement.scrollTop;
       if(st>180){
         cover.style.position='fixed'
       }
       else{
         cover.style.position='static'
       }
     }
    }

//链接 
function lianjie(){
    window.open(name="https://zsh1200.github.io/Homework/index2.html");
}

/* 右竖轮播*/
var ul = document.getElementById("a");
    /*添加*/

   for(var i=1;i<3;i++){
      for(var j=1;j<14;j++){
        var oLi=document.createElement("li");
        oLi.innerHTML="[公告] 帮购及VIP服务调整"+j;
        a.appendChild(oLi);
      }

   }
   



function show() {
    var top = ul.offsetTop-4; 
    ul.style.top = top + "px";
    
    if (-1*ul.offsetTop  >=ul.offsetHeight/2) {
        ul.style.top = 0;
    }
    
} 
var t = setInterval(show, 100);

var li = document.getElementById("a").getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
    li[i].onmouseout = function () {
        t = setInterval(show, 100);
    };

    li[i].onmouseover = function () {
        clearInterval(t);
    };
}


        

/* 中间复杂版轮播*/ 
 
var box = document.getElementById('content_1_1');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('navv').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;
box.onmouseover = function () {
  animate(left, {
    opacity: 0.6
  })
  animate(right, {
    opacity: 0.6
  })
  clearInterval(timer); //图片停止滚动
}

box.onmouseout = function () {
  animate(left, {
    opacity: 0
  })
  animate(right, {
    opacity: 0
  })
  timer = setInterval(next, 3000); //图片开始接着滚动
}
right.onclick = next;
left.onclick = prev;

function next() {
  if (isMoving) {
    return;
  }
  isMoving = true;
  index++;
  navmove();
  animate(slider, {
    left: -800 * index
  }, function () {
    if (index == 7) {
      slider.style.left = '-800px';
      index = 1;
    }
    isMoving = false;
  });
}

function prev() {
  if (isMoving) {
    return;
  }
  isMoving = true;
  index--;
  navmove();
  animate(slider, {
    left: -800 * index
  }, function () {
    if (index == 0) {
      slider.style.left = '-4800px';
      index = 6;
    }
    isMoving = false;
  });
}
  //按钮点击切换事件
for (var i = 0; i < oNavlist.length; i++) {
  oNavlist[i].index = i;
  oNavlist[i].onclick = function () {
    index = this.index + 1;
    navmove();
    animate(slider, {
      left: -800 * index
    });
  }

}
  //图片切换时按钮样式跟着切换
function navmove() {
  for (var i = 0; i < oNavlist.length; i++) {
     oNavlist[i].setAttribute("style","");
  }
  if (index > 6) {
    oNavlist[0].setAttribute("style","background-color: #fe6c01");
  } else if (index <= 0) {
    oNavlist[5].setAttribute("style","background-color: #fe6c01");
  } else {

    oNavlist[index - 1].setAttribute("style","background-color: #fe6c01");
  }
}

  //页面打开时自动滚动切换
timer = setInterval(next, 3000);

function getStyle(obj, attr) { //返回值带有单位px
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj, null)[attr];
  }
}

function animate(obj, json, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var flag = true;
    for (var attr in json) {
      (function (attr) {
        if (attr == "opacity") {
          var now = parseInt(getStyle(obj, attr) * 100);
          var dest = json[attr] * 100;
        } else {
          var now = parseInt(getStyle(obj, attr));
          var dest = json[attr];
        }
        var speed = (dest - now) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (now != dest) {
          flag = false;
          if (attr == "opacity") {
            obj.style[attr] = (now + speed) / 100;
          } else {
            obj.style[attr] = now + speed + "px";
          }
        }
      })(attr);
    }
    if (flag) {
      clearInterval(obj.timer);
      callback && callback(); //如果回调函数存在，就调用回调函数
    }
  }, 30);
}




/*money*/
function getmoney(){
  var ss=document.getElementById("ss");
  for(var i=0;i<ss.length;i++){
    if(ss[i].selected){
      //console.log(ss[i].value)
      return ss[i].value;
    }
  }

}
function setmoney(){
  var m=document.getElementById("m");
  var sp=document.createElement("span");
  sp.setAttribute("class","tip");
  var text=document.createTextNode(getmoney());
  sp.appendChild(text);
  console.log(sp);
  m.replaceChild(sp,m.lastElementChild);
  
}

/*
window.onload=function () {
    var cover =document.getElementsByClassName('cover')[0];
      window.onscroll=function () {
        var st=document.documentElement.scrollTop;
        if(st>180){
          cover.style.position='fixed'
        }
        else{
          cover.style.position='static'
        }
      }
    }

*/
var  fly = document.getElementById("fly--1");
var fly1 = document.getElementById("fly--2");
var fly2 = document.getElementById("fly--3");
var fly3 = document.getElementById("fly--4");


  var timer = null;
  function Move(iTarget) {

      fly.style.right = '-100px';
      var speed = 1;
      clearInterval(timer);
      timer = setInterval(function () {
        if(iTarget){
            fly.style.right = parseFloat(fly.style.right) + speed + 'px';
            if(parseFloat(fly.style.right) >= -20){
                fly.style.right = '-20px';
                window.clearInterval(timer);
            }
        }else {
            fly.style.right = parseFloat(fly.style.right) - speed + 'px';
            if(parseFloat(fly.style.right) <= -100){
                fly.style.right = '-100px';
                window.clearInterval(timer);
            }
        }
    }, 5);
}

var timer1 = null;
  function Move1(iTarget1) {
    fly1.style.right = '-100px';
      
      var speed = 1;
      clearInterval(timer1);
      timer1 = setInterval(function () {
        if(iTarget1){
            fly1.style.right = parseFloat(fly1.style.right) + speed + 'px';
            if(parseFloat(fly1.style.right) >= 0){
                fly1.style.right = '0px';
                window.clearInterval(timer1);
            }
        }else {
            fly1.style.right = parseFloat(fly1.style.right) - speed + 'px';
            if(parseFloat(fly1.style.right) <= -100){
                fly1.style.right = '-100px';
                window.clearInterval(timer1);
            }
        }
    }, 5);
}



var timer2 = null;
  function Move2(iTarget2) {
    fly2.style.right = '-100px';
      
      var speed = 1;
      clearInterval(timer2);
      timer2 = setInterval(function () {
        if(iTarget2){
            fly2.style.right = parseFloat(fly2.style.right) + speed + 'px';
            if(parseFloat(fly2.style.right) >= 0){
                fly2.style.right = '0px';
                window.clearInterval(timer2);
            }
        }else {
            fly2.style.right = parseFloat(fly2.style.right) - speed + 'px';
            if(parseFloat(fly1.style.right) <= -100){
                fly2.style.right = '-100px';
                window.clearInterval(timer2);
            }
        }
    }, 5);
}



var timer3 = null;
  function Move3(iTarget3) {
    fly3.style.right = '-100px';
      
      var speed = 1;
      clearInterval(timer3);
      timer3 = setInterval(function () {
        if(iTarget3){
            fly3.style.right = parseFloat(fly3.style.right) + speed + 'px';
            if(parseFloat(fly3.style.right) >= -15){
                fly3.style.right = '-23px';
                window.clearInterval(timer3);
            }
        }else {
            fly3.style.right = parseFloat(fly3.style.right) - speed + 'px';
            if(parseFloat(fly3.style.right) <= -100){
                fly3.style.right = '-100px';
                window.clearInterval(timer3);
            }
        }
    }, 5);
}



