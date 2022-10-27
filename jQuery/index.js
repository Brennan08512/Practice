// $('h1').css('color','green')

$('h1').addClass('big-title margin-50')

$('h1').hasClass('margin-50') //see if the h1 has the class margin-50

$('button').text("Don't click me.") //changes all buttons can also use .html

$('img').attr('src')

$('input').keydown(function(e){
    $('h1').text(e.key)
})