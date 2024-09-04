// var carouselWidth = $('.inner-card-slide')[0].scrollWidth;
// var cardWidth = $('.carousel-item-card').width();
// var scrollPosition = 0;

// $('.card-slide-next').on('click',function(){
//     if(scrollPosition < (carouselWidth - (cardWidth*3))){
//         scrollPosition += cardWidth;
//         $('.inner-card-slide').animate({scrollLeft: scrollPosition},600)
//     }
// })
// $('.card-slide-prev').on('click',function(){
//     if(scrollPosition > 0){
//         scrollPosition -= cardWidth;
//         $('.inner-card-slide').animate({scrollLeft: scrollPosition},600)
//     }
// })

// var carouselWidth = $('.inner-card-slide')[0].scrollWidth;
// var cardWidth = $('.carousel-item-card').width();
// var scrollPosition = 0;

// $('.card-slide-next').on('click', function() {
//     if (scrollPosition < (carouselWidth - (cardWidth * 3))) {
//         scrollPosition += cardWidth;
//     } else {
//         scrollPosition = 0; // รีเซ็ตไปที่จุดเริ่มต้น
//     }
//     $('.inner-card-slide').animate({ scrollLeft: scrollPosition }, 600);
// });

// $('.card-slide-prev').on('click', function() {
//     if (scrollPosition > 0) {
//         scrollPosition -= cardWidth;
//     } else {
//         scrollPosition = carouselWidth - (cardWidth * 3); // เลื่อนไปที่จุดสิ้นสุด
//     }
//     $('.inner-card-slide').animate({ scrollLeft: scrollPosition }, 600);
// });

var carouselWidth = $('.inner-card-slide')[0].scrollWidth;
var cardWidth = $('.carousel-item-card').width();
var visibleCards = Math.floor($('.inner-card-slide').width() / cardWidth);
var scrollPosition = 0;

$('.card-slide-next').on('click', function() {
    if (scrollPosition < (carouselWidth - (cardWidth * visibleCards))) {
        scrollPosition += cardWidth;
    } else {
        scrollPosition = 0; // รีเซ็ตไปที่จุดเริ่มต้น
    }
    $('.inner-card-slide').animate({ scrollLeft: scrollPosition }, 600);
});

$('.card-slide-prev').on('click', function() {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
    } else {
        scrollPosition = carouselWidth - (cardWidth * visibleCards); // เลื่อนไปที่จุดสิ้นสุด
    }
    $('.inner-card-slide').animate({ scrollLeft: scrollPosition }, 600);
});

