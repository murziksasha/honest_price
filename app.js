"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const inputValue = document.querySelector('#result'),
        btnRnd50 = document.querySelector('#rnd50'),
        btnRnd10 = document.querySelector('#rnd10'),
        btnReset = document.querySelector('#reset');

  const priceMin = +prompt('MiN value', '');
  const priceMax = +prompt('MaX value', '');

  if(isNaN(priceMin) || isNaN(priceMax)) {
    alert ('Not a NUMBER Value. Push RESET Button');
    inputValue.value = "ERROR";
  } else {
    confirm('ATTENTION PUSH ROUND MODE');
  }

  const results = [];
  let average = 0,
      total = 0;

  function scopeOfNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  for (let i = 1; i <= 10; i++){
    results.push(scopeOfNumber(priceMin, priceMax));
  }

  average = results.reduce((a,b)=>{
    return a + b;
  });

  function roundTo (val, scope) {
    return Math.round(val / scope ) * scope; 
  }

  total =  average / results.length;

  btnRnd10.addEventListener('click', () => {
    
    inputValue.value = roundTo(total, 10) ;
  });

  btnRnd50.addEventListener('click', () => {
    
    inputValue.value = roundTo(total, 50) ;
  });

  btnReset.addEventListener('click', () => {
    location.href=location.href;
  });
});

