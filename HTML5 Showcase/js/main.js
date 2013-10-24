(function($) {

	var vidSection = $('.videoSection');
	var sectionWidth = 0;
	var videos = $('video');
	var vdiv = $('.videos');
	var width = 0;
	$('.tooltip').hide();
	$('.info').hide();
	$('.dialog').hide();

	var init = function() {
		$(videos).each(function(index) {
			width += $(this).width();
		});
		console.log(width);
		$(vdiv).width(width + 10);
		console.log($(vdiv).width());

		sectionWidth = $('.vidSection').width();
	}

	$('.videoSection').mousemove(function(e) {
		var x = e.pageX;
		$(vdiv).css({
			marginLeft: -((x*$(vdiv).width())/$(document).width())/2+50
		},100);
		$('.tooltip').css({top:e.pageY + 20,left:e.pageX + 20});
	});

	$('video').mouseenter(function(e) {
		$('.tooltip').show().html($(this).attr('name'));
	});

	$('video').mouseleave(function(e) {
		$('.tooltip').hide().html('');
	});

	$('.video-box').click(function(e) {
		$('.dialog').html($(this).html()).dialog({
			effect: 'swing',
			resizable: false,
			height: 500,
			width: $(this).find('.vid-thumb').width()+22,
			modal: true
		}).attr('title', $(this).attr('name'));

		$('.dialog').find('.info').show();
	});

	$('.ui-button').live('click',function(e) {
		$('.dialog video').get(0).pause();
	});

	$('.restart').live('click',function(e) {
		$('.dialog video').get(0).load();
	});

	$('.pause').live('click',function(e) {
		$('.dialog video').get(0).pause();
	});

	$('.play').live('click',function(e) {
		$('.dialog video').get(0).play();
	});

	init();

})(jQuery);