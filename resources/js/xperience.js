$(document).ready(function() {
    $('#open_menu').on('click', function(e) {
        e.preventDefault();
        $('ul#top_nav_menu').addClass('open');
        $('a#close_menu').addClass('open');
    });
    $('#close_menu').on('click', function(e) {
        e.preventDefault();
        $('ul#top_nav_menu').removeClass('open');
        $('a#close_menu').removeClass('open');
    });
});

function checkOffset() {
    if ($('#range_sliders').offset().top + $('#range_sliders').height() >= $('footer').offset().top - 1)
        $('#range_sliders').css('position', 'relative');
    if ($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
        $('#range_sliders').css('position', 'fixed').css('width', '100%').css('bottom', '0').css('zIndex', '99'); // restore when you scroll up
}
$(document).scroll(function() {
    checkOffset();
});
