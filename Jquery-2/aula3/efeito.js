$(function(){
/*
    let el = $('.box');
    let texto =  'ola mundo';
    
    //el.html('<div class="teste"> meu elemento</div>');
    el.html("<div class=\"teste\"> " + texto + " </div>");
    e//l.html('<h1 class="texto"> meu texto em javascript</h1>');

    el.html(el.html() + '<h1 class="texto"> meu texto em javascript</h1>');


    $('.box2').text("<div></div>")
    $('.box2').text($('.box2').text() +"ola mundo")    

    $('input[type=text]').val("ola mundo")
    $('textarea').text("ola mundo")

*/

    $('input[type=text]').click(function(){
        var v = $('input[type=text]').val();
        //var var2 = v.split("@")//esse comando vai separar a nossa string
        //console.log(var2)
        //console.log(v.substr(1,4))//ela corta a nossa string
        var splitstr = v.split('@')

        if(splitstr[1] == 'hotmail.com'){
            $('input[type=text]').css('opacity','0')
        }else{
            console.log('nao deu certo')
        }
    
    })
});