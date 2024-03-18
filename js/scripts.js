// inject current year in footer
const time = new Date();
console.log(time.getFullYear())
document.querySelector('#year').textContent = time.getFullYear();



const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
});
