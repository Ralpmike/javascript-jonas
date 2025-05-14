'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

function closeModal() {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
}

function openModal() {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
}

for (let index = 0; index < btnsShowModal.length; index++) {
  btnsShowModal[index].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    closeModal();
  }
});
