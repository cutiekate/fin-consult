'use strict';

$('.form__button--ask').on('click', function(event) {
    event.preventDefault();
    $('.form__textarea').css({"display" : "none"});
    $('.form__input').css({"display" : "block"});
    $('.form__button--ask').html("Задать вопрос");
    $('.form h5').html("Заполните форму и получите ответ на ваш вопрос");
    $('.form h5').css({"color": "#0063FF"});
})

$(".form__button--choose").on("click","a", function (event) {
 
    event.preventDefault();
    
    var id = $(this).attr('href'),

    top = $(id).offset().top;
    
    $('body,html').animate({scrollTop: top}, 1500);
    });
