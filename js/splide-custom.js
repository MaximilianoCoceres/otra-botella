Splide.defaults = {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 5,
    autoScroll: {
        speed: 1,
    },
    breakpoints: {
        768: {
            perPage: 3,
            gap: '.7rem',
            
        },
    },
}

var elms = document.getElementsByClassName('splide');

for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount(window.splide.Extensions);
}