const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const closeModal = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal__form');
const account = document.querySelector('#account');

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
}

function hideModal() {
  modal.classList.remove('visible')
  toggleBackdrop();
}

function showModal () {
  modal.classList.add('visible');
  toggleBackdrop();
}

account.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);
modalForm.addEventListener('submit', event => {
  event.preventDefault();
  hideModal();
})
