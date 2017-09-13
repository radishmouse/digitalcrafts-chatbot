let inputElement = document.querySelector('input');
let button = document.querySelector('button');
let messageArea = document.querySelector('.message-area');

let robotAnswers = [
  'Welcome!',
  'How are you today?',
  'That is nice to hear.',
  'Do you like cats?',
  'Wonderful! Me too!',
  'Always a pleasure',
];

let currentAnswer = 0;

let addMessage = (text, className) => {
  let message = document.createElement('p');
  message.textContent = text;
  message.setAttribute('class', className);
  messageArea.appendChild(message);
};

let robotResponse = () => {
  let message = robotAnswers[currentAnswer];
  addMessage(message, 'robo-text');
  currentAnswer = currentAnswer + 1;
  if (currentAnswer == robotAnswers.length) {
    // start over!
    currentAnswer = 0;
  }
}

button.addEventListener('click', () => {
  let messageText = inputElement.value;
  addMessage(messageText);
  inputElement.value = '';
  setTimeout(robotResponse, 1100);
});
