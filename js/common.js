/*
* @Author: admin
* @Date:   2018-10-08 08:44:55
* @Last Modified by:   admin
* @Last Modified time: 2018-10-08 15:59:42
*/
$(function(){
	$('.nav .myqq').hover(function() {
		$(this).animate({'background-position-y':'46px'}, 300);
	}, function() {
		$(this).animate({'background-position-y':'1px'},300);
	});
	$(window).scroll(function(event) {
		if($(window).scrollTop()>90){
			$('.nav .myqq').stop().animate({'background-position-y':'46px'}, 50);
			$('.top').css('background-color', '#fff');
			$('.mynav .nav a').css('color','black');
			$('.mynav .nav a.frcolor').css('color','red');
			$('.nav li').hover(function() {
				$(this).children().css('color', 'red');
			}, function() {
				$(this).children().css('color', '#000');
			});
		}
		else{
			$('.nav .myqq').stop().animate({'background-position-y':'1px'}, 50);
			$('.top').css('background-color', 'transparent');
			$('.mynav .nav a').css('color','#fff');
			$('.mynav .nav a.frcolor').css('color','red');
			$('.nav li').hover(function() {
				$(this).children().css('color', 'red');
			}, function() {
				$(this).children().css('color', '#fff');
			});
		}
	});
})