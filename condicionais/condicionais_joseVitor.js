
let corPulseira = "vermelha";
let idadePaciente = 43;
let gestante = false;

// Classificação do atendimento
if (corPulseira === "vermelha") {
    console.log("Atendimento de Emergência: Sala de trauma imediata")
}
 else
     if (corPulseira === "amarela") {
 if (idadePaciente >= 60 || gestante === true) 

 { console.log("Atendimento Urgente: Prioridade Especial Preferencial");}

 else
     {console.log("Atendimento Urgente: Fila padrão amarela");}

}
 else
 if (corPulseira === "verde") {

// Operador ternário
 let encaminhamento = idadePaciente < 12
? "Encaminhar para Pediatria"
: "Encaminhar para Clínica Geral";

console.log(encaminhamento);
 }
 else { alert("Código de pulseira desconhecido!");}