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

  let  total = 0;

  function scopeOfNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  

  function roundTo (val, scope) {
    return Math.round(val / scope ) * scope; 
  }

  total = scopeOfNumber(priceMin, priceMax);

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

