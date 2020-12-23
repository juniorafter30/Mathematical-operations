// global variables

let $score;



// variables

const h1 = document.querySelector('h1');
const buttonPomnoz = document.querySelector('.pomnoz');
const buttonPodziel = document.querySelector('.podziel');
let oryginalnyWynik = document.querySelector('.wynik');
let nowyWynik = document.querySelector('.nowyWynik');


let dodawanie = function(a,b) {
   return $score = a + b;
}

console.log(dodawanie(2,3));

