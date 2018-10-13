	function display(obj){
	$(obj).css("display","none");
	}
	function slideDown(obj){
		$(obj).slideDown(50);
	}
	function slideUp(obj){
		$(obj).slideUp(50);
	}

	display(".wl-nav1");
	display(".wl-nav2");
	display(".wl-nav3");
	display(".wl-nav4");
	display(".wl-nav5");

	$("#menu2").hover(function(){
		$("#navTitle1").addClass("actives");
		slideDown(".wl-nav1");
		$(".wl-nav1").hover(function(){
			$(".wl-nav1 p.pPart").hover(function(){
				$(this).addClass("show");
				$(this).siblings().removeClass("show");
				$(this).children('a').addClass("active");
				$(this).siblings().children('a').removeClass("active");	
				$(this).parent(".wl-nav1").prev().removeClass("actives");	
			},function(){
				$(this).removeClass("show");
				$(this).children('a').removeClass("active");
		});					
		},function(){			
			slideUp(".wl-nav1");
		});	
	},function(){
		$("#navTitle1").removeClass("actives");
		slideUp(".wl-nav1");
	});	

	$("#menu3").hover(function(){
		$("#navTitle2").addClass("actives");
		slideDown(".wl-nav2");
		$(".wl-nav2").hover(function(){
			$(".wl-nav2 p.pPart").hover(function(){
				$(this).addClass("show");
				$(this).siblings().removeClass("show");
				$(this).children('a').addClass("active2");
				$(this).siblings().children('a').removeClass("active2");	
				$(this).parent(".wl-nav2").prev().removeClass("actives");	
			},function(){
				$(this).removeClass("show");
				$(this).children('a').removeClass("active2");
		});					
		},function(){			
			slideUp(".wl-nav2");
		});	
	},function(){
		$("#navTitle2").removeClass("actives");
		slideUp(".wl-nav2");
	});	
		
	$("#menu4").hover(function(){
		$("#navTitle3").addClass("actives");
		slideDown(".wl-nav3");
		$(".wl-nav3").hover(function(){
			$(".wl-nav3 p.pPart").hover(function(){
				$(this).addClass("show");
				$(this).siblings().removeClass("show");
				$(this).children('a').addClass("active3");
				$(this).siblings().children('a').removeClass("active3");	
				$(this).parent(".wl-nav3").prev().removeClass("actives");	
			},function(){
				$(this).removeClass("show");
				$(this).children('a').removeClass("active3");
		});					
		},function(){			
			slideUp(".wl-nav3");
		});	
	},function(){
		$("#navTitle3").removeClass("actives");
		slideUp(".wl-nav3");
	});	
	
	$("#menu5").hover(function(){
		$("#navTitle4").addClass("actives");
		slideDown(".wl-nav4");
		$(".wl-nav4").hover(function(){
			$(".wl-nav4 p.pPart").hover(function(){
				$(this).addClass("show");
				$(this).siblings().removeClass("show");
				$(this).children('a').addClass("active");
				$(this).siblings().children('a').removeClass("active");	
				$(this).parent(".wl-nav4").prev().removeClass("actives");	
			},function(){
				$(this).removeClass("show");
				$(this).children('a').removeClass("active");
		});					
		},function(){			
			slideUp(".wl-nav4");
		});	
	},function(){
		$("#navTitle4").removeClass("actives");
		slideUp(".wl-nav4");
	});	
	
	$("#menu6").hover(function(){
		$("#navTitle5").addClass("actives");
		slideDown(".wl-nav5");
		$(".wl-nav5").hover(function(){
			$(".wl-nav5 p.pPart").hover(function(){
				$(this).addClass("show");
				$(this).siblings().removeClass("show");
				$(this).children('a').addClass("active4");
				$(this).siblings().children('a').removeClass("active4");	
				$(this).parent(".wl-nav5").prev().removeClass("actives");	
			},function(){
				$(this).removeClass("show");
				$(this).children('a').removeClass("active4");
		});					
		},function(){			
			slideUp(".wl-nav5");
		});	
	},function(){
		$("#navTitle5").removeClass("actives");
		slideUp(".wl-nav5");
	});	
