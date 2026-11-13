//////////////////tabuada simples///////////////////////////////////

const numero = 5;
console.log(`--- Tabuada do ${numero} ---`);

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

//////////////////contagem regressiva para lançamento/////////////////

for (let segundos = 10; segundos >= 0; segundos--) {
    console.log(`Lançamento em: ${segundos} segundos`);
    if (segundos === 0) 
        console.log("Fogo!");
    }

///////////////////cofrinho//////////////////

let cofrinho = 0;
const meta = 100;
let dias = 0;

//enquanto não atingir a meta, continue adicionando moedas//
while (cofrinho < meta) {
    dias++;
    cofrinho += 12; //adiciona 12 reais por dia//
    console.log(`Dia ${dias}: total guardado R$ ${cofrinho}`);
}
console.log(`Meta atingida em ${dias} dias!`);

////////////////////CARRINHO DE COMPRAS//////////////////////

const carrinho = [25.50, 10.00, 8.90, 42.00];
let total = 0;

for (const preco of carrinho) {
    total += preco;
    console.log(`Adicionando item de R$ ${preco.toFixed(2)}`);
}

console.log(`valor final da compra: R$ ${total.toFixed(2)}`);

////////////////////BOLETIM/////////////////////

const boletim = {
    matematica: 8,
    portugues: 7,
    historia: 9,
    ciencias: 6
};

for (const disciplina in boletim) {
    console.log(`${disciplina.toUpperCase()}: nota ${boletim[disciplina]}`);
}