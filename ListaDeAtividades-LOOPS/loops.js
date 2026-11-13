///Questão 1: 
/// Imprima com console.log todos os múltiplos de 3 situados entre 1 e 30 utilizando um loop for.

const numero = 3;
console.log(`--- Múltiplos de ${numero} entre 1 e 30 ---`);
for (let i = 1; i <= 30; i++) {
   if (i % numero === 0) {
    console.log(i);
   }
}

///Questão 2:
///Faça um loop for que inicie em 10 e decresce de 1 em 1 até 0. 
/// Ao término, exibir no console "Decolagem autorizada! 

for (let segundos = 10; segundos >= 0; segundos--) {
    console.log(`Lançamento em: ${segundos} segundos`);
    if (segundos === 0) 
        console.log("Decolagem autorizada!");
    }

///Questão 3:
/// Faça um loop para simular uma aplicação bancária onde uma pessoa começa com saldo de R$ 500,00.
/// A cada iteração do while, realize um saque de R$ 65,00 enquanto o saldo for suficiente para cobrir o valor do saque.
/// A cada saque, imprima: "Saque efetuado: R$ 65.00 | Saldo restante: R$ [saldo]".
/// Ao final do loop, mostrar o saldo residual que restou na conta.

let saldo = 500;
while (saldo >= 65) {
    saldo -= 65; // Realiza o saque de R$ 65,00
    console.log(`Saque efetuado: R$ 65.00 | Saldo restante: R$ ${saldo.toFixed(2)}`);
}
console.log(`Saldo residual na conta: R$ ${saldo.toFixed(2)}`)

/// Questão 4:
///Faça um loop para percorrer o array de pesos [89.5, 48.0, 109.5, 34.0, 77.0, 56.5] 
/// Exibir com um alerta apenas os pesos menores que 50.0 com a mensagem: "Abaixo do peso com ${peso}"

const pesos = [89.5, 48.0, 109.5, 34.0, 77.0, 56.5];
for (const peso of pesos) {
    if (peso < 50.0) {
        console.log(`Abaixo do peso com ${peso}`);}
    }

///Questão 5:
///Faça um loop for para percorrer a frase "Meu pé de laranja lima”.   
///Ao término, exibir no console cada letra da frase.

const frase = "Meu pé de laranja lima";
for (let i = 0; i < frase.length; i++) { ///frase.lenght retorna a quantidade de caracteres da frase.
    console.log(frase[i]);
}      
