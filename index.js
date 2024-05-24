const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber; //variable to stroe the generated number
let attempts = 0; //count of attempts
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11

//random nnumber acceptable range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//function to check the player's guess
function checkGuess() {
  
  const guess = parseInt(guessInput.value, 10);
  attempts += 1;

  hideAllMessages(); //to hide the messages at the beginning 



  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = ''; //show correct guess message

    submitButton.disabled = true; //disable the submit 
    guessInput.disabled = true;   //diable submit


  } else {
      if (guess < targetNumber) {//check if too low 
         tooLowMessage.style.display = "";//show low message
      } else{
          tooHighMessage.style.display = ""
      }
      const remainingAttempts = maxNumberOfAttempts - attempts;//attempts left 
      numberOfGuessesMessage.style.display = '';
      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
      

      if (attempts === maxNumberOfAttempts ) {// correction 
      maxGuessesMessage.style.display = ""
      submitButton.disabled = true;
      guessInput.disabled = true;
    
    
    }
  }

   guessInput.value = ""//clearing the input  
   resetButton.style.display = ""

  }
 
 //function to hide all mesages
function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}


//for setting up game 
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

//buttonts
submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
//edit