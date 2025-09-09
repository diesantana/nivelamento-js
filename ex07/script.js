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


// 1. FUNÇÃO QUE DESESTRUTURA OBJETO ANINHADO
function exibirEndereco(usuario) {
    // Desestruture para obter:
    // - nome da rua (caminho: usuario.endereco.rua)
    // - cidade (padrão: 'São Paulo')
    // - CEP (se não existir, use '00000-000')
    // Retorne: "Rua: [rua], Cidade: [cidade], CEP: [cep]"
    
    // SEU CÓDIGO AQUI ↓
    const {endereco: {rua = 'undefined', cep = '00000-000'} = {}, cidade = 'São Paulo'} = usuario;
    return `Rua: ${rua}, Cidade: ${cidade}, CEP: ${cep}`;
}

// ÁREA DE TESTES - VERIFIQUE SEUS RESULTADOS
console.log("=== TESTES ===");

console.log("\n1. exibirEndereco:");
console.log(exibirEndereco({ 
    nome: 'Maria', 
    endereco: { 
        rua: 'Das Flores', 
        cep: '01234-567' 
    } 
})); // "Rua: Das Flores, Cidade: São Paulo, CEP: 01234-567"

console.log(exibirEndereco({ nome: 'João' })); // "Rua: undefined, Cidade: São Paulo, CEP: 00000-000"