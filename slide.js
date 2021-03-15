// Calculate percentage of the page that is scrolled to CSS property (--scroll)
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);