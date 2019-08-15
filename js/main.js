//sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        this.document.querySelector('navbar').style.opacity = 1;
    }
});

//smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            },
            800
        );
    }
});