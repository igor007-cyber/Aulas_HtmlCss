// TIPOS DE FUNÇÃO
window.onload = function(){

    var teste = 'igor'

    function nomeFuncao(num1,num2){
        console.log("minha função")
        console.log(num1)
        console.log(num2)
        console.log(teste)
       
        if(num1 == 10){
            console.log("esse numero é 10")
        } 
    }    

    nomeFuncao(10,20)

    // POSSO COLOCAR UMA FUNÇÃO DENTRO DA VARIAVEL
    var variavel = function(){
        console.log("uma função dentro da variavel")
    }

    variavel()


    var obj = {'nome': 'igor', 'idade' : 23,'func':function(){console.log("uma função dentro de um objeto")}}

    obj.func1 = function(){
        console.log('outra função')
    }

    console.log(obj.nome)
    obj.func()
    console.log(obj.idade)
    obj.func1()


    //MATRIZ 
    
    var variavel1 = []
    variavel1[0] = []
    variavel1[0][1] = "igor"

    console.log(variavel1[0][1])


    var outro = []
    outro.obj = {}
    outro.obj.nome = 'igor no objeto'    
    console.log(outro.obj.nome)

}