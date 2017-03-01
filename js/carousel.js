$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
            dotsContainer: "#carousel-custome-dots"
        }
    );
});
$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});