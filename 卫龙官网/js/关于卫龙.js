$(".tlist li").hover(function(){
	$(this).children(".hide").slideDown("fast");
},function(){
	$(this).children(".hide").slideUp("fast");
});

$(".li02").hover(function(){
	$(".li02>a").css({"background":"#02a1e6","border-radius":"4px","color":"white"});
},function(){
	$(".li02>a").css({"background":"url(./img/nav.png)","border-radius":"0px","color":"#333333"});
});

$(".li03").hover(function(){
	$(".li03>a").css({"background":"#e70012","border-radius":"4px","color":"white"});
},function(){
	$(".li03>a").css({"background":"url(./img/nav.png)","border-radius":"0px","color":"#333333"});
});

$(".li04").hover(function(){
	$(".li04>a").css({"background":"#85cf4f","border-radius":"4px","color":"white"});
},function(){
	$(".li04>a").css({"background":"url(./img/nav.png)","border-radius":"0px","color":"#333333"});
});

$(".li05").hover(function(){
	$(".li05>a").css({"background":"#48b9e9","border-radius":"4px","color":"white"});
},function(){
	$(".li05>a").css({"background":"url(./img/nav.png)","border-radius":"0px","color":"#333333"});
});

$(".li06").hover(function(){
	$(".li06>a").css({"background":"#17aa74","border-radius":"4px","color":"white"});
},function(){
	$(".li06>a").css({"background":"url(./img/nav.png)","border-radius":"0px","color":"#333333"});
});


$(".hide06 a").hover(function(){
	$(".li06>a").css({"color":"black"});
	$(this).css({"background":"url(./img/nav.png)","border-radius":"4px","color":"#17aa74","border":"1.5px solid #e6e6e6","width":"102px","margin-left":"1px","font-weight":"bold"});
},function(){
	$(".li06>a").css({"color":"white"});
	$(this).css({"background":"none","border-radius":"0px","color":"#333333","border":"1.5px solid transparent","width":"102px","margin-left":"1px","font-weight":"normal"});
});

$(".hide05 a").hover(function(){
	$(".li05>a").css({"color":"black"});
	$(this).css({"background":"url(./img/nav.png)","border-radius":"4px","color":"#48b9e9","border":"1.5px solid #e6e6e6","width":"102px","margin-left":"1px","font-weight":"bold"});
},function(){
	$(".li05>a").css({"color":"white"});
	$(this).css({"background":"none","border-radius":"0px","color":"#333333","border":"1.5px solid transparent","width":"102px","margin-left":"1px","font-weight":"normal"});
});

$(".hide04 a").hover(function(){
	$(".li04>a").css({"color":"black"});
	$(this).css({"background":"url(./img/nav.png)","border-radius":"4px","color":"#85cf4f","border":"1.5px solid #e6e6e6","width":"102px","margin-left":"1px","font-weight":"bold"});
},function(){
	$(".li04>a").css({"color":"white"});
	$(this).css({"background":"none","border-radius":"0px","color":"#333333","border":"1.5px solid transparent","width":"102px","margin-left":"1px","font-weight":"normal"});
});

$(".hide03 a").hover(function(){
	$(".li03>a").css({"color":"black"});
	$(this).css({"background":"url(./img/nav.png)","border-radius":"4px","color":"#e70012","border":"1.5px solid #e6e6e6","width":"102px","margin-left":"1px","font-weight":"bold"});
},function(){
	$(".li03>a").css({"color":"white"});
	$(this).css({"background":"none","border-radius":"0px","color":"#333333","border":"1.5px solid transparent","width":"102px","margin-left":"1px","font-weight":"normal"});
});

$(".hide02 a").hover(function(){
	$(".li02>a").css({"color":"black"});
	$(this).css({"background":"url(./img/nav.png)","border-radius":"4px","color":"#02a1e6","border":"1.5px solid #e6e6e6","width":"102px","margin-left":"1px","font-weight":"bold"});
},function(){
	$(".li02>a").css({"color":"white"});
	$(this).css({"background":"none","border-radius":"0px","color":"#333333","border":"1.5px solid transparent","width":"102px","margin-left":"1px","font-weight":"normal"});
});

$(".threelogo li").eq(2).hover(function(){
	$(".erweima").animate({bottom:"0"},300);
},function(){
	$(".erweima").animate({bottom:"-120px"},300);
});


