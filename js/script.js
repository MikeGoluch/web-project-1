let playersRoundScore;
let activePlayer;
let mainScores;

mainScores = [0, 0];
playersRoundScore = 0;
activePlayer = 0;
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function() {
    let diceRandom = Math.floor((Math.random()*6)+1);
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + diceRandom + '.png';
    

    if (diceRandom !== 1) {
        playersRoundScore += diceRandom;
        document.getElementById('current-' + activePlayer).textContent = playersRoundScore;
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        playersRoundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    mainScores[activePlayer] = playersRoundScore;
    let currentScore = document.getElementById('score-' + activePlayer);
    currentScore = mainScores[activePlayer];
    document.getElementById('score-' + activePlayer).textContent = currentScore;
});