// Objetivo: Manipulação dinâmica do DOM.

// 1. Crie um <p> com texto "Novo parágrafo" e insira no final do body
const novoParagrafo = document.createElement('p');
novoParagrafo.innerHTML = 'Novo parágrafo';

document.body.appendChild(novoParagrafo);

// 2. Adicione 3 novos <li> à #lista com textos "Item novo 1", etc
const lista = document.getElementById('lista');
for (let i = 1; i <= 3; i++) {
  let newLi = document.createElement('li');
  newLi.innerHTML = `Item novo ${i}`;
  lista.appendChild(newLi);
}

// // 3. Remova #elemento-remover após 3 segundos
setTimeout(() => {
  const elementoRemover = document.getElementById('elemento-remover');
  elementoRemover.remove();
}, 3000);

// // 4. Marque todos os checkboxes como "checked"
const checkboxes = document.querySelectorAll('input[type=checkbox]');
for (const checkbox of checkboxes) {
  checkbox.checked = true;
}