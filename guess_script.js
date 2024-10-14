// Text DOM modification <p>
/* let startGuessing = document.querySelector('.message');
//console.log(startGuessing);
startGuessing.textContent = 'We modified the text, ha ha';
startGuessing.setAttribute('id', 'changingMessage');
startGuessing.removeAttribute('id');
let rightSection = document.querySelector('.right');
//rightSection.innerHTML = `<div id="newDiv"><button class="btn">Behold, button</button><div>`;

let bottomColor = document.querySelector('main');
bottomColor.style.backgroundColor = 'green';

let buttonAgain = document.querySelector('.again');
buttonAgain.style.cssText = 'display: flex; flex-direction: left; top: 6rem; right: 2rem; left:unset;';

let questionMark = document.querySelector('.number');
questionMark.style.color = 'crimson';*/


// Events and eventListeners

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', () => {
    alert('You clicked the Again! button.');
}, {once: true});

const questionMark = document.getElementsByClassName('number')[0];
function randomBgColor(number){
    return Math.floor(Math.random() * (number + 1));
};
questionMark.addEventListener('click', () => {
    const randomColor = `rgb(${randomBgColor(255)} ${randomBgColor(255)} ${randomBgColor(255)})`;
    //console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
});

/* const h1Element = document.querySelector('h1');
h1Element.addEventListener(); */
const paragraph = document.querySelector('p');
var messParagraph = document.querySelector('p.message');
messParagraph.addEventListener('mouseover', () => {
    console.log(' Mouse Over');
    messParagraph.style.cssText = 'color: green; font-size: 3rem;';
});

messParagraph.addEventListener('mouseout', () => {
    messParagraph.style.cssText = 'color: #eeeee; font-size: 1.4rem;';
})