let userScore = 0;
let compScore = 0;

const genCompChoice = () =>
{
    const options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
let choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const choiceID = choice.getAttribute('id');
        console.log(choiceID);
        playGame(choiceID);
    });
});
let uScore = document.getElementById('your-score');
let cScore = document.getElementById('comp-score');
let rmessage = document.getElementById('message');
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    let resultMessage = '';

    if (userChoice === compChoice) {
        resultMessage = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        userScore++;
        uScore.innerText = userScore;
        resultMessage = `You win! ${userChoice} beats ${compChoice}`;
        rmessage.style.backgroundColor = 'green';
    } else {
        compScore++;
        cScore.innerText = compScore;
        resultMessage = `You lose! ${compChoice} beats ${userChoice}`;
        rmessage.style.backgroundColor = 'red';
    }

    rmessage.innerText = resultMessage;
}