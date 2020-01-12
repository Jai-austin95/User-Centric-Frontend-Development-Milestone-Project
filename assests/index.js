$(document).ready(function(){
  $(".hamburger-icon").click(function(){
    $("#menu").toggleClass("is-active");
  });

	$('.hamburger-icon').click(function(){
		$(this).toggleClass('open');
	});
});