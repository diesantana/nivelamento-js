// Objetivo: Praticar loops while e do...while.
// Complete os desafios abaixo:

// 1. Conte de 10 a 1 (use while)
let contador = 10;
while(contador > 0) {
  console.log(contador);
  contador--;
}


// 2. Use do...while para imprimir números ímpares < 20
console.log();
console.log("Exercício 2: ");
let num = 1;
do {
  if(num % 2 !== 0) {
    console.log(num);
  }
  num++;
} while (num < 20);