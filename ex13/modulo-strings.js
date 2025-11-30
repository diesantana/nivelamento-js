
export function capitalizar(str) {
  // 1. Converte toda a string para minúsculas
  // 2. Divide a string em um array de palavras usando o espaço como delimitador
  // 3. Usa map() para iterar sobre cada palavra no array
  // 4. Para cada palavra, capitaliza a primeira letra e a concatena com o resto da palavra (que já está em minúsculas)
  // 5. Junta todas as palavras de volta em uma string com espaços
  return str.toLowerCase().split(' ').map(function(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
  }).join(' ');
}

function contarCaracteres(str) {
    return str.length;
}

export {contarCaracteres as tamanhoString};