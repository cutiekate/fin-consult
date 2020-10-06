'use strict';

new WOW().init();

$('.form__button--ask').on('click', function(event) {
    event.preventDefault();
    $('.form__textarea').css({"display" : "none"});
    $('.form__input').css({"display" : "block"});
    $('.form__button--ask').html("Задать вопрос");
    $('.form h5').html("Заполните форму и получите ответ на ваш вопрос");
    $('.form h5').css({"color": "#0063FF"});
})

$(document).ready(function(){
    $(".question__card--btn").hide(); 
    $('.question__card').hover(function(){
        if ($(this).hasClass('active')) {
            $(".question__card--btn").hide(); 
        } else {
            $(".question__card--btn").hide(); 
            $(".question__card--btn", this).toggle();
        }
    });
});

$(".question__card").on('click', function(event){
    event.preventDefault();

    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $(this).css({"background": "#03C473"});
        $(this).css({"background-image": "url('./images/icon check.svg')"});
        $(this).css({"background-repeat": "no-repeat"});
        $(this).css({"background-position": "95% 40%"});
        $('question__card--btn').css({"display": "none"});
        $(this).find("p").css({"color": "white"});
    } else {
        $(this).css({"background": "white"});
        $(this).find("p").css({"color": "#747A88"});
    }

});


