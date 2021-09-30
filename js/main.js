$(function () {
  // Burger =====>
  $('.burger').click(function () {
    $('.nav').toggleClass('active');
  });

  // Page-Info Show more =====>
  $('.page-info .show-more').click(function () {
    $(this).addClass('active');
    $('.page-info p').addClass('active');
  });

  // Hide Offer =====>
  $('.offer-btn').click(function() {
    $('.offer').hide();
  });

  // Filters Trigger =====>
  $('.filters__trigger').click(function () {
    $('.filters').toggleClass('active');
    $('.overlay').toggleClass('active');
  });

  // Filters Apply =====>
  $('.filters-apply').click(function () {
    $('.filters').removeClass('active');
    $('.overlay').removeClass('active');
  });

  // Overlay =====>
  $('.overlay').click(function () {
    $(this).removeClass('active');
    $('.filters').removeClass('active');
  });

  // Checkbox =====>
  $('.checkbox-wrapper').click(function() {
    var checkbox = $(this).children('input[type="checkbox"]')
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
  $('.filters-item').click(function() {
    var checkbox = $(this).children('input[type="checkbox"]')
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
  $('input[type="checkbox"]').click(function () {
    $(this).prop('checked', !$(this).prop('checked'));
  })

  // Dropdown's =====>
  $('.dropdown__trigger').click(function() {
    $(this).toggleClass('active');
    $(this).next('.dropdown-list').toggleClass('active');
  });

  $('.dropdown__subtrigger').click(function() {
    $(this).prev('.dropdown-sublist').toggleClass('active');
    if ($(this).prev('.dropdown-sublist').hasClass('active')) {
      $(this).children('span').text('Voir moins');
    } else {
      $(this).children('span').text('Voir plus');
    }
  });

  // Show/Hide filter trigger on scroll =====>
  $(window).scroll(function () {
    let offsetItem1 = $('.header').height()
    let offsetItem2 = $('.breadcrumbs').height()
    let offsetItem3 = $('.page-info').height()
    let offsetItem4 = $('.sort').height()

    if ($(this).scrollTop() > offsetItem1 + offsetItem2 + offsetItem3 + offsetItem4 ) {
      $('.filters-fixed').addClass('fixed');
    } else {
      $('.filters-fixed').removeClass('fixed');
    }
  });


  // Slider comments in the card =====>
  $('.card-slider').each(function(i, e){
    var id = 'adaptive';
    $(e).attr('id', id+i);
    var selector = '#'+id+i;
    $(selector).lightSlider({
      item: 1,
      loop: false,
      slideMove: 1,
      speed: 600,
      slideMargin: 30,
      pager: false,
      controls: true,
      onBeforeSlide: function (el) {
        $(this).parent().parent().parent().find($('.current')).text(el.getCurrentSlideCount())
      },
    });
  });

  $('.card-slider').each(function(i, e){
    let item = $(this).parent().parent().parent();
    let itemLenght = item.find('.lslide').length;
    item.find('.total').text(itemLenght);
  })

  $('.next').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().next().find('.lSNext').click();
  });

  $('.prev').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().next().find('.lSPrev').click();
  });
  

  // Show-more =====>
  $('.more__trigger').click(function () {
    $(this).prev('.show-item').toggleClass('active');
  })

  // Price slider =====>
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 5.00,
      max: 68.90,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " €" +
      " et " + $( "#slider-range" ).slider( "values", 1 ) + " €" );
  });

  // Fixed Header on scroll to top page =====>
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      $('.header').removeClass('scroll-up');
    } else {
      $('.header').addClass('scroll-up');
    }
    lastScrollTop = st;
  });

  $(window).scroll(function () {
    let offsetItem1 = $('.header').height()

    if ($(this).scrollTop() > offsetItem1 ) {
      null
    } else {
      $('.header').removeClass('scroll-up');
    }
  });
});