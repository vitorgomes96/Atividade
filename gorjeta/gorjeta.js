const valorConta = prompt("Olá, qual foi o valor total da conta?");
const darGorjeta = prompt("Podemos incluir no valor total a taxa de 10% de serviço?(sim/não)");
const quantasPessoas = prompt("A conta será dividida para quantas pessoas?")
let total = valorConta;

if (darGorjeta === "sim") {total = valorConta * 1.10;}
const calculo = total / quantasPessoas;

alert(`--- Resumo da Conta --- \n
Consumo: R$ ${valorConta} \n
Gorjeta: ${darGorjeta === "sim" ? "10%" : "Não incluída"} \n
Total da conta: R$ ${total} \n
Divisão por pessoa: R$ ${calculo}`);