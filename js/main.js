$(document).ready(function(){
	
	
	//scroll-to-top
	$(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html').animate({scrollTop : 0},1300);
		  return false; 
	    });
	//-----------------------------------------------------------
	//izvodjaci.html
	var k=0;
	$('.izvodjaci-slike img').click(function(){
		if(k==0){
			
			$('.izvodjaci-slike img').fadeOut(1200);
			$(this).fadeIn(1200);
			$(this).parent().children('p').delay(1800).slideDown();
			k=1;
		}else{
			$('.izvodjaci-slike img').delay(1200).fadeIn(1200);
			$(this).parent().children('p').slideUp(1200);
			k=0;
		}
	});
	//-----------------------------------------------------------
	//sponzori.html
	$('#coca-cola-slika img').hover(function(){
			$(this).css('opacity','1.0');
		},
		function(){
			$(this).css('opacity','0.9');
		});
		
	//-----------------------------------------------------------
	//galerija.html
	$('.galerija-slike img').click(function(){
		$('#slika-galerija').css('display','block');
		$('#slika1').attr('src',$(this).attr('src'));
		$('#slika1').css('border-radius','5px');
	});
	$('#galerija-x').click(function(){
		$('#slika-galerija').css('display','none');
	});
	//-----------------------------------------------------------
	//index.html
	$('#mapa img').click(function(){
		$('#slika-mapa').css('display','block');
		$('#slika-mapa-zoom').attr('src',$(this).attr('src'));
		$('#slika-mapa-zoom').css('border-radius','5px');
	});
	$('#mapa-x').click(function(){
		$('#slika-mapa').css('display','none');
	});
	//-----------------------------------------------------------
	
	$('#vesti .vest .slika img').hover(
		function(){
			$(this).parent().next().addClass('vest-promenjen-tekst');
			$(this).css('opacity','1');
			$(this).css('transform','scale(1.1)');
		},
		
		function(){
			$(this).parent().next().removeClass('vest-promenjen-tekst');
			$(this).css('opacity','0.8');
			$(this).css('transform','none');
		});
	//-----------------------------------------------------------	
	
	$('#slike .slika img').hover(function(){
		$('#slike .slika img').not(this).css('filter','blur(5px)');
		
	},function(){
		$('#slike .slika img').not(this).css('filter','none');
	});
	
		
	//-----------------------------------------------------------
	//program.html
	
	$('.dan').cycle({ fx:'shuffle'});
	
	
	//-----------------------------------------------------------
	//kontakt.html
	
	var podaciOOsobi="";
	
	$('#kontakt-forma :submit').click(function(){
		var t=proveraTekst();
		var d=proveraDatum();
		var p=proveraPoruka();
		var r=proveraRegExp();
		if( t && d && p && r){
			podaciOOsobi={
				"ime":$('#tbIme').val(),
				"prezime":$('#tbPrezime').val(),
				"email":$('#tbEmail').val(),
				"datum-rodjenja":$('#tbDatum').val(),
				"naslov":$('#tbNaslov').val(),
				"poruka":$('#taPoruka').val()	
			};
			return true;
		}else{
			return false;
		}
	});
		
	
	function proveraTekst(){
		var t=true;
		$('#kontakt-forma :text').each(function(){
			if($(this).val().length==0){
				$(this).addClass('poruka-border');
				$(this).next().children(':eq(1)').slideUp();
				$(this).next().children(':first').slideDown();
				t=false;
			}else{
				$(this).removeClass('poruka-border');
				$(this).next().children(':first').slideUp();
			}
		});
		return t;
	}
	
	function proveraDatum(){
		if($('#tbDatum').val()==0){
			$('#tbDatum').addClass('poruka-border');
			$('#tbDatum').next().children(':eq(1)').slideUp();
			$('#tbDatum').next().children(':first').slideDown();
			return false;
		}else{
			$('#tbDatum').removeClass('poruka-border');
			$('#tbDatum').next().children(':first').slideUp();
			var datum= new Date();
			var dan=datum.getDate();
			var mesec=datum.getMonth()+1;
			var godina=datum.getFullYear();
			var d=$('#tbDatum').val().split("-");
			if(d[0]>godina || (d[0]==godina && d[1]>mesec) || (d[0]==godina && d[1]==mesec && d[2]>dan)){
				$('#tbDatum').addClass('poruka-border');
				$('#tbDatum').next().children(':eq(1)').slideUp();
				$('#tbDatum').next().children(':first').slideDown();
				return false;
			}else{
				if((godina-d[0]<18)||(godina-d[0]==18 && d[1]>mesec)||(godina-d[0]==18 && d[1]==mesec && d[2]>dan)){
					$('#tbDatum').addClass('poruka-border');
					$('#tbDatum').next().children(':first').slideUp();
					$('#tbDatum').next().children(':eq(1)').slideDown();
					return false;
				}else{
					$('#tbDatum').removeClass('poruka-border');
					$('#tbDatum').next().children(':eq(1)').slideUp();
					$('#tbDatum').next().children(':first').slideUp();
				}
			}
			return true;
		}
	}
	function proveraPoruka(){
		if($('#taPoruka').val()==0){
			$('#taPoruka').addClass('poruka-border');
			$('#taPoruka').next().children(':first').slideDown();
			return false;
		}else{
			$('#taPoruka').removeClass('poruka-border');
			$('#taPoruka').next().children(':first').slideUp();
			return true;
		}
	}
	function proveraRegExp(){
		var imeRegExp= new RegExp(/^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/);
		var emailRegExp= new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
		var ime=$('#tbIme').val();
		var prezime=$('#tbPrezime').val();
		var email=$('#tbEmail').val();
		var i=imeRegExp.test(ime);
		var p=imeRegExp.test(prezime);
		var e=emailRegExp.test(email);
		if(i || ime.length==0){
			if(i){
				$('#tbIme').removeClass('poruka-border');
				$('#tbIme').next().children(':eq(1)').slideUp();
			}
		}else{
			$('#tbIme').addClass('poruka-border');
			$('#tbIme').next().children(':eq(1)').slideDown();
		}
		if(p || prezime.length==0){
			if(p){
				$('#tbPrezime').removeClass('poruka-border');
				$('#tbPrezime').next().children(':eq(1)').slideUp();
			}
		}else{
			$('#tbPrezime').addClass('poruka-border');
			$('#tbPrezime').next().children(':eq(1)').slideDown();
		}
		if(e || email.length==0){
			if(e){
				$('#tbEmail').removeClass('poruka-border');
				$('#tbEmail').next().children(':eq(1)').slideUp();
			}
		}else{
			$('#tbEmail').addClass('poruka-border');
			$('#tbEmail').next().children(':eq(1)').slideDown();
		}
		if(i && p && e){
			return true;
		}else{
			return false;
		}
	}
	vremenskaPrognoza();
	$('#prognoza i').click(function(){
		vremenskaPrognoza();
	});
	function vremenskaPrognoza(){
		$.ajax({
			type:"get",
			dataType:"json",
			url:"http://api.openweathermap.org/data/2.5/weather?q=Vrnjacka%20Banja,rs&appid=88d9ebd968d3f6a9d5d283a8fdf0c768"
		})
		.done(function(result){
			$('#temperatura').html((result.main.temp-273.15)+' &#8451;');
			$('#pritisak').html(result.main.pressure+' mb');
			$('#vlaznost').html(result.main.humidity+' %');
			$('#vetar').html(result.wind.speed+' m/s');
		})
	}
	
	//-----------------------------------------------------------
});