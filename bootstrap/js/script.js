// event pd saat tombol diklik
$('.page-scroll').on('click', function(e){
	// ambil isi href
	var href = $(this).attr('href');
	// tangkap elemen yg bersangkutan
	var elemenHref = $(href);
	
	// pindahkan scrollTop
	$('html,body').animate({
		scrollTop: elemenHref.offset().top-50
	}, 1000, 'easeInOutExpo');

	e.preventDefault();
});

//parallax
// about
$(window).on('load', function(){
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
})

$(window).scroll(function(){
	var a = $(this).scrollTop();
	
	// jumbotron
	$('.jumbotron img').css({
		'transform' :'translate(0px, '+ a/5 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' :'translate(0px, '+ a/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' :'translate(0px, '+ a/1 +'%)'
	});

	//portfolio
	if(a > $('.portfolio').offset().top-250){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});