
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value == 'C') {
      display.value = '';
    }
     else if (value == '=') {
          calculateResult();
    }
     else {
      display.value += value;
    }
  });
});



const  calculateResult=()=> {
  try {
    
    display.value = eval(display.value);
  } catch {
    alert('Invalid Expression');
    display.value = '';
  }
}

