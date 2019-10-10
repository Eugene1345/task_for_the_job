
$(document).ready(function(){

  $('.burger').on('click',function(){
    $('.overlay,.mobile-menu').fadeIn();
  });

  $('.overlay').on('click',function(){
    $('.mobile-menu,.overlay').fadeOut();
  });

  $('.menu__link').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
    });

  $(".js-range-slider").ionRangeSlider({
    grid: true,
    values: [
      'Не владею',
      'Использую готовые<br/> решения',
      'Использую готовые решения<br/> и умею и переделывать',
      'Пишу сложный JS с нуля'
    ]
  });
  
  $('.section--bio__select').styler();
});