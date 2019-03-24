$(document).ready(function(){
    $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    var nav = $(".navbar");
	  if (scroll > 300) {
	    $nav.toggleClass('scrolled');
	  }
        
	  else{
		  console.log("Its not scrolled");  	
	  }
  })
})