const openW1 = document.getElementById('open1');
const modal1 = document.querySelector('.web_modal1');
const overlay1 = modal1.querySelector('.web_overlay1');
const closeBtn1 = modal1.querySelector('.button1');

const openModal = () => {
    modal1.classList.remove('web_hidden1');
}
const closeModal = () => {
    modal1.classList.add('web_hidden1');
}
overlay1.addEventListener('click', closeModal);
closeBtn1.addEventListener('click', closeModal);
openW1.addEventListener('click', openModal);


const openW2 = document.getElementById('open2');
const modal2 = document.querySelector('.web_modal2');
const overlay2 = modal2.querySelector('.web_overlay2');
const closeBtn2 = modal2.querySelector('.button2');

const openModal2 = () => {
    modal2.classList.remove('web_hidden2');
}
const closeModal2 = () => {
    modal2.classList.add('web_hidden2');
}
overlay2.addEventListener('click', closeModal2);
closeBtn2.addEventListener('click', closeModal2);
openW2.addEventListener('click', openModal2);



const openW3 = document.getElementById('open3');
const modal3 = document.querySelector('.web_modal3');
const overlay3 = modal3.querySelector('.web_overlay3');
const closeBtn3 = modal3.querySelector('.button3');

const openModal3 = () => {
    modal3.classList.remove('web_hidden3');
}
const closeModal3 = () => {
    modal3.classList.add('web_hidden3');
}
overlay3.addEventListener('click', closeModal3);
closeBtn3.addEventListener('click', closeModal3);
openW3.addEventListener('click', openModal3);



const openW4 = document.getElementById('open4');
const modal4 = document.querySelector('.web_modal4');
const overlay4 = modal4.querySelector('.web_overlay4');
const closeBtn4 = modal4.querySelector('.button4');

const openModal4 = () => {
    modal4.classList.remove('web_hidden4');
}
const closeModal4 = () => {
    modal4.classList.add('web_hidden4');
}
overlay4.addEventListener('click', closeModal4);
closeBtn4.addEventListener('click', closeModal4);
openW4.addEventListener('click', openModal4);