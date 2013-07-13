/**
 * --------------------------------------------------------------------
 * jQuery customfileinput plugin
 * Author: Scott Jehl, scott@filamentgroup.com
 * Copyright (c) 2009 Filament Group. Updated 2012.
 * licensed under MIT (filamentgroup.com/examples/mit-license.txt)
 * --------------------------------------------------------------------
 */

/**
 * All credits go to the Author of this file, some additional customization was
 * done for theme compat. purposes.
 */
 $.fn.customFileInput = function(options){

	//Get current element
	var fileInput = $(this);
	
	//Define settings
	var settings	= jQuery.extend({
		button_position 	: 'right',
		classes				: fileInput.attr('class'),
		feedback_text		: 'choose a file...',
		button_text			: 'Browse',
		button_change_text	: 'Change'
	}, options);
	
	//apply events and styles for file input element
	fileInput
		.addClass('customfile-input') //add class for CSS
		.focus(function(){
			upload.addClass('customfile-focus'); 
			fileInput.data('val', fileInput.val());
		})
		.blur(function(){ 
			upload.removeClass('customfile-focus');
			$(this).trigger('checkChange');
		})
		.bind('disable',function(){
			fileInput.attr('disabled',true);
			upload.addClass('customfile-disabled');
		})
		.bind('enable',function(){
			fileInput.removeAttr('disabled');
			upload.removeClass('customfile-disabled');
		})
		.bind('checkChange', function(){
			if(fileInput.val() && fileInput.val() != fileInput.data('val')){
				fileInput.trigger('change');
			}
		})
		.bind('change',function(){
			//get file name
			var fileName = $(this).val().split(/\\/).pop();
			//get file extension
			var fileExt = 'customfile-ext-' + fileName.split('.').pop().toLowerCase();
			//update the feedback
			uploadFeedback
				// .css({ width : '-=21' })
				.removeClass(uploadFeedback.data('fileExt') || '') //remove any existing file extension class
				.addClass(fileExt) //add file extension class
				.data('fileExt', fileExt) //store file extension for class removal on next change
				.addClass('has-file') //add class to show populated state
				.children('span').text(fileName); //set feedback text to filename
			//change text of button	
			// uploadButton.text(settings.button_change_text);	
		})
		.click(function(){ //for IE and Opera, make sure change fires after choosing a file, using an async callback
			fileInput.data('val', fileInput.val());
			setTimeout(function(){
				fileInput.trigger('checkChange');
			},100);
		});
		
		//create custom control container
		var upload = $('<div class="customfile">');
		//create custom control feedback
		var uploadFeedback = $('<div class="uneditable-input ' + settings.classes + '" aria-hidden="true"><span>' + settings.feedback_text + '</span></div>').appendTo(upload);
		//create custom control button
		var uploadButton = $('   <span class="add-on btn">Upload</span>');
		
		if ('right' === settings.button_position) {
			uploadButton.insertAfter(uploadFeedback);
		} else uploadButton.insertBefore(uploadFeedback);

	//match disabled state
	if(fileInput.is('[disabled]')){
		fileInput.trigger('disable');
	} else upload.click(function () { fileInput.trigger('click'); });

	
	//insert original input file in dom, css if hide it outside of screen
	upload.insertAfter(fileInput);
	fileInput.insertAfter(upload);

	//return jQuery
	return $(this);
};