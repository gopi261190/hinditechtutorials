$(".toggle").click(function () {
    $('li').slideToggle('fast', function () {
        if ($(this).is(':visible'))
            $(this).css('display', 'flex');
    });
});

$('.count').counterUp({
    delay: 18,
    time: 2200
});


var mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}