const currentInput = document.querySelector('.currentInput');
const answerScreen = document.querySelector('.answerScreen');
const clearBtn = document.getElementById('clear');
const eraseBtn = document.getElementById('erase');
const evaluate = document.getElementById('evaluate');
const buttons = document.querySelectorAll('button');
let realTimeScreenValue = [];

clearBtn.addEventListener('click', () => {
  realTimeScreenValue = [''];
  answerScreen.innerHTML = 0;
  currentInput.classList = 'currentInput';
  answerScreen.classList = 'answerScreen';
  answerScreen.style.color = 'rgba(150, 150, 150, 0.87)';
});

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    //when clicked button is not erase
    if (!btn.id.match('erase')) {
      //to display value pressed
      realTimeScreenValue.push(btn.value);
      currentInput.innerHTML = realTimeScreenValue.join('');

      //to evaluate the answer
      if (btn.classList.contains('num_btn')) {
        answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
      }
    }
    //when erase button is clicked
    if (btn.id.match('erase')) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join('');
      answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
    }
    //when evaluate is clicked
    if (btn.id.match('evaluate')) {
      currentInput.classList = 'answerScreen';
      answerScreen.classList = 'currentInput';
      answerScreen.style.color = 'white';
    }

    //to prevent undefined errors
    if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
      answerScreen.innerHTML = 0;
    }
  });
});
