/**
 * EXERCÍCIO PRÁTICO: SWITCH EM JAVASCRIPT
 *
 * OBJETIVO: Praticar o uso do switch para múltiplas condições
 * de forma limpa e eficiente.
 *
 * INSTRUÇÕES:
 * Complete os 2 exercícios abaixo usando switch.
 */

// 1. CLASSIFICAR DIAS DA SEMANA
function classificarDia(dia) {
  // Complete esta função para:
  // - Usar switch com o parâmetro dia
  // - Retornar mensagens específicas para cada dia
  // - Segunda: "Início de semana produtivo!"
  // - Quarta: "Meta de semana quase lá!"
  // - Sexta: "Fim de semana chegando!"
  // - Sábado/Domingo: "Descanso merecido!"
  // - Default: "Dia de trabalho normal"

  let mensagem = "";

  // SEU CÓDIGO AQUI (use switch)
  switch (dia.toLowerCase()) {
    case "segunda":
      mensagem = "Início de semana produtivo!";
      break;
    case "quarta":
      mensagem = "Meta de semana quase lá!";
      break;
    case "sexta":
      mensagem = "Fim de semana chegando!";
      break;
    case "sabado":
    case "domingo":
      mensagem = "Descanso merecido!";
      break;
    default:
      mensagem = "Dia de trabalho normal";
      break;
  }

  return mensagem;
}

// 2. CONVERTER NOTA EM CONCEITO
function converterNota(nota) {
  // Complete esta função para:
  // - Usar switch(true) para verificar intervalos
  // - Retornar o conceito conforme a nota:
  //   >= 9: "A"
  //   >= 7: "B"
  //   >= 5: "C"
  //   < 5: "D"

  let conceito = "";

  // SEU CÓDIGO AQUI (use switch(true))

  return conceito;
}

// ÁREA DE TESTES - VERIFIQUE SEUS RESULTADOS
console.log("=== TESTES DO SWITCH ===");

console.log("1. Classificação de Dias:");
console.log("Segunda:", classificarDia("segunda"));
console.log("Quarta:", classificarDia("quarta"));
console.log("Sexta:", classificarDia("sexta"));
console.log("Domingo:", classificarDia("domingo"));
console.log("Terça:", classificarDia("terça"));

// console.log("\n2. Conversão de Notas:");
// console.log("Nota 9.5:", converterNota(9.5));
// console.log("Nota 7.5:", converterNota(7.5));
// console.log("Nota 6:", converterNota(6));
// console.log("Nota 4:", converterNota(4));
