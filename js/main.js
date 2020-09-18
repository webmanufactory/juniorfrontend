$(document).ready(function(){

    let question = $('.question');
    let popUp = $('.pop-up');
    let menuAccordeon = $('.choice__title');

    popUp.hide();

    question.hover(function (pos) {
        let position = question.offset();
        let posX = position.top;
        let posY = position.left;

        popUp.fadeIn();
        popUp.offset({top: (posX - 140), left: (posY - 120)})

    }, function () {
        
        popUp.fadeOut();

    });

    if (window.matchMedia('(max-width: 360px)').matches) {
        menuAccordeon.click(function () {
            let box = $(this).parents('.comparison__item');
            let item = box.find('.choice__text');
            let subtitle = box.find('.choice__subtitle');

            item.slideToggle(200);
            subtitle.slideToggle(200);
            $(this).toggleClass('choice__button');
        });
    };
});