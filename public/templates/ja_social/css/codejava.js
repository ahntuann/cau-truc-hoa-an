/*
// Marquee scroll, đọc các thuộc tính tại : https://github.com/aamirafridi/jQuery.Marquee
(function(jQuery){jQuery.fn.marquee=function(options){return this.each(function(){var o=jQuery.extend({},jQuery.fn.marquee.defaults,options),jQuerythis=jQuery(this),jQuerymarqueeWrapper,containerWidth,animationCss,verticalDir,elWidth,loopCount=3,playState='animation-play-state',css3AnimationIsSupported=false,_prefixedEvent=function(element,type,callback){var pfx=["webkit","moz","MS","o",""];for(var p=0;p<pfx.length;p++){if(!pfx[p])type=type.toLowerCase();element.addEventListener(pfx[p]+type,callback,false);}},_objToString=function(obj){var tabjson=[];for(var p in obj){if(obj.hasOwnProperty(p)){tabjson.push(p+':'+obj[p]);}}
tabjson.push();return'{'+tabjson.join(',')+'}';},_startAnimationWithDelay=function(){jQuerythis.timer=setTimeout(animate,o.delayBeforeStart);},methods={pause:function(){if(css3AnimationIsSupported&&o.allowCss3Support){jQuerymarqueeWrapper.css(playState,'paused');}else{if(jQuery.fn.pause){jQuerymarqueeWrapper.pause();}}
jQuerythis.data('runningStatus','paused');jQuerythis.trigger('paused');},resume:function(){if(css3AnimationIsSupported&&o.allowCss3Support){jQuerymarqueeWrapper.css(playState,'running');}else{if(jQuery.fn.resume){jQuerymarqueeWrapper.resume();}}
jQuerythis.data('runningStatus','resumed');jQuerythis.trigger('resumed');},toggle:function(){methods[jQuerythis.data('runningStatus')=='resumed'?'pause':'resume']();},destroy:function(){clearTimeout(jQuerythis.timer);jQuerythis.find("*").addBack().unbind();jQuerythis.html(jQuerythis.find('.js-marquee:first').html());}};if(typeof options==='string'){if(jQuery.isFunction(methods[options])){if(!jQuerymarqueeWrapper){jQuerymarqueeWrapper=jQuerythis.find('.js-marquee-wrapper');}
if(jQuerythis.data('css3AnimationIsSupported')===true){css3AnimationIsSupported=true;}
methods[options]();}
return;}
var dataAttributes={},attr;jQuery.each(o,function(key,value){attr=jQuerythis.attr('data-'+key);if(typeof attr!=='undefined'){switch(attr){case'true':attr=true;break;case'false':attr=false;break;}
o[key]=attr;}});if(o.speed){o.duration=parseInt(jQuerythis.width(),10)/o.speed*1000;}
verticalDir=o.direction=='up'||o.direction=='down';o.gap=o.duplicated?parseInt(o.gap):0;jQuerythis.wrapInner('<div class="js-marquee"></div>');var jQueryel=jQuerythis.find('.js-marquee').css({'margin-right':o.gap,'float':'left'});if(o.duplicated){jQueryel.clone(true).appendTo(jQuerythis);}
jQuerythis.wrapInner('<div style="width:10000px;" class="js-marquee-wrapper"></div>');jQuerythis.css({'overflow':'hidden','width':'100%'});jQuerymarqueeWrapper=jQuerythis.find('.js-marquee-wrapper');if(verticalDir){var containerHeight=jQuerythis.height();jQuerymarqueeWrapper.removeAttr('style');jQuerythis.height(containerHeight);jQuerythis.find('.js-marquee').css({'float':'none','margin-bottom':o.gap,'margin-right':0});if(o.duplicated)jQuerythis.find('.js-marquee:last').css({'margin-bottom':0});var elHeight=jQuerythis.find('.js-marquee:first').height()+o.gap;if(o.startVisible&&!o.duplicated){o._completeDuration=((parseInt(elHeight,10)+parseInt(containerHeight,10))/parseInt(containerHeight,10))*o.duration;o.duration=(parseInt(elHeight,10)/parseInt(containerHeight,10))*o.duration;}else{o.duration=((parseInt(elHeight,10)+parseInt(containerHeight,10))/parseInt(containerHeight,10))*o.duration;}}else{elWidth=jQuerythis.find('.js-marquee:first').width()+o.gap;containerWidth=jQuerythis.width();if(o.startVisible&&!o.duplicated){o._completeDuration=((parseInt(elWidth,10)+parseInt(containerWidth,10))/parseInt(containerWidth,10))*o.duration;o.duration=(parseInt(elWidth,10)/parseInt(containerWidth,10))*o.duration;}else{o.duration=((parseInt(elWidth,10)+parseInt(containerWidth,10))/parseInt(containerWidth,10))*o.duration;}}
if(o.duplicated){o.duration=o.duration/2;}
if(o.allowCss3Support){var
elm=document.body||document.createElement('div'),animationName='marqueeAnimation-'+Math.floor(Math.random()*10000000),domPrefixes='Webkit Moz O ms Khtml'.split(' '),animationString='animation',animationCss3Str='',keyframeString='';if(elm.style.animation!==undefined){keyframeString='@keyframes '+animationName+' ';css3AnimationIsSupported=true;}
if(css3AnimationIsSupported===false){for(var i=0;i<domPrefixes.length;i++){if(elm.style[domPrefixes[i]+'AnimationName']!==undefined){var prefix='-'+domPrefixes[i].toLowerCase()+'-';animationString=prefix+animationString;playState=prefix+playState;keyframeString='@'+prefix+'keyframes '+animationName+' ';css3AnimationIsSupported=true;break;}}}
if(css3AnimationIsSupported){animationCss3Str=animationName+' '+o.duration/1000+'s '+o.delayBeforeStart/1000+'s infinite '+o.css3easing;jQuerythis.data('css3AnimationIsSupported',true);}}
var _rePositionVertically=function(){jQuerymarqueeWrapper.css('transform','translateY('+(o.direction=='up'?containerHeight+'px':'-'+elHeight+'px')+')');},_rePositionHorizontally=function(){jQuerymarqueeWrapper.css('transform','translateX('+(o.direction=='left'?containerWidth+'px':'-'+elWidth+'px')+')');};if(o.duplicated){if(verticalDir){if(o.startVisible){jQuerymarqueeWrapper.css('transform','translateY(0)');}else{jQuerymarqueeWrapper.css('transform','translateY('+(o.direction=='up'?containerHeight+'px':'-'+((elHeight*2)-o.gap)+'px')+')');}}else{if(o.startVisible){jQuerymarqueeWrapper.css('transform','translateX(0)');}else{jQuerymarqueeWrapper.css('transform','translateX('+(o.direction=='left'?containerWidth+'px':'-'+((elWidth*2)-o.gap)+'px')+')');}}
if(!o.startVisible){loopCount=1;}}else if(o.startVisible){loopCount=2;}else{if(verticalDir){_rePositionVertically();}else{_rePositionHorizontally();}}
var animate=function(){if(o.duplicated){if(loopCount===1){o._originalDuration=o.duration;if(verticalDir){o.duration=o.direction=='up'?o.duration+(containerHeight/((elHeight)/o.duration)):o.duration*2;}else{o.duration=o.direction=='left'?o.duration+(containerWidth/((elWidth)/o.duration)):o.duration*2;}
if(animationCss3Str){animationCss3Str=animationName+' '+o.duration/1000+'s '+o.delayBeforeStart/1000+'s '+o.css3easing;}
loopCount++;}
else if(loopCount===2){o.duration=o._originalDuration;if(animationCss3Str){animationName=animationName+'0';keyframeString=jQuery.trim(keyframeString)+'0 ';animationCss3Str=animationName+' '+o.duration/1000+'s 0s infinite '+o.css3easing;}
loopCount++;}}
if(verticalDir){if(o.duplicated){if(loopCount>2){jQuerymarqueeWrapper.css('transform','translateY('+(o.direction=='up'?0:'-'+elHeight+'px')+')');}
animationCss={'transform':'translateY('+(o.direction=='up'?'-'+elHeight+'px':0)+')'};}else if(o.startVisible){if(loopCount===2){if(animationCss3Str){animationCss3Str=animationName+' '+o.duration/1000+'s '+o.delayBeforeStart/1000+'s '+o.css3easing;}
animationCss={'transform':'translateY('+(o.direction=='up'?'-'+elHeight+'px':containerHeight+'px')+')'};loopCount++;}else if(loopCount===3){o.duration=o._completeDuration;if(animationCss3Str){animationName=animationName+'0';keyframeString=jQuery.trim(keyframeString)+'0 ';animationCss3Str=animationName+' '+o.duration/1000+'s 0s infinite '+o.css3easing;}
_rePositionVertically();}}else{_rePositionVertically();animationCss={'transform':'translateY('+(o.direction=='up'?'-'+(jQuerymarqueeWrapper.height())+'px':containerHeight+'px')+')'};}}else{if(o.duplicated){if(loopCount>2){jQuerymarqueeWrapper.css('transform','translateX('+(o.direction=='left'?0:'-'+elWidth+'px')+')');}
animationCss={'transform':'translateX('+(o.direction=='left'?'-'+elWidth+'px':0)+')'};}else if(o.startVisible){if(loopCount===2){if(animationCss3Str){animationCss3Str=animationName+' '+o.duration/1000+'s '+o.delayBeforeStart/1000+'s '+o.css3easing;}
animationCss={'transform':'translateX('+(o.direction=='left'?'-'+elWidth+'px':containerWidth+'px')+')'};loopCount++;}else if(loopCount===3){o.duration=o._completeDuration;if(animationCss3Str){animationName=animationName+'0';keyframeString=jQuery.trim(keyframeString)+'0 ';animationCss3Str=animationName+' '+o.duration/1000+'s 0s infinite '+o.css3easing;}
_rePositionHorizontally();}}else{_rePositionHorizontally();animationCss={'transform':'translateX('+(o.direction=='left'?'-'+elWidth+'px':containerWidth+'px')+')'};}}
jQuerythis.trigger('beforeStarting');if(css3AnimationIsSupported){jQuerymarqueeWrapper.css(animationString,animationCss3Str);var keyframeCss=keyframeString+' { 100%  '+_objToString(animationCss)+'}',jQuerystyles=jQuerymarqueeWrapper.find('style');if(jQuerystyles.length!==0){jQuerystyles.filter(":last").html(keyframeCss);}else{jQuery('head').append('<style>'+keyframeCss+'</style>');}
_prefixedEvent(jQuerymarqueeWrapper[0],"AnimationIteration",function(){jQuerythis.trigger('finished');});_prefixedEvent(jQuerymarqueeWrapper[0],"AnimationEnd",function(){animate();jQuerythis.trigger('finished');});}else{jQuerymarqueeWrapper.animate(animationCss,o.duration,o.easing,function(){jQuerythis.trigger('finished');if(o.pauseOnCycle){_startAnimationWithDelay();}else{animate();}});}
jQuerythis.data('runningStatus','resumed');};jQuerythis.bind('pause',methods.pause);jQuerythis.bind('resume',methods.resume);if(o.pauseOnHover){jQuerythis.bind('mouseenter',methods.pause);jQuerythis.bind('mouseleave',methods.resume);}
if(css3AnimationIsSupported&&o.allowCss3Support){animate();}else{_startAnimationWithDelay();}});};jQuery.fn.marquee.defaults={allowCss3Support:true,css3easing:'linear',easing:'linear',delayBeforeStart:1000,direction:'left',duplicated:false,duration:5000,gap:20,pauseOnCycle:false,pauseOnHover:false,startVisible:false};})(jQuery);
 */
function GoBackWithRefresh(event){if('referrer'in document){window.location=document.referrer;}else{window.history.back();}}
// Start quick cart
jQuery('.addtocart-bar i').click(function(){jQuery(this).next().click();});jQuery('input.flytocart-button').click(function(){jQuery('.Bquickcart').hide();jQuery('.reloadquickcart i').css('display','inline-block');alert('Sản phẩm đã được thêm vào giỏ hàng');});var url_cart='index.php?option=com_users&view=login';function thaydoisoluong(id,soluong){jQuery('.n1').children().attr("disabled",true);if(soluong>0){}
else{soluong=0;jQuery('.spitem[data-id="'+id+'"]').remove();}
jQuery('.z2').html('<i class="fa fa-spinner cart_spiners" style="display:inline-block;"></i>');jQuery.ajax({type:'POST',url:'',data:{option:'com_virtuemart',quantity:soluong,view:'cart',task:'update',cart_virtuemart_product_id:id,},dataType:'html',success:function(data){jQuery('.z2').load(url_cart+' .z2_trong',function(){jQuery('.Bquickcart').each(function(){var ul=url_cart+' .Bquickcart[data-cart="'+jQuery(this).attr('data-cart')+'"] .cart_dropdown_trong';jQuery(this).find('.cart_dropdown').load(ul,function(){jQuery('.n1').children().attr("disabled",false);});});});},error:function(){alert('thatbai');}});}
function start(){jQuery('.n1 input').change(function(){thaydoisoluong(jQuery(this).parent().attr('data-id'),parseInt(jQuery(this).val()));});jQuery('.n1_1').click(function(){jQuery(this).parent().find('input').val(parseInt(jQuery(this).parent().find('input').val())-1);thaydoisoluong(jQuery(this).parent().attr('data-id'),parseInt(jQuery(this).parent().find('input').val()));});jQuery('.n1_3').click(function(){jQuery(this).parent().find('input').val(parseInt(jQuery(this).parent().find('input').val())+1);thaydoisoluong(jQuery(this).parent().attr('data-id'),parseInt(jQuery(this).parent().find('input').val()));});jQuery('.cart_dropdown').click(function(){jQuery('.popup_cart').addClass('inpop3');jQuery('.popup_cart_nentat').addClass('inpop3');jQuery('html').addClass('scrollhidden');});jQuery('.popup_cart_close').click(function(){jQuery('.inpop3').removeClass('inpop3');jQuery('html').removeClass('scrollhidden');});jQuery('.popup_cart_nentat').click(function(){jQuery('.popup_cart_close').click();});}
function checkcart(dem){if(dem>=jQuery('.Bquickcart').length){start();}}
function QuickCartLoad(){var dem=0;jQuery('.Bquickcart').each(function(){var ul=url_cart+' .Bquickcart[data-cart="'+jQuery(this).attr('data-cart')+'"] .Bquickcart_trong';jQuery(this).load(ul,function(){jQuery(this).removeAttr('style');jQuery(this).next().find('.cart_spiners').removeAttr('style');dem+=1;checkcart(dem);});});}
function LoadCartAndCounter(){if(jQuery('.Bquickcart').hasClass('Bquickcart')||jQuery('.mt_visitcounter').hasClass('mt_visitcounter')){var tempoBim=jQuery('<div/>');tempoBim.load(url_cart+' .Bquickcart, .mt_visitcounter',function(data){tempoBim=jQuery(jQuery.parseHTML(data));if(jQuery('.Bquickcart').hasClass('Bquickcart')){jQuery('.Bquickcart').html(tempoBim.find('.Bquickcart_trong').html());jQuery('.Bquickcart').removeAttr('style');jQuery('.reloadquickcart .cart_spiners').removeAttr('style');start();}
if(jQuery('.mt_visitcounter').hasClass('mt_visitcounter')){jQuery('.mt_visitcounter_trong').html(tempoBim.find('.mt_visitcounter_trong .vis_table').html());jQuery('.mt_visitcounter_trong .vis_table').css('visibility','visible');jQuery('.reloadvis').hide();}});}}
setTimeout(function(){
	LoadCartAndCounter();
},100);
// End quick cart
// Thành viên
function myValidator(f,t){f.task.value=t;if(document.formvalidator.isValid(f)){var flag=true;var txt='';if(jQuery('#password_field').val()==jQuery('#password2_field').val()){}
else{flag=false;txt+='Mật khẩu lần 1 và mật khẩu lần 2 không trùng nhau !\n';}
if(jQuery('#email_field').val().indexOf('@')>-1&&jQuery('#email_field').val().indexOf('.')>-1){}
else{flag=false;txt+='Chưa nhập đúng email !\n';}
var sodt=jQuery.trim(jQuery('#phone_1_field').val());if((jQuery.isNumeric(parseInt(sodt))||jQuery.isNumeric(parseInt(sodt.substring(1))))&&sodt.length>8&&sodt.length<13){}
else{flag=false;txt+='Chưa nhập đúng số điện thoại !';}
if(flag){return false;}
else{alert(txt);}}else{var msg="<?php echo addslashes( JText::_('COM_VIRTUEMART_USER_FORM_MISSING_REQUIRED_JS') ); ?>";alert(msg);}
return false;}
jQuery(document).ready(function(jQuery){function checkStrength(passcheck,strengthMessage){var strength=0
if(passcheck.length<8){strengthMessage.removeClass();strengthMessage.addClass('Short');strengthMessage.text('Too short');return false;}
if(passcheck.length>7)strength+=1;if(passcheck.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))strength+=1;if(passcheck.match(/([a-zA-Z])/)&&passcheck.match(/([0-9])/))strength+=1;if(passcheck.match(/([!,%,&,@,#,jQuery,^,*,?,_,~])/))strength+=1;if(passcheck.match(/(.*[!,%,&,@,#,jQuery,^,*,?,_,~].*[!,%,&,@,#,jQuery,^,*,?,_,~])/))strength+=1;if(strength<2){strengthMessage.removeClass();strengthMessage.addClass('Weak');strengthMessage.text('Weak');return false;}else if(strength==2){strengthMessage.removeClass();strengthMessage.addClass('Good');strengthMessage.text('Good');return false;}else{strengthMessage.removeClass();strengthMessage.addClass('Strong');strengthMessage.text('Strong');}}
jQuery('#password_field').keyup(function(){checkStrength(jQuery(this).val(),jQuery(this).next().find('#strengthMessage'));});function CheckUserName(str){if(/^[a-zA-Z0-9- ]*jQuery/.test(str)==false){return false;}
if(str.indexOf(' ')>-1){return false;}
return true;}
jQuery('.ButtonDangKy').click(function(){var dataform=jQuery(this).attr('data-form');if(dataform=='dangky'){var fom=jQuery(this).parent().parent();}
else{var fom=jQuery(this).parent().parent().parent().parent();}
var flag=true;var txt='';fom.find('.required').each(function(){if(jQuery(this).val().trim()==''||jQuery(this).val().trim()==' '){jQuery(this).addClass('invalid');flag=false;}
else{jQuery(this).removeClass('invalid');}});if(dataform=='dangky'){fom.find('#password_field, #password2_field').each(function(){if(jQuery(this).val().trim()==''||jQuery(this).val().trim()==' '){jQuery(this).addClass('invalid');flag=false;}
else{jQuery(this).removeClass('invalid');}});}
if(!flag){alert('Chưa nhập đủ các trường yêu cầu !');return false;}
if(fom.find('#username_field').val().length>=3&&CheckUserName(fom.find('#username_field').val())){fom.find('#username_field').removeClass('invalid');}
else{flag=false;txt+='Tên tài khoản phải có độ dài từ 3 ký tự và không chứa ký tự đặc biệt !\n';fom.find('#username_field').addClass('invalid');}
if(fom.find('#email_field').val().indexOf('@')>-1&&fom.find('#email_field').val().indexOf('.')>-1){}
else{flag=false;txt+='Chưa nhập đúng email !\n';}
var sodt=fom.find('#phone_1_field').val().trim();if((jQuery.isNumeric(parseInt(sodt))||jQuery.isNumeric(parseInt(sodt.substring(1))))&&sodt.length>8&&sodt.length<13){}
else{flag=false;txt+='Chưa nhập đúng số điện thoại !';}
if(fom.find('#password_field').val()!=fom.find('#password2_field').val()){flag=false;txt+='Mật khẩu lần 1 và mật khẩu lần 2 không trùng nhau !\n';fom.find('#password_field, #password2_field').addClass('invalid');}
else{fom.find('#password_field, #password2_field').removeClass('invalid');}
if(flag){if(dataform=='dangky'){fom.find('#name_field').val(fom.find('#username_field').val());}
fom.submit();}
else{alert(txt);}});jQuery('#PasswordBlock .fa-key').click(function(){var randomP=Math.random().toString(12).slice(-8);jQuery(this).parent().find('#randomPassword').text(randomP);jQuery(this).parent().parent().parent().parent().parent().parent().find('#password_field, #password2_field').val(randomP);checkStrength(randomP,jQuery(this).parent().find('#strengthMessage'));var jQuerytemp=jQuery("<input>");jQuery("body").append(jQuerytemp);jQuerytemp.val(randomP).select();document.execCommand("copy");jQuerytemp.remove();});});
// End thành viên
jQuery(document).ready(function ($) {
	if($('.thanhvienpage').hasClass('thanhvienpage')){if($.trim($('.errorclass').text())){$('.errorclass').show();}}
	$('.main-image').mouseenter(function(){$('.main-image').mousemove(function(e){$(this).find('img').css({'transform-origin':((e.pageX-$(this).offset().left)/$(this).width())*100+'% '+((e.pageY-$(this).offset().top)/$(this).height())*100+'%'});});});$('.vm-button-correct').click(function(){$(this).hide();$('.cart_spiners').css('display','inline-block');});$('.sp-vmsearch-categories').each(function(){$(this).children().first().attr('selected',true)});if($('.rsform').hasClass('rsform')){$('.rsform').each(function(){$(this).find('.rsform-input-box').each(function(){if(typeof $(this).attr('placeholder')!==typeof undefined&&$(this).attr('placeholder')!==false){}
	else{$(this).attr('placeholder',$(this).parent().parent().parent().find('.formControlLabel').text());}});$(this).find('.rsform-text-box').each(function(){if(typeof $(this).attr('placeholder')!==typeof undefined&&$(this).attr('placeholder')!==false){}
	else{$(this).attr('placeholder',$(this).parent().parent().parent().find('.formControlLabel').text());}});});}
	$('.rsform-button').click(function(){var cf=true;$(this).parent().parent().parent().parent().parent().find('input[type="text"]').each(function(){if($(this).val()==''&&$(this).attr('data-required')=='YES'){$(this).addClass('rsform-error');cf=false;}else{$(this).removeClass('rsform-error');}});$(this).parent().parent().parent().parent().parent().find('textarea').each(function(){if($(this).val()==''&&$(this).attr('data-required')=='YES'){$(this).addClass('rsform-error');cf=false;}else{$(this).removeClass('rsform-error');}});if(cf){var doituong='.'+$(this).attr('data-form');$(this).val('Gửi thành công');$(doituong).submit();}});function convertNumberToCurrency(tienmoi){tienmoi=parseFloat($('.header-product .product-thongtin-salesPrice').attr('data-price'))+parseFloat(tienmoi);if($('.header-product .product-thongtin-salesPrice').attr('data-currency-id')==144){tienmoi=parseFloat(tienmoi).toFixed(2);tienmoi=tienmoi.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");tienmoi=$('.header-product .product-thongtin-salesPrice').attr('data-currency')+tienmoi;}else{tienmoi=parseInt(tienmoi);tienmoi=tienmoi.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1.");tienmoi=tienmoi+' '+$('.header-product .product-thongtin-salesPrice').attr('data-currency');}
	$('.header-product .product-thongtin-salesPrice').text(tienmoi);}
	$('.header-product .product-field-display select').change(function(){var giatien=0;$('.header-product .product-field-display select').each(function(){if($.isNumeric($(this).find('option:selected').attr('data-price'))){giatien=giatien+parseFloat($(this).find('option:selected').attr('data-price'));}});convertNumberToCurrency(giatien);});$('.header-product .product-field-display select').each(function(){$(this).change();});function changeRadioBim(){var giatien=0;$('.header-product .product-field-display .RadioBim').each(function(){if($.isNumeric($(this).find('input:checked').attr('data-price'))){giatien=giatien+parseFloat($(this).find('input:checked').attr('data-price'));}});convertNumberToCurrency(giatien);}
	$('.header-product .product-field-display .RadioBim input').change(function(){changeRadioBim();});$('.header-product .product-field-display .RadioBim span').click(function(){$(this).parent().find('input').removeAttr('checked');$(this).find('input').attr('checked',true);$(this).parent().find('.CheckRadio').removeClass('CheckRadio');$(this).addClass('CheckRadio');changeRadioBim();});$(window).load(function(){setTimeout(function(){$('iframe[data-src]').each(function(){$(this).attr('src',$(this).attr('data-src'));});$('script[data-src]').each(function(){$(this).attr('src',$(this).attr('data-src'));});},3000);});$('.arcontactus-message-button').click(function(){if($(this).children('.static').hasClass('hide')){$(this).children('.static').removeClass('hide');$(this).find('.arcontactus-close').removeClass('show-messageners-block');$(this).parent().find('.messangers-block.lg').removeClass('show-messageners-block');}else{$(this).children('.static').addClass('hide');$(this).find('.arcontactus-close').addClass('show-messageners-block');$(this).parent().find('.messangers-block.lg').addClass('show-messageners-block');}});
	/*
	// Bật marquee demo
	$('.browse-view .row').marquee({
	duplicated: true,
	pauseOnHover :true,
	startVisible :true,
	speed :80,
	gap :0,
	});
	 */
	/*
	// Chuyển input text thành input date với datepicker
	// chèn thẻ html : <input class="inpit-datetime" type="text">
	// Chuyển thành datepicker
	$( '.input-datetime' ).each(function(){
		$(this).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd/mm/yy'
		});
	});
	// Chuyển thành date picker nhưng giữ nguyên value cũ
	$( '.input-datetime' ).each(function(){
		var dbDate = $(this).val();
		dbDate = dbDate.substring(dbDate.length - 4,dbDate.length) + '/' + dbDate.substring(3,5) + '/' + dbDate.substring(0,2);
		var date2 = new Date(dbDate);
		$(this).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd/mm/yy'
		}).datepicker('setDate', date2);
	});
	*/
	/* Owl Carousel ( nhớ display:none đối tượng muốn gọi Owl Carousel trong file template.css
	$('.noidungduoi1 #itemListLeading, .footer2 .main2').addClass("owl-carousel owl-theme");
	$('.owl-carousel').each(function(stt){
		var me = $(this);
		if( stt == 0 ){
			// Scroll nguyên container, khi sử dụng được autoplay
			$(this).owlCarousel({
				animateOut: 'slideOutLeft',
				animateIn: 'slideInRight',
				slideSpeed: 200,
				dots:false,
				margin:20,
				loop: true,
				stagePadding:0,
				stopOnHover:true,
				nav:true,
				smartSpeed:200,
				scrollPerPage: true,
				responsive:{
					0:{
						items:2,
						slideBy:2,
						nav:true
					},
					767:{
						items:4,
						slideBy:4,
						nav:true
					},
					1024:{
						items:6,
						slideBy:6,
						nav:true
						
					}
				},
				onInitialized: me.show()
			});
		}
		else{
			// Scroll từng block, có thể autoplay để scroll
			$(this).owlCarousel({
				animateOut: 'slideOutLeft',
				animateIn: 'slideInRight',
				slideSpeed: 200,
				dots:false,
				loop:true,
				autoplayTimeout:10000,
				autoplay:true,
				margin:20,
				stagePadding:0,
				stopOnHover:true,
				nav:true,
				smartSpeed:200,
				responsive:{
					0:{
						items:2,
						nav:true
					},
					767:{
						items:4,
						nav:true
					},
					1024:{
						items:6,
						nav:true
					}
				},
				onInitialized: me.show()
			});
		}
	});
	End Owl Carousel */
	if( $('[data-fancybox]').length > 0 ){
		$.fancybox.defaults.hash = false; // Tắt chức năng tự đổi url của fancybox
		setTimeout(function(){
			$('[data-fancybox]').fancybox({
				closeExisting: true,
				loop: true,
				backFocus: false,
				autoFocus: false,
				afterClose: function () {
					
				},
				//buttons : [ "zoom", "share", "fullScreen", "download", "thumbs", "close" ]
			});
		},100);
	}
	/*
	Muốn sử dụng fancybox trên web chỉ việc chèn:
		<a href="link_anh_1" data-fancybox="gallery"><img src="link_anh_1"></a>
		<a href="link_anh_2" data-fancybox="gallery"><img src="link_anh_2"></a>
	Value có tên gallery là để nhóm các ảnh này vào chung 1 group khi popup lên, nếu có 2 group:
		<div class="group1">
			a href="link_anh_1" data-fancybox="gallery_group_1"><img src="link_anh_1"></a>
			<a href="link_anh_2" data-fancybox="gallery_group_1"><img src="link_anh_2"></a>
		</div>
		<div class="group2">
			<a href="link_anh_3" data-fancybox="gallery_group_2"><img src="link_anh_3"></a>
			<a href="link_anh_4" data-fancybox="gallery_group_2"><img src="link_anh_4"></a>
		</div>
	Nếu ko show ảnh thumb có thể sử dụng:
		<a href="link_anh_1" data-fancybox="gallery">Xem ảnh</a>
	Nếu dùng iframe youtube cứ chèn như thông thường fancybox tự hiểu iframe:
		<a data-fancybox="video-gallery" href="https://www.youtube.com/watch?v=z2X2HaTvkl8">[ảnh hoặc text]</a>
	*/
	// Code jQuery viết tiếp ở đây
	$('#Mod377 .workshome-content >form').before("<p><i class='fas fa-search'></i></p>")
	$('#Mod377 .workshome-content >p').click(function () {
		$('#Mod377 .workshome-content >form').toggle();
	})
	$('.buypro_noprice a').click(function(){
 		$('#rsform_12_page_0 .rsform-block-tensp input').val($('.header-descproduct .title-product').text().trim());
		$('.popupdk').css('display','block');
		$('.nentat').css('display','block');
		$('.nutclose1').css('display','block');
	});


	$('.nentat').click(function(){
		$('.popupdk').css('display','none');
		$(this).css('display','none');
		$('.nentat').css('display','none');
	});
	$('.nutclose1').click(function(){
		$('.popupdk').css('display','none');
		$(this).css('display','none');
		$('.nentat').css('display','none');
	});
	
});