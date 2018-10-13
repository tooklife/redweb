/*
* @Author: admin
* @Date:   2018-10-08 13:54:19
* @Last Modified by:   admin
* @Last Modified time: 2018-10-08 13:56:39
*/
$(function(){
	$('.my .col-sm-4').hover(function() {
		$(this).children('.my_span').stop().animate({'background-position-y':'-73px'}, 300);
		$(this).css('background-color', 'red');
	}, function() {
		$(this).children('.my_span').stop().animate({'background-position-y':'0px'}, 300);
		$(this).css('background-color', '#fff');
	});
})
