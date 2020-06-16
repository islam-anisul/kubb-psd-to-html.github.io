    $('.portfolio_item').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
    });
//--------------SLIDER END--------

//---------TYPE JS----------

var typed = new Typed('.typed', {
    strings: ['Web Designer', 'Web Developer', 'UI/UX Designer', 'Photographer'],
    smartBackspace: true, // Default value
    typeSpeed: 80,
    startDelay: 1200,
    backSpeed: 80,
    backDelay: 500,
    loop: true,
    loopCount: false,
    showCursor: false,
    cursorChar: "|",
    attr: null,
    contentType: 'html',
    callback: function () {},
    preStringTyped: function () {},
    onStringTyped: function () {},
    resetCallback: function () {}
});