jQuery(document).ready(function ($) {
	$(window).load(function () {
		$('.scroller').each(function () {
			if ($(window).width() <= 639) {
				$(this).attr('data-width', '1').attr('data-loaiscroll', 'motsp').attr('data-padding', '0');
			}
			var ngangscroll = $(this).find('.scroller_block').width();
			var sospdisplay = parseInt($(this).attr('data-width'));
			var paddingsp = parseInt($(this).attr('data-padding'));
			// Set ngang và cao của item và scroll
			var maxheight = 0;
			if ($(this).attr('data-chieuscroll') == 'ngang') {
				paddingsp = ngangscroll / 100 * paddingsp;
				var ngangsp = (ngangscroll - ((sospdisplay - 1) * paddingsp)) / sospdisplay;
				$(this).find('.scroller_loptrong').children().each(function () {
					$(this).css({
						"width": ngangsp,
						"margin-right": paddingsp
					});
					if (maxheight < $(this).height()) {
						maxheight = $(this).height();
					}
				});
				$(this).find('.scroller_loptrong').children().height(maxheight);
				$(this).find('.scroller_block').height(maxheight);
			}
			else{
				var ngangsp = ngangscroll;
				$(this).find('.scroller_loptrong').children().each(function () {
					$(this).css({
						"width": ngangsp
					});
					if (maxheight < $(this).height()) {
						maxheight = $(this).height();
					}
				});
				paddingsp = (sospdisplay*maxheight) / 100 * paddingsp
				$(this).find('.scroller_loptrong').children().height(maxheight).css('margin-bottom', paddingsp);
				$(this).find('.scroller_block').height( ((sospdisplay-1) * paddingsp) + (sospdisplay*maxheight) );
			}
			// Set số item tối thiểu
			if( $(this).attr('data-loaiscroll') == 'motsp' ){
				var tongsosp = $(this).find('.scroller_loptrong').children().length;
				if( tongsosp < (sospdisplay) ){
					var moithem = (sospdisplay-tongsosp) + sospdisplay;
					
				}
				else{
					var moithem = sospdisplay;
				}
				if( (tongsosp-sospdisplay) <= 0 ){
					var scrolltoida = 0;
				}
				else{
					var scrolltoida = tongsosp-sospdisplay;
				}
			}
			else{
				var tongsosp = $(this).find('.scroller_loptrong').children().length;
				if( tongsosp < sospdisplay ){
					var moithem = (sospdisplay-tongsosp) + sospdisplay;
					
				}
				else{
					if( (tongsosp % sospdisplay) == 0 ){
						var moithem = sospdisplay;
					}
					else{
						var moithem = ( sospdisplay - ( tongsosp % sospdisplay ) ) + sospdisplay;
					}
					
				}
				if( (tongsosp-sospdisplay) <= 0 ){
					var scrolltoida = 0;
				}
				else{
					if( ( tongsosp % sospdisplay ) == 0 ){
						var scrolltoida = parseInt((tongsosp/sospdisplay)) - 1;
					}
					else{
						var scrolltoida = parseInt((tongsosp/sospdisplay))
					}
				}
			}
			for (i = 0; i < moithem; i++) {
				$(this).find('.scroller_loptrong').html( $(this).find('.scroller_loptrong').html() + $(this).find('.scroller_loptrong').children().eq(i).clone().wrap('<div>').parent().html() );
			}
			$(this).find('.scroller_loptrong').attr('data-maxscroll', scrolltoida ).attr('data-currentscroll', 0 );
			$(this).css('opacity', '1');
			$(this).find('.prev_but, .next_but, .bot_but, .top_but').show();
		});
		function CantScroll(my){
			my.addClass('CantClick');
		}
		function CanScroll(my){
			my.removeClass('CantClick');
		}
		function beforescroll(my,move){
			// không cho click tiếp
			CantScroll(my);
			// Set giá trị để trả về
			var current_scroll = parseInt(my.find('.scroller_loptrong').attr('data-currentscroll'));
			var max_scroll = parseInt(my.find('.scroller_loptrong').attr('data-maxscroll'));
			if( my.attr('data-chieuscroll') == 'ngang' ){
				if( my.attr('data-loaiscroll') == 'motsp' ){
					var left = my.find('.scroller_loptrong').children().first().width() + parseInt(my.find('.scroller_loptrong').children().first().css('margin-right').replace('px', ''));
					var tocdo = parseInt(my.attr('data-tocdo')) / ( parseInt(my.attr('data-width')) / 2 );
				}
				else{
					var left = ( my.find('.scroller_loptrong').children().first().width() + parseInt(my.find('.scroller_loptrong').children().first().css('margin-right').replace('px', '')) ) * parseInt(my.attr('data-width'));
					var tocdo = parseInt(my.attr('data-tocdo'));
				}
			}
			else{
				if( my.attr('data-loaiscroll') == 'motsp' ){
					var left = my.find('.scroller_loptrong').children().first().height() + parseInt(my.find('.scroller_loptrong').children().first().css('margin-bottom').replace('px', ''));
					var tocdo = parseInt(my.attr('data-tocdo')) / ( parseInt(my.attr('data-width')) / 2 );
				}
				else{
					var left = ( my.find('.scroller_loptrong').children().first().height() + parseInt(my.find('.scroller_loptrong').children().first().css('margin-bottom').replace('px', '')) ) * parseInt(my.attr('data-width'));
					var tocdo = parseInt(my.attr('data-tocdo'));
				}
			}
			if(move == 'plus'){
				if( current_scroll < max_scroll ){
					var step_scroll = current_scroll + 1;
					var margin = -(step_scroll * left);
				}
				else{
					var step_scroll = 0;
					var margin = -((current_scroll+1) * left);
				}
			}
			else{
				if( current_scroll > 0 ){
					var step_scroll = current_scroll - 1;
					var margin = -(step_scroll * left);
				}
				else{
					var step_scroll = max_scroll;
					var margin = -(max_scroll * left);
				}
			}
			my.find('.scroller_loptrong').attr('data-currentscroll',step_scroll);
			return  [step_scroll, margin, tocdo, max_scroll, left];
		}
		function scrollationnext(me) {
			var MyScroll = me.find('.scroller_loptrong');
			var action_left = beforescroll(me,'plus');
			if( action_left[0] == 0 ){
				MyScroll.animate({
					"left": action_left[1]
				},
				{
					duration: action_left[2],
					complete: function () {
						$(this).css('left',0);
						CanScroll(me);
					}
				});
			}
			else{
				MyScroll.animate({
					"left": action_left[1]
				},
				{
					duration: action_left[2],
					complete: function () {
						CanScroll(me);
					}
				});
			}
		}
		function scrollationprev(me) {
			var MyScroll = me.find('.scroller_loptrong');
			var action_left = beforescroll(me,'minus');
			if( action_left[0] == action_left[3] ){
				MyScroll.css('left', -((action_left[3]+1) * action_left[4]) );
				MyScroll.animate({
					"left": action_left[1]
				},
				{
					duration: action_left[2],
					complete: function () {
						CanScroll(me);
					}
				});
			}
			else{
				MyScroll.animate({
					"left": action_left[1]
				},
				{
					duration: action_left[2],
					complete: function () {
						CanScroll(me);
					}
				});
			}
		}
		function scrollationbot(me) {
			var MyScroll = me.find('.scroller_loptrong');
			var action_left = beforescroll(me,'plus');
			if( action_left[0] == 0 ){
				MyScroll.animate({
					"top": action_left[1]
				},
				{
					duration: action_left[2],
					complete: function () {
						$(this).css('top',0);
						CanScroll(me);
					}
				});
			}
			else{
				MyScroll.animate({
					"top": action_left[1]
				},
				{
					duration: action_left[2],
					complete: function () {
						CanScroll(me);
					}
				});
			}
		}
		function scrollationtop(me) {
			var MyScroll = me.find('.scroller_loptrong');
			var action_left = beforescroll(me,'minus');
			if( action_left[0] == action_left[3] ){
				MyScroll.css('top', -((action_left[3]+1) * action_left[4]) );
				MyScroll.animate({
					"top": action_left[1]
				},
				{
					duration: action_left[2],
					complete: function () {
						CanScroll(me);
					}
				});
			}
			else{
				MyScroll.animate({
					"top": action_left[1]
				},
				{
					duration: action_left[2],
					complete: function () {
						CanScroll(me);
					}
				});
			}
		}
		var timesecond = 10000;
		var time = setTimeout(scroller, timesecond);
		function scroller() {
			$('.scroller').each(function () {
				if ($(this).attr('data-chieuscroll') == 'ngang') {
					scrollationnext($(this));
				}
				else {
					scrollationbot($(this));
				}
			});
			time = setTimeout(scroller, timesecond);
		}
		function pauseTimer() {
			clearTimeout(time);
		}
		function playTimer() {
			time = setTimeout(scroller, timesecond);
		}
		$('.scroller').bind('mouseover touchstart',function () {
			pauseTimer();
		}).bind('mouseleave touchend',function () {
			playTimer();
		});
		// Nắm chuột
		var MouseDownLeft,MouseDownTop,MouseUpLeft,MouseUpTop;
		var isTouchDevice = 'ontouchstart' in document.documentElement;
		if( isTouchDevice ){
			var startEventType = 'touchstart';
			var endEventType = 'touchend';
		}
		else{
			var startEventType = 'mousedown';
			var endEventType = 'mouseup';
		}
		$('.scroller').bind(startEventType,function(cursor1){
			if( isTouchDevice ){
				//alert('xxx');
				MouseDownLeft = cursor1.originalEvent.touches[0].pageX;
				MouseDownTop = cursor1.originalEvent.touches[0].pageY;
			}
			else{
				MouseDownLeft = cursor1.pageX;
				MouseDownTop = cursor1.pageY;
			}
			$(this).addClass('NamChuot');
		}).bind(endEventType,function(cursor2){
			if( isTouchDevice ){
				MouseUpLeft = cursor2.originalEvent.changedTouches[0].pageX;
				MouseUpTop = cursor2.originalEvent.changedTouches[0].pageY;
			}
			else{
				MouseUpLeft = cursor2.pageX;
				MouseUpTop = cursor2.pageY;
			}
			
			if ($(this).attr('data-chieuscroll') == 'ngang') {
				if( MouseDownLeft == MouseUpLeft ){
					
				}
				else{
					if( MouseDownLeft < MouseUpLeft ){
						scrollationprev( $(this) );
					}
					else{
						scrollationnext( $(this) );
					}
				}
			}
			else{
				if( MouseDownTop == MouseUpTop ){
					
				}
				else{
					if( MouseDownTop < MouseUpTop ){
						scrollationbot( $(this) );
					}
					else{
						scrollationtop( $(this) );
					}
				}
			}
			$(this).removeClass('NamChuot');
		});
		// Sự kiện click control
		$('.next_but').click(function () {
			if( !$(this).parent().hasClass('CantClick') ){
				scrollationnext($(this).parent());
			}
		});
		$('.prev_but').click(function () {
			if( !$(this).parent().hasClass('CantClick') ){
				scrollationprev($(this).parent());
			}
		});
		$('.bot_but').click(function () {
			if( !$(this).parent().hasClass('CantClick') ){
				scrollationbot($(this).parent());
			}
		});
		$('.top_but').click(function () {
			if( !$(this).parent().hasClass('CantClick') ){
				scrollationtop($(this).parent());
			}
		});
	});
});