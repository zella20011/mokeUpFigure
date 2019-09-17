$(document).ready(function () {

	$("header nav, .home .row, footer .footer-menu").on("click","a", function (event) {
		 event.preventDefault();
		 
	   var id  = $(this).attr('href'),
			 top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	});

	$('.burger').click(function() {
		$(this).toggleClass('burger_active');
		$('.menu-burger').toggleClass('menu-burger_active');

		if(!$(this).hasClass('burger_active')) {
			$('.overlay').removeClass('overlay_about').hide(500);
			$('.sub-content').hide(500).children('.sub-content-about, .sub-content-contact-us, .sub-content-faq, .sub-content-terms').hide(500);
			$(this).closest('ul').find('li').removeClass('menu-burger__item_active');
			$('html, body').removeClass('no-scroll');
			$('.menu-burger__item').removeClass('menu-burger__item_no-scroll');
		}
	})

	$('.menu-burger').on('click','.menu-burger__item',function(){
		self = $(this);
		$('html, body').addClass('no-scroll');
		self.closest('ul').find('li').removeClass('menu-burger__item_active');
		self.closest('ul').find('li').addClass('menu-burger__item_no-scroll')
		self.addClass('menu-burger__item_active');

		activeValue = self.children().text();

		switch (activeValue) {
			case 'Contact us': {
				$('.sub-content').children('.sub-content-about, .sub-content-faq, .sub-content-terms').hide(500);
				$('.overlay').addClass('overlay_contact-us').show(500);
				$('.sub-content').show(500).children('.sub-content-contact-us').show(500);
				break;
			}
			case 'About': {
				$('.sub-content').children('.sub-content-contact-us, .sub-content-faq, .sub-content-terms').hide(500);
				$('.overlay').addClass('overlay_about').show(500);
				$('.sub-content').show(500).children('.sub-content-about').show(500);
				break;
			}
			case 'FAQs': {
				$('.sub-content').children('.sub-content-contact-us, .sub-content-about, .sub-content-terms').hide(500);
				$('.overlay').addClass('overlay_about').show(500);
				$('.sub-content').show(500).children('.sub-content-faq').show(500);
				break;
			}
			case 'Terms & Conditions': {
				$('.sub-content').children('.sub-content-contact-us, .sub-content-about, .sub-content-faq').hide(500);
				$('.overlay').addClass('overlay_about').show(500);
				$('.sub-content').show(500).children('.sub-content-terms').show(500);
				break;
			}
		}
	});

	$('.art__button').click(function() {
		self = $(this);
		event.preventDefault();
		self.toggleClass('art__button_close');
		if(self.hasClass('art__button_close')) {
			self.text('CLOSE GALLERY');
			self.closest('.container').find('.art-main').slideUp(500);
			self.closest('.container').find('.art-gallery').slideDown(500);
		} else {
			self.text('OPEN GALLERY');
			self.closest('.container').find('.art-gallery').slideUp(500);
			self.closest('.container').find('.art-main').slideDown(500);
		}
		
		scrollToSection('art');
	})

	$('.community-main .button.section-block__button').click(function() {
		event.preventDefault();
		$('.community-main').hide(500);
		$('.community-form').show(500);
		scrollToSection('community');
	});

	$('.community-form .section-form__close, .community-form .section-form-buttons .section-block__button').click(function() {
		event.preventDefault();
		$('.community-form').hide(500);
		$('.community-main').show(500);
		scrollToSection('community');
	});

	$('.stores-main .button').click(function() {
		event.preventDefault();
		$('.stores-main').hide(500);
		$('.stores-form').show(500);
		scrollToSection('stores');
	});

	$('.stores-form .section-form__close, .stores-form .section-block__button').click(function() {
		event.preventDefault();
		$('.stores-form').hide(500);
		$('.stores-main').show(500);
		scrollToSection('stores');
	});

	$('.affiliates-main .section-block__button').click(function() {
		event.preventDefault();
		$('.affiliates-main').hide(500);
		$('.affiliates-second').show(500).addClass('affiliates-second_active');
		scrollToSection('affiliates');
	})

	$('.affiliates-second-left__back, .affiliates-second .section-block__button').click(function() {
		event.preventDefault();
		$('.affiliates-second').hide(500).removeClass('affiliates-second_active');
		$('.affiliates-main').show(500);
		scrollToSection('affiliates');
	})

	$('.sub-content-faq .row .sub-content-item').click(function() {
    
    var findArticle = $(this).children('.sub-content-item-block');
    var findWrapper = $(this).closest('.row');
    
    if (findArticle.is(':visible')) {
    	$(this).removeClass('sub-content-item_active');
      findArticle.slideUp(500);
    }
    else {
    	findWrapper.find('.sub-content-item').removeClass('sub-content-item_active');
    	$(this).addClass('sub-content-item_active');
      findWrapper.find('.sub-content-item-block').slideUp(500);
      findArticle.slideDown(500);
    }
   });

	$('.custom-select').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 500;

		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="custom-select"></div>');
		// Style box
		switch ($this.attr('name')) {
			case 'store-state': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'State*'
				}).insertAfter($this);
				break;
			}
			case 'store-country': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'Country*'
				}).insertAfter($this);
				break;
			}
			case 'store-city': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'City*'
				}).insertAfter($this);
				break;
			}
			case 'affiliates-state': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'State*'
				}).insertAfter($this);
				break;
			}
			case 'affiliates-country': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'Country*'
				}).insertAfter($this);
				break;
			}
			case 'affiliates-city': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'City*'
				}).insertAfter($this);
				break;
			}
			case 'nearStore': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'Find the store near you'
				}).insertAfter($this);
				break;
			}
			case 'community-who-i': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'I am...'
				}).insertAfter($this);
				break;
			}
			case 'contact-us': {
				$('<div>',{
					class: 'custom-select__gap',
					text: 'Select Topic'
				}).insertAfter($this);
				break;
			}
		}
		
		var selectGap = $this.next('.custom-select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'custom-select-list'
		}).insertAfter(selectGap);		

		var selectList = selectGap.next('.custom-select-list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'custom-select-list__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})				
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');
		//selectList.find('li').first().addClass('active');
		
		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);
				//$('#polls, #company, #documents, #news-page, #courses, #shares').addClass('hover');
				/*if ($('#small-menu .container .select-years .select__gap').hasClass('on')) {
					$('#small-menu .container .select-years .select__gap').removeClass('on');
					$('#small-menu .container .select-years .select__list').slideUp();
				}*/

				selectItem.on('click', function(){
					selectItem.removeClass('active');
					$(this).addClass('active');
					var chooseItem = $(this).data('value');

					$('custom-select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});		

	});

	scrollToSection = function(id) {
		setTimeout(function() {
			var top = $('#' + id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	 }, 500)
	}
});