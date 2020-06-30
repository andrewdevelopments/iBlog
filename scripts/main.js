(function($) {
	'use strict';

	var _hero_slider = $('.hero'),
		_widget_slider = $('.widget-post-slider'),
		_widget_product_slider = $('.product-slider'),
		_main_content = $('.main-content'),
		_cart_trigger = $('.cart-icon'),
		_cart_module = $('.cart-module'),
		_search_module_trigger = $('.search-icon a'),
		_search_module = $('.search-icon'),
		_mega_menu = $('.menu-item-has-megamenu'),
		_w_w = $(window).width();

	var
	_Init = function() {
		_Auto_Width_Content();
		_Modules();
		_MegaMenu();
		_Masonry();
		_Slider();
	},
	_Auto_Width_Content = function() {

		function _width_calculator( _right_bar, _left_bar ) {
			var _w_sum, _total;

			if( $('.border-bar.right').length && $('.border-bar.left').length ) {
				_w_sum = $(window).width() - _right_bar - _left_bar;
			}
			else if( $('.border-bar.right').length && !$('.border-bar.left').length ) {
				_w_sum = $(window).width() - _right_bar;
			}
			else if( $('.border-bar.left').length && !$('.border-bar.right').length ) {
				_w_sum = $(window).width() - _left_bar;
			}

			if( $('.fixed-wrapper').length ) {
				_total = _w_sum - 300;
			}
			else {
				_total = _w_sum;
				_main_content.css({ 'margin-left': _left_bar });
			}

			return _total;
		}

		// Set _main_content width
		_main_content.width(_width_calculator(50,50));

		$(window).on('resize', function() {
			_main_content.width(_width_calculator(50,50));
		});

	},
	_Modules = function() {

		// Search module
		function _Search_Module() {
			if( _search_module.length ) {
				_search_module_trigger.on('click', function() {
					$('.search-module').addClass('active');
					return false;
				});
				$('.search-module .close-module').on('click', function() {
					$('.search-module').removeClass('active');
					return false;
				});
			}
		}
		_Search_Module();

	},
	_MegaMenu = function() {

		_mega_menu.each(function() {

			$(this).children('.mega-menu-content').children('.sub-menu').children('li').on('mouseover', function() {

				$('.mega-menu-content .sub-menu li').removeClass('active');
				$(this).addClass('active');

				$('.mega-menu-content .sub-menu li .mega-menu-three').removeClass('show-mega-menu');
				$(this).children('.mega-menu-three').addClass('show-mega-menu');

				$('.mega-menu-three').addClass('hide-mega-menu');
			});

		});

	},
	_Masonry = function() {

		$(window).on('load', function() {
			$('.masonry-layout').masonry();
		});

	},
	_Slider = function() {

		// Hero Options
		var _h_dots, _h_arrows, _h_slides;
		if( _hero_slider.hasClass('default') ) {
			_h_dots = false;
			_h_arrows = true;
			_h_slides = 1;
		}
		else if( _hero_slider.hasClass('long') ) {
			_h_dots = false;
			_h_arrows = true;
			_h_slides = 3;
		}

		if( _hero_slider.length ) {
			_hero_slider.slick({
				dots: _h_dots,
				arrows: _h_arrows,
				slidesToShow: _h_slides,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right"></i></button>',
			});
		}

		if( _widget_slider.length ) {
			_widget_slider.slick({
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
			});
		}

		if( _widget_product_slider.length ) {
			_widget_product_slider.slick({
				dots: true,
				arrows: false,
			});
		}

	};
	_Init();
	
})(jQuery);