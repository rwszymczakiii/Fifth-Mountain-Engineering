//load page at correct section
$('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        $('#showcase').load("./index.html");
        alert("k");

        const hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            1200
        );
    }
});