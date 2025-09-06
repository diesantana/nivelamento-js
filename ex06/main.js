// Objetivo: Praticar controle de loops com break/continue.
// Complete os desafios abaixo:

// 1. Interrompa o loop ao encontrar o número 5
console.log('1. Interrompa o loop ao encontrar o número 5');
for (let i = 1; i <= 10; i++) {
  if(i == 5) break;
  console.log(i);""
}

// // 2. Pule números divisíveis por 3 (use continue)
console.log('2. Pule números divisíveis por 3 (use continue)');
for (let i = 1; i <= 10; i++) {
  if(i % 3 == 0) continue;
  console.log(i)
}

// // 3. Encontre a primeira fruta com mais de 5 letras
const frutas = ["uva", "abacaxi", "kiwi", "morango"];
console.log('3. Encontre a primeira fruta com mais de 5 letras');
for (const fruta of frutas) {
  if(fruta.length > 5) {
    console.log(`Fruta com mais de 5 letras: ${fruta}`);
  }
}