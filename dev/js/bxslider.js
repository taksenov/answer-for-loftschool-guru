/**
 * Created by admin on 10.12.2014.
 */

// ========= bxslider =================================

//клиенты
jQuery(document).ready(function(){
    jQuery('.slider4').bxSlider({
        slideWidth: 225,
        minSlides: 2,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 10,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '<img src="static/img/ourclients/next-client.png" alt=""/>',
        prevText: '<img src="static/img/ourclients/prev-client.png" alt=""/>'
    });
});

//отзывы клиентов
jQuery(document).ready(function(){
    jQuery('.slider5').bxSlider({
        slideWidth: 620,
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 10,
        nextSelector: '#slider5-next',
        prevSelector: '#slider5-prev',
        nextText: '<img src="static/img/feedback/arrow_next.png" alt=""/>',
        prevText: '<img src="static/img/feedback/arrow_prev.png" alt=""/>'
    });
});


// ========= bxslider =================================