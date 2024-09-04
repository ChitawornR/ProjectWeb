var carouselWidth = $('.inner-card-slide')[0].scrollWidth;
var cardWidth = $('.carousel-item-card').width();
var visibleCards = Math.floor($('.inner-card-slide').width() / cardWidth) + 0.2; // ใส่ 0.2 เพราะให่พอดีขนาดหน้าจอ
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