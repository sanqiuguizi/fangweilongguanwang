	$(function(){
			
			$(".leftTop ul li:not(:first-child)").hover(function(){
				$(this).children("span").hide();
			},function(){
				$(this).children("span").show();
			});
			
		});