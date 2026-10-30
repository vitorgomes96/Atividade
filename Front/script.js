const valorConta = prompt("Qual é o valor da conta?");
const quantasPessoas = prompt("Quantas pessoas para dividir a conta?");
const calculo = valorConta / quantasPessoas;
alert(`---Resumo da Conta--- \n Consumo: R$ ${valorConta} \n Divisão por pessoa: R$ ${calculo}`);