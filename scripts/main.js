$(document).ready(function(){
	$(".screenshot").click(function(){
		$.fancybox.open({
		href: "#modal",
		padding: 0,
		helpers: {
			overlay: {
				locked: true
				}
			}			
		})
	});	
	$(".checkbox input[type=checkbox]").change(function(){
		$(this).parents(".checkbox").children('label:first-child').toggleClass('checked');
	})	

	var messages, lang = $("html").attr("lang");
	if(lang == "ru"){
		messages = {
			'country': "Пожалуйста выберите страну",
			'email': "Пожалуйста введите email",
			'private-police': 'Пожалуйста подтвердите согласие на обработку персональных данных'
		}
	}
	else if(lang == 'en'){
		messages = {
			'country': "Please, select a country",
			'email': "Please, enter the email",
			'private-police': "Please, confirm your consent to the processing of personal data"
		}
	}
	else if(lang == "bg"){
		messages = {
			'country': "Моля, изберете държава",
			'email': "Моля, въведете email",
			'private-police': 'Моля, потвърдете съгласието си за обработката на лични данни'
		}
	}	
	else if(lang == "ro"){
		messages = {
			'country': "Vă rugăm, selectați  țara",
			'email': " Vă rugăm să introduceți email",
			'private-police': 'Vă rugăm să confirmați consimțământul pentru prelucrarea datelor cu caracter personal'
		}
	}
	else if(lang == "es"){
		messages = {
			'country': "Por favor, selecciona un país",
			'email': "Por favor, introduzca su dirección de correo electrónico",
			'private-police': 'Por favor, confirma tu consentimiento para el procesamiento de información personal'
		}
	}
	else if(lang == "it"){
		messages = {
			'country': "Seleziona un paese",
			'email': "Inserisci l'indirizzo e-mail  ",
			'private-police': 'Conferma il consenso al trattamento dei dati personali'
		}
	}
	else if(lang == "th"){
		messages = {
			'country': "กรุณาเลือกประเทศ",
			'email': "คุณได้รับอีเมล 1 ฉบับ",
			'private-police': 'กรุณายืนยันการยินยอมให้ดำเนินการภายใต้ข้อมูลส่วนบุคคลนี้'
		}
	}	

	$("#request-1").validate({
		'messages' : messages
	});		
	$("#request-2").validate({
		'messages' : messages
	});		
	$("#request-3").validate({
		'messages' : messages
	});				
});