//#############################
//
// Custom HTML-Inputs
// Author: Adrian Engel
// http://github.com/adihimself
//
//############################# 

$(document).ready(function() {
	//#############################
	//
	// Select
	//
	//############################# 
	$('select').each(function(index, el) {
		var id_of_element = $(this).attr('id');
		var classes_of_element = $(this).attr('class');
		var init_value = $(this).children('option:selected').html();
		$(this).wrap('<div class="select-wrapper '+classes_of_element +' '+ id_of_element+'">');
		if($(this).hasClass('error')){
			$(this).before('<div class="select error">');
		} else {
			$(this).before('<div class="select">');
		}

		$(this).prev().prepend('<span>'+init_value+'</span>');
	});

	$('select').change(function(event) {
		var value = $(this).children('option:selected').html();
		var valueAttr = $(this).children('option:selected').val();
		$(this).prev().children('span').html(value);
		if (valueAttr=='') {
			$(this).prev().children('span').addClass('empty').removeClass('active');
		} else {
			$(this).prev().children('span').removeClass('empty').addClass('active');
		}
	});

	//#############################
	//
	// Checkbox
	//
	//############################# 
	$('input[type="checkbox"]').each(function(index, el) {
		var id_of_element = $(this).attr('id');
		var classes_of_element = $(this).attr('class');
		$(this).wrap('<div class="checkbox-wrapper '+classes_of_element +' '+ id_of_element+'">');
		if($(this).prop('checked') == true && !$(this).is(':disabled'))
			{
			$(this).parent('.checkbox-wrapper').prepend('<div class="checkbox active">');
			}
		else
			{
			$(this).parent('.checkbox-wrapper').prepend('<div class="checkbox">');
				if ($(this).is(':disabled'))
					{
						$(this).prev().addClass('disabled');
					}
			}
	});

	$('.checkbox').click(function(event) {
		if (!$(this).next().is(':disabled'))
			{
				if( $(this).hasClass('active') ) {
					$(this).removeClass('active');
					$(this).parent('.checkbox-wrapper').children('input[type="checkbox"]').prop('checked', false).change();
				} else {
					$(this).addClass('active');
					$(this).parent('.checkbox-wrapper').children('input[type="checkbox"]').prop('checked', true).change();
				}
			}
	});

	$('.checkbox-wrapper input[type="checkbox"]').change(function(event) {
		if( $(this).is(':checked') ) {
			$(this).prev().addClass('active');
		} else {
			$(this).prev().removeClass('active');
		}
	});  
});
