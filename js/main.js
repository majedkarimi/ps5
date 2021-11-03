$(document).ready(function(){
    $('.image-header').click(function(){
        $('.show-sub').css({
            'visibility': 'visible',
            'opacity': '1',
            'top': '46px'
        });
        $('.show-sub').toggle(50);
        $('show-sub').animate({
            opacity: ".5"
        });
    });
});
