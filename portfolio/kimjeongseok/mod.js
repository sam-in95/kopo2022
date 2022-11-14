const openM = document.getElementById('open');
const modal = document.querySelector('.mod_modal');
const overlay = modal.querySelector('.mod_overlay');
const closeBtn = modal.querySelector('.button');

const openModal = () => {
    modal.classList.remove('mod_hidden');
}
const closeModal = () => {
    modal.classList.add('mod_hidden');
}
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
openM.addEventListener('click', openModal);