$(document).ready(function(){

	/** SELECTORS: **/

	$('.1').click(function(){
		$('.5').hide();
	});

	$('.2').click(function(){
		$('.2').hide();
	});

	$('.4').click(function(){
		$('.3:last').hide();
	});

	$('.5').click(function(){
		$('.6 li:first').hide();
	});

	$('.7').click(function(){
		$('.6 li:nth-child(1)').hide();
	});

	$('.8').click(function(){
		$('[href]').hide();
	});

	/** EVENT: **/

	$('.9').click(function(){
		$('.9').hide();
	});

	$('.10').dblclick(function(){
		$('.10').hide();
	});

	$('.11').mouseenter(function(){
		$('.11').hide();
	});

	$('.12').mouseenter(function(){
		alert('hi');
	});

	$('.13').mouseleave(function(){
		alert('hello');
	});

	$('.14').hover(function(){
		alert('hover');
	});

	$('.15').hover(function(){
		alert('enter');
	},
	function(){
		alert('leave')
	});

	$('.16').focus(function(){
		$('.16').css('background','red');
	});

	$('.17').on({
		mouseenter:function(){
			$('.17').css('background','red');
		},
		mouseleave:function(){
			$('.17').css('background','green');
		},
		click:function(){
			$('.17').css('background','yellow');
		}
	});

	/** HIDE & SHOW: **/

	$('.19').click(function(){
		$('.18').show('slow');
	});

	$('.20').click(function(){
		$('.18').hide('slow');
	});

	$('.21').click(function(){
		$('.18').toggle(2000);
	});

	/**

	$('.19').click(function(){
		$('.18').show();
	});

	$('.20').click(function(){
		$('.18').hide();
	});

	$('.21').click(function(){
		$('.18').toggle();
	});

	**/

	/** FADE: **/

	$('.22').click(function(){
		$('.box1').fadeOut("slow");
		$('.box2').fadeOut('slow');
		$('.box3').fadeOut('slow');
	});

	$('.23').click(function(){
		$('.box4').fadeIn(2000);
		$('.box5').fadeIn(2000);
		$('.box6').fadeIn(2000);
	});

	$('.24').click(function(){
		$('.box7').fadeToggle('slow');
		$('.box8').fadeToggle('fast');
		$('.box9').fadeToggle('slow');
	});

	$('.25').click(function(){
		$('.box10').fadeTo('slow',0.3);
		$('.box11').fadeTo('.slow',0.6);
		$('.box12').fadeTo('.slow',0.8);
	});

	/** SLIDE: **/

	$('.a26').click(function(){
		$('.a27').slideDown('slow');
	});

	$('.a28').click(function(){
		$('.a29').slideToggle('slow');
	});

	/** ANIMATE: **/

	$('.30').click(function(){
		$('.a31').animate({
			left:'200px',
			top:'200px',
			width:'200px',
			height:'200px',
			opacity:'0.5'
		});
	});

	$('.32').click(function(){
		$('.a33').animate({
			width: '+=100px',
			height: '-=50px'
		});
	});

	$('.34').click(function(){
		var emon = $('.a35');
		emon.animate({height:'300px', opacity:'0.5'},"slow");
		emon.animate({width:'300px', opacity:'0.8'},'slow');
		emon.animate({height:'100px', opacity:'0.4'}, 'slow');
		emon.animate({width:'100px', opacity: '1'}, 'slow');
	});

	$('.36').click(function(){
		var emon = $('.a37');
		emon.animate({left:'300px'},'slow');
		emon.animate({fontSize:'30px'},'fast');
	});

	$('.a38').click(function(){
		$('.a39').slideToggle(5000);
	});

	/** STOP: **/

	$('.40').click(function(){
		$('.a39').stop();
	});

	/** CALLBACK: **/

	$('.41').click(function(){
		$('.42').hide('slow', function(){
			alert('emon');
		});
	});

	/** CHANING: **/

	$('.43').click(function(){
		$('.44').css('background','green').slideUp(1000).slideDown(1000);
	});

	/** GET: **/

	$('.46').click(function(){
		alert('text:' + $('.45').text());
	});

	$('.47').click(function(){
		alert('text' + $('.45').html());
	});

	$('.48').click(function(){
		alert($('.49').val());
	});

	/** SET: **/

	$('.53').click(function(){
		$('.50').text('hi');
	});

	$('.54').click(function(){
		$('.51').html('<h2>Hello</h2>');
	});

	$('.55').click(function(){
		$('.52').val('your name');
	});

	$('.57').click(function(){
		$('.56').attr("href","www.cricinfo.com");
	});

	/** ADD: **/

	$('.59').click(function(){
		$('.58').before('Before/Append');
	});

	$('.60').click(function(){
		$('.58').after('After/Preppend');
	});

	/** REMOVE: **/

	$('.62').click(function(){
		$('.a61').remove();
	});

	$('.64').click(function(){
		$('.a63').empty();
	});

	/** CSS CLASSES: **/

	$('.67').click(function(){
		$('.66').addClass('a65');
	});

	$('.68').click(function(){
		$('.70').removeClass('a69');
	});

	$('.71').click(function(){
		$('.72').toggleClass('a73');
	});

	/** CSS: **/

	$('.75').click(function(){
		$('.74').css({
			'background':'red',
			'color':'green',
			'fontSize':'20px',
		});
	});

	/** DIMENSION: **/

	$('.76').click(function(){
		$('.a77').width(300).height(300);
	});

	/** DIMENSION: **/

	$('span').parent().css({
		'color':'yellow',
		'border':'2px solid yellow'
	});

	/** 

	$('span').parents().css({
		'color':'yellow',
		'border':'2px solid yellow'
	});

	 **/

	 /** 

	$('span').parentsUntil(div).css({
		'color':'yellow',
		'border':'2px solid yellow'
	});

	 **/

	 

});