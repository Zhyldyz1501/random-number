const result = document.querySelector('#result');
const h3 = document.querySelector('h3');
const lowInput = document.querySelector('#lower');
const upInput = document.querySelector('#upper');
const generateBtn = document.querySelector('#generateBtn');
const clearBtn = document.querySelector('#clearBtn');

generateBtn.addEventListener('click', generate)
function generate(){
    if(lowInput.value === '' || upInput.value === ''){
        return h3.innerHTML = 'Invalid Input'
    }
    let lowNum = Math.ceil(lowInput.value);
    let highNum = Math.floor(upInput.value);
    let randomNum = Math.floor(Math.random()* (highNum - lowNum + 1) + lowNum)
    h3.innerHTML = randomNum
}

clearBtn.addEventListener('click', clearall)
function clearall(){
    lowInput.value = ''
    upInput.value = ''
    h3.innerHTML = ''
}