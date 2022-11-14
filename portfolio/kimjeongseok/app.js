const openA = document.getElementById('open');
const modal = document.querySelector('.app_modal');
const overlay = modal.querySelector('.app_overlay');
const closeBtn = modal.querySelector('.button');

const openModal = () => {
    modal.classList.remove('app_hidden');
}
const closeModal = () => {
    modal.classList.add('app_hidden');
}
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
openA.addEventListener('click', openModal);