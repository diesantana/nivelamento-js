/**
 * EXERCÍCIO PRÁTICO: OPERADOR TERNÁRIO E COERÇÃO DE TIPOS
 * 
 * OBJETIVO: Praticar o uso do operador ternário e entender
 * como o JavaScript faz conversão automática de tipos (coerção).
 * 
 * INSTRUÇÕES:
 * Complete os desafios abaixo seguindo os comentários.
 * Preste atenção nos diferentes comportamentos de coerção.
 */

const nota = 7;
const saldo = "100";
const nome = "";
const idade = "25";

// 1. OPERADOR TERNÁRIO SIMPLES
console.log("1. Status da nota:", 
  /* Seu código aqui: use ternário para "Aprovado" se nota >= 7, senão "Reprovado" */
);

// 2. CONVERSÃO EXPLÍCITA DE TIPOS
console.log("2. Saldo como número:", 
  /* Seu código aqui: converta saldo para número usando Number() */
);

// 3. TERNÁRIO COM CONDIÇÃO COMPOSTA
console.log("3. Situação financeira:", 
  /* Seu código aqui: se saldo > 50 "Rico", senão "Pobre" (converta saldo para número) */
);

// 4. COERÇÃO IMPLÍCITA (CONVERSÃO AUTOMÁTICA)
console.log("4.1 true == 1?", 
  /* Seu código aqui: compare true com 1 */
);
console.log("4.2 false == 0?", 
  /* Seu código aqui: compare false com 0 */
);
console.log("4.3 '5' * 3 =", 
  /* Seu código aqui: multiplique string '5' por número 3 */
);

// 5. TERNÁRIO COM VALORES FALSY/TRUTHY
console.log("5.1 Nome válido?", 
  /* Seu código aqui: se nome for truthy "Válido", senão "Inválido" */
);
console.log("5.2 É maior de idade?", 
  /* Seu código aqui: se idade >= 18 "Sim", senão "Não" (converta idade para número) */
);