// Objetivo: Praticar JSON.stringify() e JSON.parse()
// Complete os desafios abaixo:

const pessoa = {
  nome: "Ana",
  idade: 30,
  profissao: "Engenheira",
  hobbies: ["leitura", "ciclismo"]
};

// 1. Converta o objeto 'pessoa' para uma string JSON
const pessoaJSON = JSON.stringify(pessoa);

// 2. Converta a string JSON de volta para um objeto JavaScript
const pessoaObjeto = JSON.parse(pessoaJSON);

// 3. Modifique a string JSON para adicionar a propriedade "casado: false"
const pessoaModificadaOBJ = JSON.parse(pessoaJSON); // Transforma o JSON para Obj
pessoaModificadaOBJ.casado = false; // Adiciona a propriedade
const pessoaModificada = JSON.stringify(pessoaModificadaOBJ); // Converte o obj modificado para JSON


// 4. Verifique o tipo de 'pessoaJSON' e 'pessoaObjeto' usando typeof
console.log("Tipo de pessoaJSON:", typeof pessoaJSON);
console.log("Tipo de pessoaObjeto:", typeof pessoaObjeto);

console.log(pessoaJSON);
console.log(pessoaObjeto);
console.log(pessoaModificada);
