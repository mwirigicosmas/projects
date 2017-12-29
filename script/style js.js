// global variables they are not inside of any function.

var firstName = 'Cosmas';

var secondName = 'Mwirigi';

var myColor = 'blue';

var myLanguage = 'javascript'

var currentYear = 2017;

var lastYear = 2016;

var maleGender = true;

var femaleGender = false

var exampleNumber = 0; // 0 value is always false to the computer

var exampleNum = 3; // data type number

var exampleNum2 = '3'; // 3 and '3 ' are of diffrent data types number and string to compare data types  use triple ===
// to compare just the value use double == which will be true since 3 and '3' are of the same value three.
// a single = is used to assign a value to a variable.

if (firstName == 'Cosmas' && secondName== 'Mwirigi'){

    $('#greeting').text( 'Hi am ' +firstName + ' '+ secondName );

    $('#job-role').css('color','blue');

    $('<h3 class="rates">My Rates </h3>').insertAfter($('#my-name + p +p +p +p + p')); // css selectors fo inserting to the Dom.

    var rates = [];

    rates[0] = 'Landing Page from 100 USD';

    rates[1] = 'PSD to HTML5, CSS3 no Js from 100USD';

    rates[2] = 'WEB APP from 200USD';

    var length = rates.length;

    $('<ul class="my-rates"></ul>').insertAfter($('.rates'));

    for ( var i =0 ; i<length ; i++){
        $('<li>' + rates[i] +  '</li>').appendTo($('.my-rates'));

    }
                        // parametres
    function colorChange(myNav, myColor) { // to change background colors of various elements by calling a single function
        $(myNav).css('background-color',myColor);

    }
               //arguments
    colorChange('nav','#7d8dad');

    colorChange('.about-me','#f2f5fa');

    colorChange('.contact-section','#d9d9cf');

}else {
    firstName = 'Cosii';

    secondName = 'Riggz';

    console.log('false');

    $('#greeting').text( 'Hi am ' +firstName + ' '+ secondName );

    $('header').css('background-image','url(img/1.jpg)');

    $(".col-left img").attr("src","img/17.jpg");

};

$(function () {
    console.log('what the hell')

    smooth(1000);

});

function smooth(duration) {

    $('a[href^="#"]').on('click', function (event) {

        var target = $( $(this).attr('href'));

        if (target.length){

            event.preventDefault();

            $('html, body').animate({

                scrollTop: target.offset().top

            }, duration);
        }

    });

}

function hamburger() {

    $('.hamburger').click(function () {

        $(this).toggleClass('is-active');
        $('.mobile-menu').toggle();

        
    })

}
hamburger();




/*
document.getElementById('job-role').innerHTML = 'Full stack developer';

$("#greeting").text("hello kenya " + firstName + secondName);

$(document).ready(function () {

    $("#greeting").text("hello kenya " + firstName + secondName);

});

document.getElementById('greeting').innerHTML = 'Hey it is me ' + firstName + ' '+ secondName ;

document.getElementsByClassName('logo')[0].innerHTML = firstName + ' ' +secondName ;

document.getElementById('my-name').innerHTML = firstName + ' ' + secondName ;

document.getElementById('job-role').style.color = myColor;

document.getElementById('job-role').style.fontSize = '30px';

 $('nav').css('background-color','#7d8dad');

    $('.about-me').css('background-color','#f2f5fa');

function colorChange() {
        // local variable exists only inside the function and cannot be accessed outside of the function.
        // if there is no local variable inside of the function javascript will look for global variable outside of the
        // function  and use it.
        // console.log(); outside of the function will result to an error of not defined if there is no global variable
        // best practice use variables inside of a function.
        var myLanguage = 'javascript'

        console.log('this function is running'+ ' ' + myLanguage);

    };
    colorChange();

    console.log('this function is running'+ ' ' + myLanguage);

    $('.hire-me').click(function () {

        console.log('Click function is working');

        $('.my-rates li:nth-child(3)').css('background-color','green'); // to access the children of an element

    })
*/













