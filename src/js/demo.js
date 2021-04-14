const demo = () => 'Webpack Boilerplate v5.5.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';

// eslint-disable-next-line no-console
console.log(demo());



$(document).ready(function () {
    console.log('loading-------')
    $('.bar--times').show();
    var trigger = $('button[data-toggle=side-nav]'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.on('click', function () {
        $('.side-nav').collapse();
        sideNav(isClosed);      
    });

})

function sideNav(isClosed) {
    
    isClosed = !isClosed;
    if (isClosed == true) {          
      $('.bar--icon').hide()
      $('.bar--times').removeClass('d-none');
    } else {   
        $('.bar--icon').show()
        $('.bar--times').addClass('d-none');
      
    }
}

