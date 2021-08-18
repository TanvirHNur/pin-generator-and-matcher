
function getPin(){
    const pin = Math.round(Math.random () * 10000)
    const pinString = pin + ''
    if(pinString.length == 4){
        return pin;
    }
    else {
        return getPin()
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
 let number = event.target.innerText;
  const calcInput = document.getElementById('display-number');

  if(isNaN(number)){
      if(number == 'C'){
          calcInput.value = '';
      }
  }
  else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber+ number;
    calcInput.value = newNumber;
  }
  
//    = number;
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const number = document.getElementById('display-number').value;
    const succesMgs = document.getElementById('notify-succes');
    const failErorr = document.getElementById('notify-fail');
    if(pin == number){
        succesMgs.style.display = 'block'
        failErorr.style.display = 'none';
    }
    else{
        failErorr.style.display = 'block';
        succesMgs.style.display = 'none';
    }
}