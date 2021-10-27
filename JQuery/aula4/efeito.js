$(function(){
/*
    var time

    $(window).scroll(function(e){
        console.log("Scroll ativo")
    })

    $(window).resize(function(e){
        //console.log("minha tela esta sendo redimencionada")
        clearTimeout(time)
        time = setTimeout(function(){
            location.href = "http://www.igor.com"
        },1000)
    })

    $('a').click(function(e){
        e.preventDefault();
        //or return false
        // nao vai funcionar o comando  
    })
*/

    $('.box1').click(function(e){
        e.stopPropagation()
    })

    $('body').click(function(){
        $('body').css('background-color','green');
    })



})