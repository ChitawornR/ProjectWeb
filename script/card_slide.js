var carouselWidth = $('.inner-card-slide')[0].scrollWidth;
var cardWidth = $('.carousel-item-card').width();
var scrollPosition = 0;

$('.card-slide-next').on('click',function(){
    if(scrollPosition < (carouselWidth - (cardWidth*3))){
        scrollPosition += cardWidth;
        $('.inner-card-slide').animate({scrollLeft: scrollPosition},600)
    }
})
$('.card-slide-prev').on('click',function(){
    if(scrollPosition > 0){
        scrollPosition -= cardWidth;
        $('.inner-card-slide').animate({scrollLeft: scrollPosition},600)
    }
})