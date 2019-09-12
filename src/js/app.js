$(document).ready(function () {

	$("header nav").on("click","a", function (event) {
	   event.preventDefault();
	   var id  = $(this).attr('href'),
	   	top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
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