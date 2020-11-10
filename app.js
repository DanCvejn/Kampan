// Mouse Move

$('.background').mousemove(function(e){
    const moveX = (e.pageX * -1/30);
    const moveY = (e.pageY * -1/30);
    $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})

// Buy now

$('.silly').click(function(){
    $('.alert').addClass('alert-on');
    setTimeout(function(){
        $('.alert').removeClass('alert-on');
    }, 3000);
})