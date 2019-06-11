var $ = require('jquery');

$('.main-content').mouseover(function () {
  $('.header-content').addClass('border');
  $('header').removeClass('border');
})

$('.other-content').mouseover(function () {
  $('.header-content').removeClass('border');
  $('header').addClass('border');
})

$('#sign_up').hover(function () {
  $('#sign_up').toggleClass('onhover');
})

$('.menu-item-with-dropdown').hover(function() {
  $('.menu-item-with-dropdown').find('.dropdown-menu').toggleClass('active');
});
