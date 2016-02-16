$(document).ready(function(){	
	
	$(".box1 li").on("click",function(e){
		e.preventDefault();
		var target = $(this).children("a").attr("href");
		$(".box1 li a").removeClass("on");
		$(this).children("a").addClass("on");
		$(".box1>div").hide();
		$(target).show();
		
	});

	
});
