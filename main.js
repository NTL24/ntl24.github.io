$(document).ready(function () {
    $('.navbar-nav li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('.navbar-nav li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
});

