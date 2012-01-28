/*	Rumble Scroll
	------------- */






$(document).ready(function(){

	var roundContainerHeight = $('.round-container').outerHeight();
	$('.round-container').css({'bottom': '-' + roundContainerHeight + 'px'});




$("#ding-ding").bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
  if (visiblePartY == 'bottom') {
    $('.ding1').addClass('three-d');
    $('.ding2').delay(2000).addClass('three-d');
  } else {
  	$('.ding1').removeClass('three-d');
  	 $('.ding2').removeClass('three-d');
   
  }
});


$(".round").bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
  
   $(this).find('.round-container').animate({'bottom' : 0}, 500, function(){}); 
  } else {
  	$(this).find('.round-container').animate({'bottom' : '-' + roundContainerHeight + 'px'}, 500, function(){}); 
  }
});







});
