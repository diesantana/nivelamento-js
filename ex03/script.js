/**
 * EXERCÍCIO PRÁTICO: DESESTRUTURAÇÃO EM JAVASCRIPT
 * 
 * OBJETIVO: Praticar desestruturação de objetos e arrays
 * em parâmetros de funções com valores padrão.
 * 
 * INSTRUÇÕES:
 * Complete as funções abaixo seguindo os comentários.
 * Use desestruturação sempre que possível.
 */

// 1. FUNÇÃO QUE DESESTRUTURA OBJETO USUÁRIO
function exibirUsuario(usuario) {
    // Desestruture o objeto para obter nome e idade
    // Se idade não existir, use 18 como valor padrão
    // Retorne uma string: "Nome: [nome], Idade: [idade]"
    
    // SEU CÓDIGO AQUI ↓
    const {nome, idade = 18} = usuario;
    return  `Nome: ${nome}, Idade: ${idade}`;
}


// ÁREA DE TESTES - VERIFIQUE SEUS RESULTADOS
console.log("=== TESTES ===");

console.log("1. exibirUsuario:");
console.log(exibirUsuario({ nome: 'Ana', idade: 25 })); // "Nome: Ana, Idade: 25"
console.log(exibirUsuario({ nome: 'Carlos' }));        // "Nome: Carlos, Idade: 18"
