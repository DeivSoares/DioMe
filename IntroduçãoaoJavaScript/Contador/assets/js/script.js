var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

var btnA = document.getElementById('add')
var btnS = document.getElementById('remove')

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    btnS.classList.remove('desativado')

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black'
    }
    
    if (currentNumber == 10) {
        //ESCONDE O BOTÃO JUNTO COM A FUNÇÃO  SE O VALOR POR IGUAL A 10
        btnA.classList.add('desativado')
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    btnA.classList.remove('desativado')

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red'
    }

    if (currentNumber == -10) {
        //ESCONDE O BOTÃO JUNTO COM A FUNÇÃO SE O VALOR POR IGUAL A -10
        btnS.classList.add('desativado')
    }
}