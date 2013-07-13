;(function($) {
	   
	if (Modernizr.localstorage) {
		  // window.localStorage is available!
		  if(localStorage.getItem('start.menu_state') === null) {
		  	
			// Empty menu_state
		  	// localStorage["start.menu_state"] = 'sidebar_default';
		  } 
			
			// console.log(localStorage["start.menu_state"]);
		} else {
		  // no native support for HTML5 storage :(
		  // maybe try dojox.storage or a third-party solution

		  // No HTML LocalStorage Support
		}	

	  $(function () {

	  	//General functions
	  	$("input:checkbox, input:radio, input:file").uniform();
	  	// Enable tooltips
	 $("[rel=tooltip]").tooltip();
	 $(".bar_1").sparkline( [3,4,8,5,3,6,3,2,3,5], {type:"bar", barColor:"#fff" });
	 $(".bar_2").sparkline( [5,3,9,6,5,9,7,3,5,2], {type:"bar", barColor:"#fff" });
	 $(".bar_3").sparkline( [6, 9, 3,5,3,5,2,8,9,6,3], {type:"bar", barColor:"#fff" });

     if (Modernizr.canvas) {

	      $(".bar1").peity("bar", {
	        colour: "#fff",
	        width: 30,
	        height: 17
	      }).fadeIn();
	      $(".bar2").peity("bar", {
	        colour: "#fff",
	        width: 30,
	        height: 17
	      }).fadeIn();
	       $(".bar3").peity("bar", {
	        colour: "#fff",
	        width: 350,
	        height: 60
	      }).fadeIn();
	      $(".line").peity("line").fadeIn();
	    };
    });
	  

	//Paint Bucket Icon trigger
	//Add icon on each boxe that have class .paint
	$('.box.paint_hover').append('<a class="change_color_outside"><i class="paint_bucket"></i></a>');
	$('.box.paint').append('<a class="btn change_color_outside"><i class="paint_bucket"></i></a>');


	// Color classes 
	var colors_classes = [];
	for(var i = 0; i<=27; i++) {
		colors_classes[i] = 'color_'+i;
	}

	var change_trigger = $('a.change_color');

	$("a.change_color_outside").on('click', this, function(e){
		var self1 = this;
			current_box = $(this).closest('.box');

		 var offset = $(this).offset();
		
		//Position the pallete
		e.stopPropagation();
		$('.background_changer').css({'left': offset.left-$('#colors_pallete ul').outerWidth()+$(this).outerWidth(), 'top': offset.top+$(this).outerHeight()});
		
		//Show the pallete
		change_trigger.click();
			
	});

	$(".background_changer li a").on('click', this, function(ev){	
			var self = $(this),
				color = self.attr('data-color');
			// Change menu item state buttons class to .active
			$('.background_changer li a').removeClass('active');
		    self.addClass('active');

		    // Remove all color classes
			$.each(colors_classes, function(i, c){
		       current_box.removeClass(c);

		    });

		    // Add new color class
		    current_box.addClass(color);
	});
	
	  	
 


    $(function() {
    	$('#sidebar_menu a.accordion-toggle').on('click',function(){
	    setTimeout(function() {
	        $('#sidebar').tinyscrollbar_update('relative');
	    }, 300);

    		var $current = $(this);
    		var hasClassOpened = $current.closest('li').hasClass('opened');
    		$current.closest('ul').find('li.opened').removeClass('opened');
    		if(!hasClassOpened) {
    			$current.closest('li').addClass('opened');
    		}
    	});
    	//UL & LI to Select
    	   $('#github').Touchdown();
		// Dropdowns
		$('select1').each(function(i,e) {

			if ( !($(e).data('convert') == 'no') ) {

				var select = $(e).hide(),
					label = select.children('option:selected').text(),
					color = select.children('option:selected').data('icon-color'),
					options = select.children('option'),
					labeled = select.data('labeled'),
					className = select.attr('class'),
					labelIcon = null;

				var dropdown = $('<div class="btn-group" id="select-group-' + i + '">').insertAfter(select),
					current = select.val() ? select.val() : '&nbsp;',
					li = null;

				labelIcon = (labeled) ? '<i class="icon-sign-blank ' + color + '"></i>' : '';

				$('<a class="btn dropdown-toggle ' + className + '" data-toggle="dropdown" href="#">' +	labelIcon + label + '<span class="icon-sort"></span></a>' +	'<ul class="dropdown-menu"></ul>')
					.appendTo(dropdown);

				options.each(function(o,q) {
					var iconColor = $(q).data('icon-color');

					if (typeof iconColor === 'undefined') {
						iconColor = ' color' + (o+1);
					} else {
						iconColor = ' ' + iconColor;
					}

					if (labeled) {
						labelIcon = '<i class="icon-sign-blank '+ iconColor+'"></i>';
					} else {
						labelIcon = '';
					}

					li = $('<li><a tabindex="-1" href="#" " data-value="' + $(q).attr('value') + '">'+ labelIcon + q.text +'</a></li>');

					dropdown
						.find('.dropdown-menu')
						.append(li);

					if ( $(q).attr('selected') ) {
						dropdown.find('.dropdown-menu li:eq(' + o + ')').click();
					}
				});

		        dropdown.find('.dropdown-menu a').click(function(e) {
		        	var self = $(this);
		        	e.preventDefault();
		            dropdown.find('.btn:eq(0)').html(self.html() + '<span class="icon-sort"></span>');
		            select.find('[selected]').removeAttr('selected');
		            select.find('[value="'+self.data('value')+'"]').attr('selected', 'selected');
		            select.change();
		        });
			}
		});

		// Change Dropdown expanding on hover for navbar and set links back
		$('.navbar').on('hover', ' .dropdown', function() {
			$(this).children('.dropdown-toggle').click();
		});

		// File Input
		$('.fileinput').customFileInput({
	        button_position : 'right'
	    });
	    
	    // Datepicker
		$( ".datepicker" ).datepicker();

		
		// Toggle

		var off = false;

		var toggle = $('.toggle');

		toggle.siblings().hide();
		toggle.show();

		if (toggle.siblings().find(':checked').val() == "on") {
			toggle.removeClass('off').addClass('on');
		} else {
			toggle.removeClass('on').addClass('off');
		};

		$('.content').on('click', '.toggle', function() {
			var self = $(this);

			if (self.hasClass('on')) {
				self.siblings('.off').click();
				self.removeClass('on').addClass('off');
			} else {
				self.siblings('.on').click();
				self.removeClass('off').addClass('on');
			}
		});

	});

	function is_touch_device() {  
		try {
			document.createEvent("TouchEvent");  
			return true;  
		} catch (e) {  
			return false;  
		}  
	}

	//If is touch device
	if(is_touch_device()) {
		//Fix the sidebar 
		$('#sidebar').css({'position': 'absolute'});
		$('html.sidebar_hover.active #sidebar').css('left', '315px');
	
		//Remove the scrollbar from the sidebar
		$('#sidebar .track').remove();

		//Show Hover Menu State on swipe
		$('body').swipe( {
				swipeLeft:function() {
					$('html').removeClass('active');
					startToggled = false;	
					},
				swipeRight:function() {
					$('html').addClass('active');
					startToggled = true;
					},
		});
	};

$(window).on('resize', function(){
	$('#loading').remove();
});

$('body').css('min-height', $(window).height());

// IE Fallbacks
$(window).load(function () {
	if ( $.browser.msie && (parseInt($.browser.version) <= 9)) {
		$('#loading, .no_ie').remove();
		$("#sidebar").css('position', 'absolute');
		$(".menu_states").remove();
	}
});


//Responsive JavaScript using Enquire.js plugin
if ( $.browser.msie && (parseInt($.browser.version) < 10)) {

} else {
enquire.register("screen and (min-width: 769px)", {
	
    match : function() {
	// Scroll plugin
	
	if(is_touch_device()) {
		$(".viewport").height($(document).height());
	} else {
		$(".viewport").height($(window).height());
		$("#sidebar").height($(window).height());
		// console.log($(window).height());
		
	};


    setTimeout(function() {
        $('#sidebar').tinyscrollbar();
    }, 500);

	$(window).on('resize', function(){
		$("#sidebar, .viewport").height($(window).height());
		$('#sidebar').tinyscrollbar_update('relative');
		
		// console.log($(window).height());
	});

	//Sliding functionality for left menu
	  	var enableMenu = function() {
	  		var offset = null,
	  			threshold = 15,
	  			sidebarWidth = $('#sidebar').width(),
				startShowTimer, startHideTimer,
				waitingTime = 300,
				waitingTime2 = 500,
				cancelShow = true,
				cancelHide = true,
				startToggled = false;

			var showStart = function() {
				if (offset < threshold) {
					$('html').addClass('active');
					startToggled = true;
				}
			}

			var hideStart = function() {
				if (offset > sidebarWidth) {
					$('html').removeClass('active');
					startToggled = false;
				}
			}

			$('body').on('mousemove', function(e) {
				offset = e.pageX;

				if (!startToggled) {

					if (e.pageX < 15) {
						startShowTimer = setTimeout(showStart, waitingTime);
					} else {
						clearTimeout(startShowTimer);
					}

				} else {

					if (e.pageX > 315) {
						startHideTimer = setTimeout(hideStart, waitingTime2);
					} else {
						clearTimeout(startHideTimer);
					}

				}
			});

			
	  	}

	  	enableMenu();

	// Menu States
	
	var menu_states_classes = ["sidebar_icons", "sidebar_default", "sidebar_hover"];

	//Get current state for menu
	$.each(menu_states_classes, function(i, v){
	       $('html').removeClass(v);
	})
	$('.menu_states button').removeClass('active');
	if (Modernizr.localstorage) {
		$('html').addClass(localStorage["start.menu_state"]);
		$('.menu_states button[data-state="'+localStorage["start.menu_state"]+'"]').addClass('active');

	} else {
		$('html').addClass('state_default');
	}


	$(".menu_states button").on('click', this, function(){
		// Remove all classes from html
	    $.each(menu_states_classes, function(i, v){
	       $('html').removeClass(v);
	    })

	    // Add the current one to the html
		menu_class = $(this).attr('data-state');
		$('html').addClass(menu_class);

		//Keep menu state in localStorage
		localStorage["start.menu_state"] = menu_class;

		// Change menu state buttons class to .active
		$('.menu_states button').removeClass('active');
		$(this).addClass('active');
		
	});

    }, 

}).register("screen and (min-width: 600px)", {
 match : function() {
	
    $(document).ready(function() {
    	// $('body').prepend('');
        $('body').fadeIn(500);
        // $(".logo a, #sidebar_menu a:not(.accordion-toggle), a.ajx").click(function() {
        //     event.preventDefault();
        //     newLocation = this.href;
        //     $('body').fadeOut(500, newpage);
        // });
        function newpage() {
            window.location = newLocation;
        }
    });
    $(window).load(function() {
        // $('#loading').delay(1000).fadeOut();
        $('#loading').fadeOut();

    });

 },
}).register("screen and (max-width: 769px)", {
	 match : function() {
		if(is_touch_device()) {
			//Fix the sidebar 
			$('#sidebar').css({'top': '64px', 'left': '0px'});
		};
	}
}).fire();
} //  End if

})(jQuery);