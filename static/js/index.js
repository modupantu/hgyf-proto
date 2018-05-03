var banner = new Swiper('#Banner', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
    speed: 1000
});
var product = new Swiper("#Pwiper", {
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 3, //显示几个 
    slidePerGroup: 3, //几个为一组 
    spaceBetween: 30, //间距
    loop: true,
    speed: 1000
});
var jiameng = new Swiper("#Costomer", {
    direction: 'vertical',
    autoplay: {
        delay: 2000
    },
    slidesPerView: 6, //显示几个
    spaceBetween: 1, //间距
    loop: true,
    speed: 1000,
    breakpoints: {
        1024: {
            slidesPerView: 5,
            spaceBetween: 1
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 1
        },
        640: {
            slidesPerView: 5,
            spaceBetween: 1
        },
        320: {
            slidesPerView: 5,
            spaceBetween: 1
        }
    }
});