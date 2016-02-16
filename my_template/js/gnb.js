$(document).ready(function(){	
    
	$(".btnCall").on("click",function(e){
		e.preventDefault();
		$(".gnbMo").addClass("on");
		
	});
	
	$(".btnClose").on("click",function(e){
		e.preventDefault();
		$(".gnbMo").removeClass("on");
		
	});
	

    /*
    .show()   /  .fadeIn();       /    .slideDown()
    .hide()     /  .fadeOut()     /    .slideUp()

    .stop() - มฆวั
    */
	$("#gnb li").on("mouseenter",function(){
		$(this).children("div").stop().slideDown(300);
		$(this).children("a").addClass("on");
	});
	
	$("#gnb li").on("mouseleave",function(){
		$(this).children("div").stop().slideUp(300);
		$(this).children("a").removeClass("on");
	});

	
});
