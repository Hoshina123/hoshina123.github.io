'use strict';

function pageScroll(element){
    let e = document.getElementById(element);

    let dy = e.offsetTop + e.offsetHeight + 80, sy = document.documentElement.scrollTop;

    if (element == 'pagetop'){
        scrollToTop(sy, 10, 10);
    }
    else{
        scrollToElement(sy, dy, 10, 15)
    }
}

function scrollToTop(dy, step, interval){
    let t = setInterval(() => {
        let s = Math.ceil(dy / step);
        dy -= s;
        window.scrollTo(0, dy);
        if (dy <= 0) clearInterval(t);
    }, interval);
}

function scrollToElement(start, dy, step, interval){
    let t = setInterval(() => {
        let s = Math.ceil((dy-start) / step);
        start += s;
        window.scrollTo(0, start);
        if (start >= dy) clearInterval(t);
    }, interval);
}
