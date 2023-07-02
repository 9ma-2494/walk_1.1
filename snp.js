let number = document.getElementById('span1')
let directions = document.getElementById('span2')
let button = document.getElementById('btn')
let counter = document.getElementById('counter')
let roulette1 = ['1','3','5'];
let roulette2 = ['右', '左'];
let count_value = 0

button.addEventListener('click',function(){
    var get1 = Math.floor( Math.random() * 3 ) ;
    var get2 = Math.floor( Math.random() * 2 ) ;
    number.innerText = roulette1[get1];
    directions.innerText = roulette2[get2];
    count_value += 1;
    counter.innerText = count_value;
});