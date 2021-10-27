$(function(){

    function validarCliqueHover(){
       $('#teste').click(function(){
        $('.artigo2').css('background-color', 'pink')
    })


    $('.artigo2').hover(function(){
        $('#teste').css('background-color', 'black')
    },$('.artigo2').hover(function(){
        $('#teste').css('background-color', 'purple')
    })) 
    }


    function validarFormulario(){
        $('select').change(function(){
            alert("meu select foi alterado")
        })
    }

    validarCliqueHover()
    validarFormulario()
})