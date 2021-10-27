$(function(){

    //var largura = $('.box').width()
    //console.log(largura)
    $('.box').width()//pegamos a largura do nosso elemento

    //setamos a largura.
    $('.box').css('width', '900px')
    console.log($('.box').width())
    console.log($('.box').innerWidth()) // ele vai calcular todo, ate o padding
    console.log($('.box').outherWidth(true)) // ele vai pegar a borda, a margin(quando coloca true) e o width

    console.log($('.box').height())
    console.log($('.box').innerHeight()) 
    console.log($('.box').outherHeight(true))
});