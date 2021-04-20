
$(document).ready(()=>{
	//efecto menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top':'-200px'
		});
		$(this).animate({
			top: '0'
		}, 2000 + (index * 500));
	});
	//efecto header
	if($(window).width() > 800 ){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1800);
	}
	//scroll elementos menu
	const acercaDe = $('#acerca-de').offset().top;
	const carta = $('#platillos').offset().top;
	const galeria = $('#galeria').offset().top;
	const contacto = $('#contacto').offset().top;
	const btnArriba = document.querySelector('#btnArriba');
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$( 'html, body' ).animate({
			scrollTop: acercaDe - 100
		}, 500);
	});
	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$( 'html, body' ).animate({
			scrollTop: carta 
		}, 500);
	});
	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$( 'html, body' ).animate({
			scrollTop: galeria 
		}, 500);
	});
	
	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$( 'html, body' ).animate({
			scrollTop: contacto 
		}, 500);
	});
	//Efecto boton hacia arriba
	
	window.onscroll = function()  {scrollFunction()}
	
	function scrollFunction(){
		if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
			btnArriba.style.display = 'block';
		}else{
			btnArriba.style.display = 'none';
		}
	}
	$(btnArriba).on('click', () => {
		$('html, body').animate({
				scrollTop: 0
		}, 800);
	});
});























