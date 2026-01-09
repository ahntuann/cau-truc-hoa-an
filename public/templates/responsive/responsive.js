jQuery(document).ready(function($){
	// Quy định các menu có trên web
	var ten = [];
	var menu = [];
	ten[0] = '';
	menu[0] = $('#ja-menungang');
	ten[1] = 'Sản phẩm';
	menu[1] = $('#Mod326');
	// Tạo html menu
	var htmlmenu = '';
	var icon = '';
	for(i=0;i<menu.length;i++){
		if(i==0){
			icon = '<i class="fa fa-bars"></i>';
		}
		if(i==1){
			icon = '<i class="fa fa-list-ul"></i>';
		}
		htmlmenu = htmlmenu + '<div class="mobile_' + i + '"><div class="tieude">' + icon + ten[i] + '</div><div class="noidung"><ul>' + menu[i].find('.menu').html() + '</ul></div></div>';
	}
	htmlmenu = '<div class="mobile_menu">' + htmlmenu + '<div class="nentat1"></div></div>';
	$('#Mod370').after(htmlmenu);
	// Sự kiện click menu
	$('.mobile_menu .nentat1').click(function(){
		$('.mnmb').removeClass('mnmb');
	});
	$('.mobile_menu .tieude').click(function(){
		$(this).next().addClass('mnmb');
		$('.nentat1').addClass('mnmb');
	});
	if( jQuery('#ja-menungang').css('background-color') == 'rgba(0, 0, 0, 0)' ){
		$('.mobile_menu .tieude').css('background-color', 'transparent');
	}
	else{
		$('.mobile_menu .tieude').css('background-color', 'transparent' );
	}
	
	//js
	$('.mobile_menu li.deeper>a').after('<span class="add">+</span>');
	$('.mobile_menu li.deeper >span ').click(function () {
        $(this).hasClass('add')===true?$(this).text('-'):$(this).text('+');
		$(this).removeClass('sub');
		$(this).addClass('add');
		$(this).next().slideUp();

		if (!$(this).next().is(":visible")) {
			$(this).addClass('sub');
			$(this).removeClass('add');
			$(this).next().slideDown();

		}
	});
});