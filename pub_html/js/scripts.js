/* 
	This file builds on what we learned during the lecture/labs
	It is meant to add a drop-down menu functionality for smart phones or small screens
*/
	
//the function to hide the div, code is from: http://stackoverflow.com/questions/5277872/hide-a-div-if-screen-is-narrower-than-1024px */

// At first I was having problems on mobile, the menu would collapse automatically on tapping after opening the menu, solved this by adding a boolean and changing how the menu opens and closes, this fixed the issue. Source: intuition


$(document).ready( function() {
		
	
	//hides the initial menu button, even though it's display is already set to none, allows us to show it again
	//so if javascript is enabled, this button will show
    //on load

    //on resize
	
	var esebc=false;
	var scc=false;
	var ufo=false;
	var sandwich=false;
	
	
    $(window).resize(function(){
	});
	
	$(".esebc-toggle").click(function(){
		$("#esebc-content").slideToggle();	
		
		if(esebc==false){
			$(".esebc-expand").attr("src", "img/collapse.png");
			esebc=true;
		}else{
			esebc=false;
			$(".esebc-expand").attr("src", "img/expand.png");
		}
	});
	
	$(".esebc-collapse").click(function(){
		$("#esebc-content").slideToggle();
		$("html, body").animate({ scrollTop: $(".esebc-toggle").offset().top});
		esebc=false;
		$(".esebc-expand").attr("src", "img/expand.png");
	});
	
	
	
	$(".scc-toggle").click(function(){
		$("#scc-content").slideToggle();	
		
		if(scc==false){
			$(".scc-expand").attr("src", "img/collapse.png");
			scc=true;
			$("img.lazy").lazyload({event : "click"});
		}else{
			scc=false;
			$(".scc-expand").attr("src", "img/expand.png");
		}
	});
	
	$(".scc-collapse").click(function(){
		$("#scc-content").slideToggle();
		$("html, body").animate({ scrollTop: $(".scc-toggle").offset().top});
		scc=false;
		$(".scc-expand").attr("src", "img/expand.png");
	});
	
	
	

	
	
	
	$(".ufo-toggle").click(function(){
		$("#ufo-content").slideToggle();	
		
		if(ufo==false){
			$(".ufo-expand").attr("src", "img/collapse.png");
			ufo=true;
		}else{
			ufo=false;
			$(".ufo-expand").attr("src", "img/expand.png");
		}
	});
	
	$(".ufo-collapse").click(function(){
		$("#ufo-content").slideToggle();
		$("html, body").animate({ scrollTop: $(".ufo-toggle").offset().top});
		ufo=false;
		$(".ufo-expand").attr("src", "img/expand.png");
	});
	
	
	
	$(".sandwich-toggle").click(function(){
		$("#sandwich-content").slideToggle();	
		
		if(sandwich==false){
			$(".sandwich-expand").attr("src", "img/collapse.png");
			sandwich=true;
		}else{
			sandwich=false;
			$(".sandwich-expand").attr("src", "img/expand.png");
		}
	});
	
	$(".sandwich-collapse").click(function(){
		$("#sandwich-content").slideToggle();
		$("html, body").animate({ scrollTop: $(".sandwich-toggle").offset().top});
		sandwich=false;
		$(".sandwich-expand").attr("src", "img/expand.png");
	});
	
	
});