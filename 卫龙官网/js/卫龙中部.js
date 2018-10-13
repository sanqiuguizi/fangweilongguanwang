$(function() {
	//默认情况下:  先将第一个li显示  fadeIn  其他的li fadeOut
	$(".imgList ul li").eq(0).fadeIn(12).siblings().fadeOut(12);
	$(".imgList ul li.nav").eq(0).addClass("active").siblings().removeClass("active");
	//调用大轮播图方法
	startMove();	
	//调用小轮播图方法
	$(".wl-MiddleScroll").Marquee({
		distance:98,//一次滚动的距离
   		duration:5,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
   		time:999,//停顿时间，单位为秒
   		btnGo:{left:'#rightBtn',right:'#leftBtn'},//控制方向的按钮ID，
   		});
});

var index = 1;
var timer = null; //定时器对象
function startMove() {
	stopMove();
	timer = setInterval(function() {
		$(".imgList ul li").eq(index).fadeIn(1200).siblings().fadeOut(1200);
		$(".imgList ul li.nav").eq(index).addClass("active").siblings().removeClass("active");
		index++;
		if(index == 3) {
			index = 0;
		}
	}, 5000);
}

function stopMove() {
	clearInterval(timer);
}

function changeSmallImg(obj) {
	var nowIndex = obj.index();
	index = nowIndex;
	obj.addClass("active").siblings().removeClass("active");
	$(".imgList ul li").eq(index).fadeIn(800).siblings().fadeOut(1200);
}
$(".scolls .imgList ul li a img").hover(function() {
	stopMove();

}, function() {
	startMove();
});

$(".scolls .imgList ul li.nav").hover(function() {
	stopMove();

}, function() {
	startMove();
});

$(".scolls .imgList ul li.nav").click(function() {
	changeSmallImg($(this));
});
