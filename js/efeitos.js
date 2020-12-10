$(document).ready(function(){

	$("#logotipo").on("mouseover",function(){
		
		$("#title h1").addClass("efeito");

	}).on("mouseout", function(){

		$("#title h1").removeClass("efeito");

	});

	$("#input-search").on("focus", function(){

		$("li.search").addClass("ativo");

	}).on("blur", function(){

		$("li.search").removeClass("ativo");				

	});

	$(".thumbnails").owlCarousel({
 
     
      items : 4
 
  	});

  	var owl = $(".thumbnails").data('owlCarousel');

  	$('#btn-news-prev').on("click", function(){

  		owl.prev();

  	});

  	$('#btn-news-next').on("click", function(){

  		owl.next();

  	});

  	$("#page-up").on("click", function(event){

  		$("body").animate({
  			scrollTop:0
  		}, 1000);

  		event.preventDefault();

  	});

  	$("#btn-bars").on("click", function(){

  		$("header").toggleClass("open-menu");

  	});

  	$("#menu-mobile-mask, .btn-close").on("click", function(){

  		$("header").removeClass("open-menu");


  	});

  	$("#btn-search").on("click", function(){

  		$("header").toggleClass("open-search");
  		$("#input-search-mobile").focus();

	  });
	  $(".row thumbnails owl-carousel owl-theme").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["Anterior","Próximo"],
		responsivel:{
		  0 :{
			 item:1 
		  },
		  480 :{
			 item:3
		  },
		  768 :{
			 item:4
		  },
		  1200 :{
			 item:6
		  }
		}
	  
	   
   
		});

});