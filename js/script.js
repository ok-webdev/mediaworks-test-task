const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const closeModal = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal__form');
const account = document.querySelector('#account');
const inputs = document.querySelectorAll('input');
const body = document.querySelector('body');

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
}

function hideModal() {
  modal.classList.remove('visible');
  toggleBackdrop();
  inputs.forEach((input) => (input.value = ''));
  body.style.overflow = 'auto';
}

function showModal() {
  modal.classList.add('visible');
  toggleBackdrop();
  body.style.overflow = 'hidden';
}

account.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);
modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  hideModal();
});
backdrop.addEventListener('click', hideModal);
