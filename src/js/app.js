$(document).ready(function () {

	$("header nav, .home .row, footer .footer-menu").on("click","a", function (event) {
		 event.preventDefault();
		 
	   var id  = $(this).attr('href'),
			 top = $(id).offset().top;
			 console.log(top)
	   $('body,html').animate({scrollTop: top}, 1500);
	});

	$('.burger').click(function() {
		$(this).toggleClass('burger_active');
		$('.menu-burger').toggleClass('menu-burger_active');
	})

	$('.menu-burger').on('click','.menu-burger__item',function(){
		self = $(this);
		self.closest('ul').find('li').removeClass('menu-burger__item_active');
		self.addClass('menu-burger__item_active');
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

		setTimeout(function() {
			var top = $('#art').offset().top;
	   	$('body,html').animate({scrollTop: top}, 1500);
		}, 500)
	})

	$('.community-main .button.section-block__button').click(function() {
		$('.community-main').hide('slow');
		$('.community-form').show('slow');
	});

	$('.community-form-block__close, .community-form-buttons .button.section-block__button').click(function() {
		$('.community-form').hide('slow');
		$('.community-main').show('slow');
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
		$('<div>',{
			class: 'custom-select__gap',
			text: 'Find the store near you'
		}).insertAfter($this);
		
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
});