//calcular media

let notaUm = 7.5;
let notaDois = 8.0;
let notaTres = 6.5;

let mediaFinal = (notaUm + notaDois + notaTres) / 3;

console.log(`Resultado media final ${mediaFinal.toFixed(2)}`);

//compater 2 valores

let valorA = 10;
let valorB = "10";

if (valorA === valorB){
    console.log("True");
} 
else {
    console.log("False");
}

//comparar 3 valores 

if (valorA == valorB){
    console.log("True");
} 
else {
    console.log("False");
}

//estruturas condicionais: if, else if, else

    const pontuacao = 85;

    if (pontuacao >= 90) {
        console.log("Classificação: A");
    } else if (pontuacao >= 70) {
        console.log("Classificação: B");
    } else {
        console.log("Classificação: Precisa melhorar");
    }

//estruturas condicionais: atividade pratica 02

let idade = Number(prompt("Qual é a sua idade?"))
let altura = Number(prompt("Qual é a sua altura?"))
let podeEntrar = idade >= 16 && altura >= 1.60

if (podeEntrar) {alert(`Idade: ${idade} \n Altura: ${altura} \n Pode entrar? Você esta apto, pode entrar no brinquedo!`);}
else {alert(`Idade: ${idade} \n Altura: ${altura} \n Pode entrar? Você não esta apto, não pode entrar no brinquedo!`);}



