const modalme = document.querySelector('.modalme');
const modalpro = document.querySelector('.modalpro');
const me = document.querySelector('.aboutme');
const pro = document.querySelector('.project');
const memed = document.querySelector('.aboutmemed');
const promed = document.querySelector('.projectmed');
const closeButtonme = document.querySelector('.close-buttonme');
const closeButtonpro = document.querySelector('.close-buttonpro');

me.addEventListener('click', () => {
    modalme.showModal();
});
pro.addEventListener('click', () => {
    modalpro.showModal();
  });
memed.addEventListener('click', () => {
    modalme.showModal();
});
promed.addEventListener('click', () => {
    modalpro.showModal();
  });
 
closeButtonme.addEventListener('click', () => {
    modalme.close();
});
closeButtonpro.addEventListener('click', () => {
    modalpro.close();
});