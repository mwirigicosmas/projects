// Custom js
// to access the child element of class side-bar which is the first anchor tag use class name followed by > a.
/*
var backgrounds = ['img/6.jpg', 'img/7.jpg', 'img/10.jpg', 'img/9.jpg'];

$('.side-bar > a').siblings().hide(); // to hide all siblings of the class side bar.

$('.side-bar > a').click(function () {

    console.log('running'); // displays running in developer tools eg v8 for chrome console always use it for testing the function

    $(this).siblings().toggle(); // to show hidden elements when you click open.

    $(this).toggleClass('open'); // .toggleClass adds and removes the class open when clicked.

    $('.back-1').css('background-image','url( ' + backgrounds[0] +  ')');// javascript concatenation  to add javascript inside of the css

    $('.back-2').css('background-image','url( ' + backgrounds[1] +  ')');

    $('.back-3').css('background-image','url( ' + backgrounds[2] +  ')');

    $('.back-4').css('background-image','url( ' + backgrounds[3] +  ')');

    if($(this).hasClass('open')){

        $('.side-bar').animate({ // .animate animates the div side-bar to the given value which is 40% in 1.5 seconds

            width: '90%'

        },1500, function () {

            $('.side-bar >a ').text('close'); // .text changes the text of the anchor tag to close.

        });

    }else{

        $('.side-bar').animate({  //.animate animates the div side-bar to the given value which is 12% in 1.5 seconds

            width: '12%'

        },1500, function () {

            $('.side-bar > a').text('open');

        });
    }

});

$('.new-backgrounds > div').click(function () {

    $(this).toggleClass('add-border');

    $(this).siblings().removeClass('add-border');

});

$('#update-button').click(function () {

    console.log('update button is working');

    //$('#intro-text').val(); // to get the values of the input type field for text

    //$('#intro-text-color').val(); // to get the values of the input type of color

    var newText = $('#intro-text').val();

    var newColor = $('#intro-text-color').val();

    var newJobTitle = $('#job-title').val();

    var newJobTitleColor = $('#job-title-color').val();

    $('.hero-container > p ').text(newText);

    $('.hero-container > p ').css('color', newColor);

    $('.hero-container h1').text(newJobTitle);

    $('.hero-container h1').css('color', newJobTitleColor);

    if ( $('.back-1').hasClass('add-border')){ // update header background image if class add border is present.

        $('header').css('background-image','url( '+ backgrounds[0] + ' )');

    } else if ( $('.back-2').hasClass('add-border')  ){

        $('header').css('background-image','url( '+ backgrounds[1] + ' )');
    } else if ( $('.back-3').hasClass('add-border')  ) {

        $('header').css('background-image', 'url( ' + backgrounds[2] + ' )');
    } else  {

        $('header').css('background-image', 'url( ' + backgrounds[3] + ' )');
    }

});
*/