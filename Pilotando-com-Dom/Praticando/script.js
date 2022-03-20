// Minha resolução
/*
const buttonOpenModal = document.querySelector('#openModal');
const modalWrapper = document.querySelector('.invisible');

buttonOpenModal.addEventListener('click', removerClasse);

function removerClasse() {
  modalWrapper.classList.remove('invisible');
}

window.onkeyup = function (event) {
  if (event.key === 'Escape') {
    modalWrapper.classList.add('invisible');
  }
};
*/
// resolução do Mayk Brito

const buttonOpenModal = document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');

buttonOpenModal.onclick = function () {
  modalWrapper.classList.remove('invisible');
};

document.addEventListener('keydown', function (event) {
  const isEscKey = event.key === 'Escape';
  if (isEscKey) {
    modalWrapper.classList.add('invisible');
  }
});

// desafio: verificar se já contem a classe invisible para não ficar disparando ao clicar o esc na tela.

//Resolução
/*
document.addEventListener('keydown', function (event) {
  const isEscKey = event.key === 'Escape';
  const containClass = modalWrapper.classList.contains('invisible')
  if (isEscKey && containClass == false) {
    modalWrapper.classList.add('invisible');
  }
});

*/
