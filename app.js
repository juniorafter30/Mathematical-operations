// global variables

let $score;

// variables

const h1 = document.querySelector('h1');
const buttonPomnoz = document.querySelector('.pomnoz');
const buttonPodziel = document.querySelector('.podziel');
let oryginalnyWynik = document.querySelector('.wynik');
let nowyWynik = document.querySelector('.nowywynik');

//addition function
// and score determination

let dodawanie = function(a,b) {
  return  $score = a + b;
  oryginalnyWynik.innerText = `${$score}`;
}

//multiplying function 

function mnozenie (a,b) {
  nowyWynik.textContent = $score * 2;
}
//dividing function 

function dzielenie (a,b){
nowyWynik.textContent = $score/2
}

mnozenie();
dzielenie();

//buttons listeners 

buttonPomnoz.addEventListener('click', mnozenie)
buttonPodziel.addEventListener('click', dzielenie)

dodawanie(2,9);