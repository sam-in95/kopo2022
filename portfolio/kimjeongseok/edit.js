const ifrm = document.getElementById("youtube");

function c() {
    ifrm.src = "https://www.youtube.com/embed/WjmD-hx-uf0";
}
function c2() {
    ifrm.src = "";
}

const openButton = document.getElementById('open');
const modal = document.querySelector('.modal1');
const overlay = modal.querySelector('.modal_overlay');
const closeBtn = modal.querySelector('.button');
const iframe = modal.querySelector('iframe');
const openModal = () => {
    modal.classList.remove('hidden1');
}
const closeModal = () => {
    modal.classList.add('hidden1');
}
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
openButton.addEventListener('click', openModal);

// 위는 동영상에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ifrm2 = document.getElementById("youtube2");

function b() {
    ifrm2.src = "https://www.youtube.com/embed/stgyFIcGN0w";
}
function b2() {
    ifrm2.src = "";
}

const openButton2 = document.getElementById('open2');
const modal2 = document.querySelector('.modal2');
const overlay2 = modal2.querySelector('.modal_overlay2');
const closeBtn2 = modal2.querySelector('.button2');
const iframe2 = modal2.querySelector('iframe');
const openModal2 = () => {
    modal2.classList.remove('hidden2');
}
const closeModal2 = () => {
    modal2.classList.add('hidden2');
}
overlay2.addEventListener('click', closeModal2);
closeBtn2.addEventListener('click', closeModal2);
openButton2.addEventListener('click', openModal2);

// 위는 동영상에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~