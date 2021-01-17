$(document).ready(function() {
    $('.carousel-inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/icon/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/icon/right.svg"></button>',
        autoplay: true
    });

    $('ul.catalog-tabs').on('click', 'li:not(.catalog-tabs-item_active)', function() {
        $(this)
            .addClass('catalog-tabs-item_active').siblings().removeClass('catalog-tabs-item_active')
            .closest('div.col-lg-10').find('div.catalog-content').removeClass('catalog-content_active').eq($(this).index()).addClass('catalog-content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(event) {
                event.preventDefault();
                $('.catalog-item-content').eq(i).toggleClass('catalog-item-content_active');
                $('.catalog-item-list').eq(i).toggleClass('catalog-item-list_active');
            });
        });
    };

    toggleSlide('.catalog-item-link');
    toggleSlide('.catalog-item-list-back');

    // modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal-close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });
    $('.catalog-item-footer-btn').each(function(item) {
        $(this).on('click', function() {
            $('#order .modal-descr').text($('.catalog-item-subtitle').eq(item).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    function validationForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите своё имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты!"
                }
            }
        });
    };

    validationForms('#consultation-form');
    validationForms('#consultation form');
    validationForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});