// alert("olá mundo");
// console.log("olá mundo");

// a ordem dos códigos importa

// var a = "hd";

// var b = "Primeira linha \n Segunda linha"; //string: a informação que fica entre as aspas, cadeia de caracteres

// var a = b;

// console.log(a);


// var a = 1;
// var b = "1";

// console.log(a);
// console.log(b);

// console.log("1" + "1"); // soma de 2 strings resulta em concatenação: junção de palavras
// console.log(1 + 1);

// var c = null;

// console.log(c);


// + Adição
// -Subtração
// * Multiplicação
// / Divisão
// % Módulo
//
// ++ Incremento a++ var a + 1
// -- Decremento var a - 1

// =    x = y   x = y
// +=   x += y  x = x +y
// -=   x -= y  x = x - y
// *=   x *= y  x = x * y
// /=   x /= y  x = x / y
// %=   x %= y  x = x % y


// var d = 30;
// d = d % 28;

// console.log(d);


// == igual a
// === valor igual e igual
// ! = não é igual
// !== não igual ou não igual
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a

// var e = 3;
// var f = 4;

// console.log( e !=f );


// var idade = 9;

// var menor10 = idade <= 10;
// var maior65 = idade >= 65;

// var gratuidade = menor10 || maior65;

//var entre = maior20 && menor30;

// console.log("Idade", idade)
// console.log("Maior que 10", menor10);
// console.log("Maior que 65", maior65);
// console.log("Tem direito a gratuidade?", gratuidade);

// & - compara 2 valores booleanos, se ambos forem verdadeiros ele retorna TRUE, qualquer coisa diferente é False.
//  (|| significa OU)7


// var str = 'valor "texto entre aspas" qualquer'; //para colocar texto entre aspas a string tem q estar em aspas duplas o simples.
// var numero = 8
// str += " outro texto " + numero; //o sinal de soma na string serve para concatenar
// var numero2 = "8" * 2;
// adição em string é concatenação
// console.log(str);
// console.log(numero2);

// var g = "6.5";
// var h = "8";
// var i = parseFloat(g) + parseInt(h);

// console.log(i);


/*var numero3 = parseInt(prompt("Digite um número")) // o promp só immprime em string, por isso usa parseint para transformar em inteiro

var dobro = numero3 + numero3;

alert("O dobro de " + numero3 + " é " + dobro);*/


// var idade2 = 36;

// if (idade2 >= 35) {
//     console.log("pode")
//     console.log("Qual o seu pedido?")
//     }
// else if (idade2 >= 18) {
//     console.log("pode")
//     console.log("Mostre a identidade")
// } 
// else {
//     console.log("não pode")
//     console.log("Volte futuramente")
//     }


// //Operador ternário (?)
// var idade = 17;
// // var pode = idade >= 18 ? console.log("Pode") : console.log("Não pode");
// var pode = idade >= 18 ? true : false;
// console.log(pode);


// var nota1 = 8.0;
// var nota2 = 6.0;

// var media = (nota1 + nota2) / 2;

// if(media >= 7) {
//     console.log("Você passou com média " + media);
// }
// else {
//     console.log("Sua nota " + media + " não foi suficiente")
// }


// EXEMPLO SWITC EXEMPLO SWITC EXEMPLO SWITC
// var nota1 = 8.0;
// var nota2 = 7.0;

// var media = (nota1 + nota2) / 2;

// if(media >= 8) {
//     conceito = "Ótimo";
// }
// else if( media >= 6.5){
//     conceito = "bom";
// }
// else {
//     conceito = "Regular";
// }

// conceito = "mais ou menos" // será imprimido este conceito, para imprimir o switch a string desse conceito tem q ser otimo, bom ou recular

// console.log(media);
// console.log(conceito);

// switch(conceito) {
//     case "Ótimo":
//         console.log("Parabéns, você é um ótimo aluno!")
//         break; //usado para não continuar imprimindo todo o switch
//     case "Bom":
//         console.log("Você está quase perfeito")
//         break;
//     case "Regular":
//         console.log("Estude mais um pouco")
//         break;

//     default:
//         console.log("Houve algum erro")
//         break;
// }


//EXEMPLO1 FOR E WHILE REPETIÇÃO EXEMPLO1 FOR E WHILE REPETIÇÃO EXEMPLO1 FOR E WHILE REPETIÇÃO
// var numero = 5;

// for(var vez = 0; vez < numero; vez++) {
//     console.log("Executando o for, pela " + vez + " vez")
// }
// console.log("Acabou")

// while (numero < 10) {
//     console.log("Número " + numero);
//     numero++;
// }

// console.log("Acabou")

//EXEMPLO 2 EXEMPLO 2 EXEMPLO 2 EXEMPLO 2
// var numero = Math.random() * 100;

// while (numero < 90) {
//     console.log(numero);
//     numero = Math.random() * 100;
// }

// console.log(numero);
// console.log("Acabou");


//EXEMPLO ARRAYS EXEMPLO ARRAYS EXEMPLO ARRAYS EXEMPLO ARRAYS EXEMPLO ARRAYS
// var alunos = new Array("Igor", "josé", "Marcos", "Mariana"); // de cima
// var alunosEX = ["Igor", "josé", "Marcos", "Mariana", "Lucas"]; //isso também e um arrays é a mesma coisa do de cima mas de forma diferente

// console.log(alunos[0]); //o número entre colchetes e a posição que vc quer selecionar do array, no caso [0] é a primeira posição
// console.log(alunosEX); // imprimindo array de outra forma, nesta forma da pra ver o (length): tamanho do array
// console.log(alunosEX.length);
// index= índice: significa a posição do array: o length
// for (var i = 0; i < alunosEX.length; i++) {
//     console.log(alunosEX[i])
// }
//ou
// for (var aluno of alunosEX) {
//     console.log(aluno);
// }


//FUNÇÃO FUNÇÃO FUNÇÃO FUNÇÃO FUNÇÃO FUNÇÃO FUNÇÃO FUNÇÃO
// function media(n1, n2) {
//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2) / 2;
//     //console.log(media);

//     return media;
// }

// var resultado1 = media(8, 9);
// var resultado2 = media(5, 9);

// console.log(resultado1 + " E " + resultado2);

// var media = (n1, n2) => {
//     return(n1 + n2) / 2;
// }

// console.log(media(5, 6));



//tudo aprendido a cima em um mini projeto
var nomes = ["igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2){
    return (n1 + n2) / 2
}

function passou(media) {
    
    if (media >= 7) {
        return "Aprovado" 
    }else {
        return "Reprovado"
    }
}

for (var index in nomes) {
    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2)

    console.log(nomes[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        m +
        " - " +
        passou(m));
}