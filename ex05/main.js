// main.js
// 4. Importe a função `somar` e `PI` do módulo modulo-matematica.js (named imports)
import {somar, pi} from './modulo-matematica.js';

// 5. Use as funções importadas para calcular: (somar(PI, 2) + sub(5, 1))
const soma = somar(5, 7);
const piValue = pi;

console.log(soma);
console.log(piValue);
