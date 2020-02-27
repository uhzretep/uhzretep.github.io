(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });
    
})(jQuery);