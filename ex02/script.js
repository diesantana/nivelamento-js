// Objetivo: Praticar armazenamento e recuperação de JSON no Local Storage
// Complete os desafios abaixo:

const configuracoes = {
  tema: "escuro",
  notificacoes: true,
  volume: 75
};

// 1. Armazene o objeto 'configuracoes' no Local Storage como JSON
localStorage.setItem('config', JSON.stringify(configuracoes));

// 2. Recupere as configurações do Local Storage e converta de volta para objeto
const configuracoesSalvas = JSON.parse(localStorage.getItem('config'));

// 3. Modifique o tema para "claro" e salve novamente
configuracoesSalvas.tema = 'claro';
localStorage.setItem('config', JSON.stringify(configuracoesSalvas));

// 4. Crie uma função para limpar todas as configurações salvas
function limparConfiguracoes() {
  localStorage.clear();
}