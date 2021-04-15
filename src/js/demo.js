const demo = () => 'Webpack Boilerplate v5.5.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';

// eslint-disable-next-line no-console
console.log(demo());



$(document).ready(function () {
    console.log('loading-------')


    var trigger = $('button[data-toggle=collapse]'),
      overlay = $('.overlay'),
     isOpened = false;

    trigger.on('click', function () {
        $('.collapse').collapse();
        isOpened = !isOpened;
        sideNav(isOpened);      
    });

})

function sideNav(isOpened) {
    
    if (isOpened == true) { 
        $(".icon-default").hide()
        $(".icon-hover").removeClass('d-none')         
        

    } else if (isOpened == false) {   
  
        $(".icon-default").show()
        $(".icon-hover").addClass('d-none')
        
    }
}

