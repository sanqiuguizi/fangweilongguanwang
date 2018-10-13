$(function(){
	$(".getdata").blur(function(){
		if($(this).attr("id")=="phone"){
			checkPhone(this);
		}else{
			checkOther(this);
		}
	});
});

var flag=false;
function checkPhone(obj){
	var reg=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	var input=$(obj).val();
	if(input!=null&&input.trim().length!=0&&reg.test(input)){
		$(obj).next().html("<i class='fa fa-check-circle'></i>");
		flag=true;
	}else{
		$(obj).next().html("<i class='fa fa-times-circle'></i>");
		flag=false;
	}
}

	function checkOther(obj){
	var input=$(obj).val();
	if(input!=null&&input.trim().length!=0){
		$(obj).next().html("<i class='fa fa-check-circle'></i>");
		flag=true;
	}else{
		$(obj).next().html("<i class='fa fa-times-circle'></i>");
		flag=false;
	}
}

function checkAll(){
	var flagAll=true;
	var inputs=$(".getdata");
	$(inputs).each(function(index,element){
		if(element.nextSibling.firstChild.className!="fa fa-check-circle"){
			flagAll=false;
		}
	});
	return flagAll;
}